import { useState, useEffect } from "react";
import axios from "axios";
import { USE_STATIC_DATA } from "../utils/site";
import { headerNavLinks } from "../utils/routes";
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1";

export function useSiteConfig() {
  const [config, setConfig] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(!USE_STATIC_DATA);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Static mode: no API call
    if (USE_STATIC_DATA) {
      setConfig({
        header_nav_links: headerNavLinks
      });
      setLoading(false);
      return;
    }

    setLoading(true);
    axios
      .get(`${API_BASE}/config`)
      .then((res) => {
        setConfig(res.data.config);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { config, loading, error };
}

