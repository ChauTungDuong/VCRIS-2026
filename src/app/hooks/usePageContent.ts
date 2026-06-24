import { useState, useEffect } from "react";
import axios from "axios";
import { siteTheme, USE_STATIC_DATA } from "../utils/site";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1";

export function usePageContent(slug: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(!USE_STATIC_DATA);
  const [error, setError] = useState<Error | null>(USE_STATIC_DATA ? new Error("Static mode") : null);

  // Get locale from localStorage, fallback to site default locale
  const locale = localStorage.getItem("vcris_locale") || siteTheme.defaultLocale;

  useEffect(() => {
    // Static mode: no API call
    if (USE_STATIC_DATA) {
      setLoading(false);
      setError(new Error("Static mode"));
      return;
    }

    setLoading(true);
    axios
      .get(`${API_BASE}/pages/${slug}?locale=${locale}`)
      .then((res) => {
        setData(res.data.page);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug, locale]);

  return { data, loading, error };
}


