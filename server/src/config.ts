import dotenv from "dotenv";
dotenv.config();

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

export const config = {
  port: parseInt(process.env.PORT || "4000"),
  databaseUrl: requireEnv("DATABASE_URL"),
  jwtSecret: requireEnv("JWT_SECRET"),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  adminEmail: requireEnv("ADMIN_EMAIL"),
  adminPassword: requireEnv("ADMIN_PASSWORD"),
  uploadDir: process.env.UPLOAD_DIR || "uploads",
  corsOrigin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : ["http://localhost:5173", "http://localhost:3000"],
  defaultLocale: "en",
  supportedLocales: ["en", "vi"],
};
