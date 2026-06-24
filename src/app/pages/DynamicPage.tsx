import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Render } from "@measured/puck";
import { puckConfig } from "../admin/components/PuckComponents";
import PageTitle from "../components/PageTitle";
import { siteTheme, USE_STATIC_DATA } from "../utils/site";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1";

export default function DynamicPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "home";
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(!USE_STATIC_DATA);
  const [error, setError] = useState(USE_STATIC_DATA ? "Static mode" : "");

  // Get locale from localStorage or default to siteTheme
  const locale = localStorage.getItem("vcris_locale") || siteTheme.defaultLocale;

  useEffect(() => {
    // Static mode: no API call, immediately fail for dynamic pages since content isn't fetched
    if (USE_STATIC_DATA) {
      setLoading(false);
      setError("Static mode");
      return;
    }

    setLoading(true);
    fetch(`${API_BASE}/pages/${slug}?locale=${locale}`)
      .then((res) => {
        if (!res.ok) throw new Error("Page not found");
        return res.json();
      })
      .then((data) => {
        setPageData(data.page);
      })
      .catch(() => {
        setError("Page not found");
      })
      .finally(() => setLoading(false));
  }, [slug, locale]);

  if (loading) {
    return (
      <div className="pt-16">
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: 400, fontFamily: "var(--font-body)", color: "#64748B",
        }}>
          Loading...
        </div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div>
        <PageTitle title="Page Not Found" />
        <div style={{
          maxWidth: 600, margin: "60px auto", textAlign: "center",
          fontFamily: "var(--font-body)", padding: "0 24px",
        }}>
          <p style={{ fontSize: 16, color: "#64748B", marginBottom: 24 }}>
            The page you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              backgroundColor: "#0EA5A0",
              color: "#FFFFFF",
              borderRadius: 20,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }

  const content = pageData.content;
  if (!content || !content.content || !content.root) {
    return (
      <div className="pt-16">
        <div style={{
          maxWidth: 1200, margin: "60px auto", padding: "0 24px",
          fontFamily: "var(--font-body)",
        }}>
          <h1 style={{
            fontSize: 36, fontFamily: "var(--font-display)",
            fontWeight: 700, fontStyle: "italic", marginBottom: 16,
          }}>
            {pageData.title}
          </h1>
          <p style={{ color: "#64748B" }}>This page has no content yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <Render config={puckConfig} data={content} />
    </div>
  );
}
