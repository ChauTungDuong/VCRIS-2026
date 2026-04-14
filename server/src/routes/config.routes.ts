import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = Router();

// GET /api/v1/config — Get all site config (public)
router.get("/", async (_req: Request, res: Response) => {
  try {
    const configs = await prisma.siteConfig.findMany();
    const configMap: Record<string, unknown> = {};
    for (const c of configs) {
      configMap[c.key] = c.value;
    }
    res.json({ config: configMap });
  } catch (error) {
    console.error("Get config error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT /api/v1/config — Update site config (admin)
router.put("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const updates = req.body; // { key1: value1, key2: value2, ... }

    if (!updates || typeof updates !== "object") {
      res.status(400).json({ error: "Request body must be an object" });
      return;
    }

    for (const [key, value] of Object.entries(updates)) {
      await prisma.siteConfig.upsert({
        where: { key },
        update: { value: value as any },
        create: { key, value: value as any },
      });
    }

    const configs = await prisma.siteConfig.findMany();
    const configMap: Record<string, unknown> = {};
    for (const c of configs) {
      configMap[c.key] = c.value;
    }

    res.json({ config: configMap });
  } catch (error) {
    console.error("Update config error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
