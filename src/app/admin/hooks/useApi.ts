import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("vcris_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("vcris_token");
      localStorage.removeItem("vcris_user");
      // Only redirect if on admin page
      if (window.location.pathname.startsWith("/admin")) {
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(error);
  }
);

// =====================
// Auth API
// =====================
export const authApi = {
  login: (email: string, password: string) =>
    api.post("/auth/login", { email, password }),

  me: () => api.get("/auth/me"),
};

// =====================
// Pages API
// =====================
export const pagesApi = {
  list: (locale?: string) =>
    api.get("/pages", { params: { locale } }),

  listAll: (locale?: string) =>
    api.get("/pages/all", { params: { locale } }),

  get: (slug: string, locale?: string) =>
    api.get(`/pages/${slug}`, { params: { locale } }),

  create: (data: { slug: string; title: string; content?: unknown; locale?: string }) =>
    api.post("/pages", data),

  update: (slug: string, data: { title?: string; content?: unknown; locale?: string; isPublished?: boolean }) =>
    api.put(`/pages/${slug}`, data),

  delete: (slug: string) =>
    api.delete(`/pages/${slug}`),

  getVersions: (slug: string, locale?: string) =>
    api.get(`/pages/${slug}/versions`, { params: { locale } }),

  restoreVersion: (slug: string, versionId: number, locale?: string) =>
    api.post(`/pages/${slug}/restore/${versionId}`, {}, { params: { locale } }),
};

// =====================
// Config API
// =====================
export const configApi = {
  get: () => api.get("/config"),

  update: (data: Record<string, unknown>) =>
    api.put("/config", data),
};

// =====================
// Media API
// =====================
export const mediaApi = {
  upload: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return api.post("/media/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  list: (page?: number, limit?: number) =>
    api.get("/media", { params: { page, limit } }),

  delete: (id: number) =>
    api.delete(`/media/${id}`),
};

export default api;
