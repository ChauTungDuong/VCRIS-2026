import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1";

export function usePageContent(slug: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Get locale from localStorage
  const locale = localStorage.getItem("vcris_locale") || "en";

  useEffect(() => {
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
