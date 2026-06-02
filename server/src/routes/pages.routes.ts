import { Router, Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middleware/auth.js";
import { config } from "../config.js";
import { emptyPuckContent, normalizePuckContent } from "../utils/puck.js";

const prisma = new PrismaClient();
const router = Router();

function normalizeStoredContent(content: unknown) {
  return normalizePuckContent(content ?? emptyPuckContent());
}

// GET /api/v1/pages — List all pages (public)
router.get("/", async (req: Request, res: Response) => {
  try {
    const locale =
      typeof req.query.locale === "string"
        ? req.query.locale
        : config.defaultLocale;

    const pages = await prisma.page.findMany({
      where: { isPublished: true },
      include: {
        translations: {
          where: { locale },
          select: { title: true, locale: true },
        },
      },
      orderBy: { sortOrder: "asc" },
    });

    res.json({
      pages: pages.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: (p as any).translations[0]?.title || p.slug,
        isSystem: p.isSystem,
        isPublished: p.isPublished,
        updatedAt: p.updatedAt,
      })),
    });
  } catch (error) {
    console.error("List pages error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/v1/pages/all — List all pages including unpublished (admin)
router.get("/all", authMiddleware, async (req: Request, res: Response) => {
  try {
    const locale =
      typeof req.query.locale === "string"
        ? req.query.locale
        : config.defaultLocale;

    const pages = await prisma.page.findMany({
      include: {
        translations: {
          where: { locale },
          select: { title: true, locale: true },
        },
      },
      orderBy: { sortOrder: "asc" },
    });

    res.json({
      pages: pages.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: (p as any).translations[0]?.title || p.slug,
        isSystem: p.isSystem,
        isPublished: p.isPublished,
        sortOrder: p.sortOrder,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        publishedAt: p.publishedAt,
      })),
    });
  } catch (error) {
    console.error("List all pages error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/v1/pages/:slug — Get page content (public)
router.get("/:slug", async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug as string;
    const locale =
      typeof req.query.locale === "string"
        ? req.query.locale
        : config.defaultLocale;

    const page = await prisma.page.findUnique({
      where: { slug },
      include: {
        translations: {
          where: { locale },
        },
      },
    });

    if (!page || !page.isPublished) {
      res.status(404).json({ error: "Page not found" });
      return;
    }

    const translation = (page as any).translations[0];
    if (!translation) {
      // fallback to default locale
      const fallback = await prisma.pageTranslation.findFirst({
        where: { pageId: page.id, locale: config.defaultLocale },
      });

      if (!fallback) {
        res.status(404).json({ error: "No content for this page" });
        return;
      }

      res.json({
        page: {
          id: page.id,
          slug: page.slug,
          title: fallback.title,
          content: normalizeStoredContent(fallback.content),
          locale: fallback.locale,
          isSystem: page.isSystem,
          updatedAt: page.updatedAt,
        },
      });
      return;
    }

    res.json({
      page: {
        id: page.id,
        slug: page.slug,
        title: translation.title,
        content: normalizeStoredContent(translation.content),
        locale: translation.locale,
        isSystem: page.isSystem,
        updatedAt: page.updatedAt,
      },
    });
  } catch (error) {
    console.error("Get page error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/v1/pages — Create new page (admin)
router.post("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const { slug, title, content, locale = config.defaultLocale } = req.body;
    const normalizedContent = normalizeStoredContent(content);

    if (!slug || !title) {
      res.status(400).json({ error: "slug and title are required" });
      return;
    }

    // Check slug conflict
    const existing = await prisma.page.findUnique({ where: { slug } });
    if (existing) {
      res.status(409).json({ error: "Page with this slug already exists" });
      return;
    }

    const maxOrder = await prisma.page.aggregate({ _max: { sortOrder: true } });

    const page = await prisma.page.create({
      data: {
        slug,
        sortOrder: (maxOrder._max.sortOrder || 0) + 1,
        translations: {
          create: {
            locale,
            title,
            content: normalizedContent as Prisma.InputJsonValue,
          },
        },
      },
      include: { translations: true },
    });

    res.status(201).json({ page });
  } catch (error) {
    console.error("Create page error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT /api/v1/pages/:slug — Update page content (admin)
router.put("/:slug", authMiddleware, async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug as string;
    const {
      title,
      content,
      locale = config.defaultLocale,
      isPublished,
    } = req.body;
    const normalizedContent = content ? normalizeStoredContent(content) : null;

    const page = await prisma.page.findUnique({
      where: { slug },
      include: {
        translations: { where: { locale } },
      },
    });

    if (!page) {
      res.status(404).json({ error: "Page not found" });
      return;
    }

    // Save version before updating
    const translation = (page as any).translations[0];
    if (translation && normalizedContent) {
      const lastVersion = await prisma.pageVersion.findFirst({
        where: { pageId: page.id, locale },
        orderBy: { version: "desc" },
      });

      await prisma.pageVersion.create({
        data: {
          pageId: page.id,
          locale,
          title: translation.title,
          content: normalizeStoredContent(
            translation.content,
          ) as Prisma.InputJsonValue,
          version: (lastVersion?.version || 0) + 1,
          createdBy: req.user?.email || "unknown",
        },
      });
    }

    // Update or create translation
    if (translation) {
      await prisma.pageTranslation.update({
        where: { id: translation.id },
        data: {
          ...(title && { title }),
          ...(normalizedContent && {
            content: normalizedContent as Prisma.InputJsonValue,
          }),
        },
      });
    } else {
      await prisma.pageTranslation.create({
        data: {
          pageId: page.id,
          locale,
          title: title || slug,
          content: (normalizedContent ||
            emptyPuckContent()) as Prisma.InputJsonValue,
        },
      });
    }

    // Update page metadata
    await prisma.page.update({
      where: { slug },
      data: {
        ...(isPublished !== undefined && { isPublished }),
        ...(isPublished && { publishedAt: new Date() }),
      },
    });

    const updated = await prisma.page.findUnique({
      where: { slug },
      include: { translations: { where: { locale } } },
    });

    res.json({
      page: updated
        ? {
            ...updated,
            translations: (updated as any).translations?.map((item: any) => ({
              ...item,
              content: normalizeStoredContent(item.content),
            })),
          }
        : updated,
    });
  } catch (error) {
    console.error("Update page error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/v1/pages/:slug — Delete page (admin, non-system only)
router.delete("/:slug", authMiddleware, async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug as string;

    const page = await prisma.page.findUnique({ where: { slug } });
    if (!page) {
      res.status(404).json({ error: "Page not found" });
      return;
    }

    if (page.isSystem) {
      res.status(403).json({ error: "Cannot delete system page" });
      return;
    }

    await prisma.page.delete({ where: { slug } });
    res.json({ message: "Page deleted successfully" });
  } catch (error) {
    console.error("Delete page error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/v1/pages/:slug/versions — Get page version history (admin)
router.get(
  "/:slug/versions",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const slug = req.params.slug as string;
      const locale =
        typeof req.query.locale === "string"
          ? req.query.locale
          : config.defaultLocale;

      const page = await prisma.page.findUnique({ where: { slug } });
      if (!page) {
        res.status(404).json({ error: "Page not found" });
        return;
      }

      const versions = await prisma.pageVersion.findMany({
        where: { pageId: page.id, locale },
        orderBy: { version: "desc" },
        take: 50,
        select: {
          id: true,
          version: true,
          title: true,
          createdAt: true,
          createdBy: true,
        },
      });

      res.json({ versions });
    } catch (error) {
      console.error("Get versions error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

// POST /api/v1/pages/:slug/restore/:versionId — Restore a version (admin)
router.post(
  "/:slug/restore/:versionId",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const slug = req.params.slug as string;
      const versionId = req.params.versionId as string;
      const locale =
        typeof req.query.locale === "string"
          ? req.query.locale
          : config.defaultLocale;

      const page = await prisma.page.findUnique({ where: { slug } });
      if (!page) {
        res.status(404).json({ error: "Page not found" });
        return;
      }

      const version = await prisma.pageVersion.findUnique({
        where: { id: parseInt(versionId) },
      });

      if (!version || version.pageId !== page.id) {
        res.status(404).json({ error: "Version not found" });
        return;
      }

      // Save current as new version first
      const currentTranslation = await prisma.pageTranslation.findFirst({
        where: { pageId: page.id, locale },
      });

      if (currentTranslation) {
        const lastVersion = await prisma.pageVersion.findFirst({
          where: { pageId: page.id, locale },
          orderBy: { version: "desc" },
        });

        await prisma.pageVersion.create({
          data: {
            pageId: page.id,
            locale,
            title: currentTranslation.title,
            content: normalizeStoredContent(
              currentTranslation.content,
            ) as Prisma.InputJsonValue,
            version: (lastVersion?.version || 0) + 1,
            createdBy: req.user?.email || "unknown",
          },
        });

        // Restore
        await prisma.pageTranslation.update({
          where: { id: currentTranslation.id },
          data: {
            title: version.title,
            content: normalizeStoredContent(
              version.content,
            ) as Prisma.InputJsonValue,
          },
        });
      }

      res.json({ message: "Version restored successfully" });
    } catch (error) {
      console.error("Restore version error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

export default router;
