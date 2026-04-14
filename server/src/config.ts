import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || "4000"),
  databaseUrl: process.env.DATABASE_URL || "",
  jwtSecret: process.env.JWT_SECRET || "vcris-2026-secret-key",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  adminEmail: process.env.ADMIN_EMAIL || "admin@vcris.org",
  adminPassword: process.env.ADMIN_PASSWORD || "vcris2026admin",
  uploadDir: process.env.UPLOAD_DIR || "uploads",
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173",
  defaultLocale: "en",
  supportedLocales: ["en", "vi"],
};
