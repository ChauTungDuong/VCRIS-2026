import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const prisma = new PrismaClient();
const router = Router();

// POST /api/v1/media/upload — Upload file (admin)
router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
      }

      const file = req.file;
      const mediaFile = await prisma.mediaFile.create({
        data: {
          filename: file.originalname,
          path: file.path,
          url: `/uploads/${file.filename}`,
          mimeType: file.mimetype,
          size: file.size,
        },
      });

      res.status(201).json({ file: mediaFile });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// GET /api/v1/media — List media files (admin)
router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const pageParam = typeof req.query.page === "string" ? req.query.page : "1";
    const limitParam = typeof req.query.limit === "string" ? req.query.limit : "20";
    const page = parseInt(pageParam);
    const limit = parseInt(limitParam);
    const skip = (page - 1) * limit;

    const [files, total] = await Promise.all([
      prisma.mediaFile.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.mediaFile.count(),
    ]);

    res.json({
      files,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("List media error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/v1/media/:id — Delete media file (admin)
router.delete("/:id", authMiddleware, async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const file = await prisma.mediaFile.findUnique({
      where: { id: parseInt(id) },
    });

    if (!file) {
      res.status(404).json({ error: "File not found" });
      return;
    }

    // Delete from database (file on disk will remain — could add fs.unlink)
    await prisma.mediaFile.delete({ where: { id: parseInt(id) } });

    res.json({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Delete media error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
