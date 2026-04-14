import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "./config.js";
import authRoutes from "./routes/auth.routes.js";
import pagesRoutes from "./routes/pages.routes.js";
import configRoutes from "./routes/config.routes.js";
import mediaRoutes from "./routes/media.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Middleware
app.use(cors({ origin: config.corsOrigin, credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Static uploads
app.use("/uploads", express.static(path.join(__dirname, "..", config.uploadDir)));

// API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/pages", pagesRoutes);
app.use("/api/v1/config", configRoutes);
app.use("/api/v1/media", mediaRoutes);

// Health check
app.get("/api/v1/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start
app.listen(config.port, () => {
  console.log(`🚀 VCRIS Backend running on http://localhost:${config.port}`);
  console.log(`📁 Uploads dir: ${config.uploadDir}`);
});

export default app;
