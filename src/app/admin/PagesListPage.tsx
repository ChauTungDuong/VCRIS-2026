import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { pagesApi } from "./hooks/useApi";

interface PageItem {
  id: number;
  slug: string;
  title: string;
  isSystem: boolean;
  isPublished: boolean;
  updatedAt: string;
}

// Icon components (inline SVG, no external deps)
const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconEye = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconTrash = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6"/><path d="M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
);

export default function PagesListPage() {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [newSlug, setNewSlug] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [locale, setLocale] = useState("en");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchPages = () => {
    setLoading(true);
    pagesApi.listAll(locale)
      .then((res) => setPages(res.data.pages))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchPages(); }, [locale]);

  const handleCreate = async () => {
    if (!newSlug || !newTitle) return;
    try {
      await pagesApi.create({ slug: newSlug, title: newTitle, locale });
      setShowCreate(false);
      setNewSlug("");
      setNewTitle("");
      fetchPages();
    } catch (err: any) {
      alert(err.response?.data?.error || "Failed to create page");
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm(`Delete page "/${slug}"? This cannot be undone.`)) return;
    try {
      await pagesApi.delete(slug);
      fetchPages();
    } catch (err: any) {
      alert(err.response?.data?.error || "Failed to delete page");
    }
  };

  const filtered = pages.filter(
    (p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.slug.toLowerCase().includes(search.toLowerCase())
  );

  const inputStyle: React.CSSProperties = {
    padding: "10px 16px", border: "1px solid #DEE2E6", borderRadius: 6,
    fontSize: 15, outline: "none", fontFamily: "var(--font-body)",
    boxSizing: "border-box", width: "100%",
  };

  return (
    <div style={{ padding: "32px 40px", fontFamily: "var(--font-body)", minHeight: "100vh", background: "#F8F9FA" }}>

      {/* ── Page header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, fontFamily: "var(--font-display)", color: "#0b2740", textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0 }}>
            Pages
          </h1>
          <p style={{ fontSize: 15, color: "#4A4A4A", marginTop: 6, margin: 0 }}>
            Manage and edit your conference website pages
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {/* Locale toggle */}
          <div style={{ display: "flex", border: "1px solid #DEE2E6", borderRadius: 6, overflow: "hidden" }}>
            {[{ val: "en", flag: "🇬🇧", label: "EN" }, { val: "vi", flag: "🇻🇳", label: "VI" }].map(({ val, flag, label }) => (
              <button key={val} onClick={() => setLocale(val)} style={{ padding: "10px 16px", border: "none", background: locale === val ? "#1B4F91" : "#fff", color: locale === val ? "#fff" : "#4A4A4A", cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-body)" }}>
                {flag} {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowCreate(!showCreate)}
            style={{ padding: "10px 20px", background: "#1B4F91", color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 800, cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.06em" }}
          >
            + New Page
          </button>
        </div>
      </div>

      {/* Accent rule */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #1B4F91, #C12026)", borderRadius: 2, marginBottom: 24 }} />

      {/* ── Create panel ── */}
      {showCreate && (
        <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderLeft: "3px solid #1B4F91", borderRadius: "0 4px 4px 0", padding: "20px 24px", marginBottom: 20 }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: "#0b2740", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-display)" }}>
            Create New Page
          </h3>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "#4A4A4A", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.07em" }}>Slug (URL path)</label>
              <input
                value={newSlug}
                onChange={(e) => setNewSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
                placeholder="my-new-page"
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "#1B4F91"; }}
                onBlur={(e) => { e.target.style.borderColor = "#DEE2E6"; }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "#4A4A4A", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.07em" }}>Page Title</label>
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="My New Page"
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "#1B4F91"; }}
                onBlur={(e) => { e.target.style.borderColor = "#DEE2E6"; }}
              />
            </div>
            <button onClick={handleCreate} style={{ padding: "9px 18px", background: "#1B4F91", color: "#fff", border: "none", borderRadius: 4, fontSize: 12, fontWeight: 800, cursor: "pointer", textTransform: "uppercase", whiteSpace: "nowrap" }}>Create</button>
            <button onClick={() => setShowCreate(false)} style={{ padding: "9px 14px", background: "#F8F9FA", color: "#4A4A4A", border: "1px solid #DEE2E6", borderRadius: 4, fontSize: 12, cursor: "pointer" }}>Cancel</button>
          </div>
        </div>
      )}

      {/* ── Search bar ── */}
      <div style={{ marginBottom: 16 }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pages by title or slug…"
          style={{ ...inputStyle, width: 320, background: "#fff" }}
          onFocus={(e) => { e.target.style.borderColor = "#1B4F91"; }}
          onBlur={(e) => { e.target.style.borderColor = "#DEE2E6"; }}
        />
      </div>

      {/* ── Pages table ── */}
      <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 6, overflow: "hidden" }}>
        {/* Table header */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(200px, 2fr) 1.5fr 110px 100px 130px 200px", padding: "14px 20px", background: "#0b2740", borderBottom: "3px solid #C12026" }}>
          {["Page Title", "Slug", "Status", "Type", "Updated", "Actions"].map((h) => (
            <span key={h} style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</span>
          ))}
        </div>

        {loading ? (
          <div style={{ padding: 48, textAlign: "center", color: "#4A4A4A" }}>
            <div style={{ width: 30, height: 30, border: "2px solid #1B4F91", borderTopColor: "transparent", borderRadius: "50%", margin: "0 auto 12px", animation: "spin 0.7s linear infinite" }} />
            Loading pages…
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: 48, textAlign: "center", color: "#4A4A4A", fontSize: 14 }}>
            {search ? `No pages matching "${search}"` : "No pages found."}
          </div>
        ) : (
          filtered.map((page, i) => (
            <div
              key={page.id}
              style={{ display: "grid", gridTemplateColumns: "minmax(200px, 2fr) 1.5fr 110px 100px 130px 200px", padding: "16px 20px", borderBottom: i < filtered.length - 1 ? "1px solid #F0F0F0" : "none", alignItems: "center", background: i % 2 === 0 ? "#fff" : "#FAFAFA", transition: "background 0.12s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#E8F0FE"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = i % 2 === 0 ? "#fff" : "#FAFAFA"; }}
            >
              {/* Title */}
              <span style={{ fontSize: 15, fontWeight: 700, color: "#212529" }}>{page.title}</span>

              {/* Slug */}
              <code style={{ fontSize: 13, background: "#F8F9FA", color: "#1B4F91", padding: "4px 10px", borderRadius: 4, fontFamily: "var(--font-mono)", border: "1px solid #DEE2E6", width: "max-content" }}>
                /{page.slug}
              </code>

              {/* Status badge */}
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 4, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", background: page.isPublished ? "#d1fae5" : "#fef3c7", color: page.isPublished ? "#065f46" : "#92400e", border: `1px solid ${page.isPublished ? "#6ee7b7" : "#fcd34d"}` }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: page.isPublished ? "#10b981" : "#f59e0b", flexShrink: 0 }} />
                {page.isPublished ? "Live" : "Draft"}
              </span>

              {/* Type */}
              <span style={{ fontSize: 13, color: page.isSystem ? "#1B4F91" : "#4A4A4A", fontWeight: page.isSystem ? 700 : 500 }}>
                {page.isSystem ? "System" : "Custom"}
              </span>

              {/* Updated */}
              <span style={{ fontSize: 13, color: "#4A4A4A" }}>
                {new Date(page.updatedAt).toLocaleDateString("vi-VN")}
              </span>

              {/* Actions */}
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => navigate(`/admin/editor/${page.slug}?locale=${locale}`)}
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#1B4F91", color: "#fff", border: "none", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", textTransform: "uppercase" }}
                >
                  <IconEdit /> Edit
                </button>
                <Link
                  to={page.slug === "home" ? "/" : `/${page.slug}`}
                  target="_blank"
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#F8F9FA", color: "#212529", border: "1px solid #DEE2E6", borderRadius: 4, fontSize: 13, textDecoration: "none", textTransform: "uppercase", fontWeight: 700 }}
                >
                  <IconEye /> View
                </Link>
                {!page.isSystem && (
                  <button
                    onClick={() => handleDelete(page.slug)}
                    style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", background: "#fff0f0", color: "#C12026", border: "1px solid #fecaca", borderRadius: 4, fontSize: 13, cursor: "pointer" }}
                    title="Delete page"
                  >
                    <IconTrash />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stat footer */}
      <div style={{ marginTop: 12, fontSize: 11, color: "#4A4A4A" }}>
        Showing {filtered.length} of {pages.length} pages · Locale: {locale === "en" ? "English" : "Tiếng Việt"}
      </div>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
