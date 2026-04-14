import { useEffect, useState } from "react";
import { pagesApi, configApi, mediaApi } from "./hooks/useApi";
import { Link } from "react-router";

export default function DashboardPage() {
  const [stats, setStats] = useState({ totalPages: 0, publishedPages: 0, mediaCount: 0 });
  const [confName, setConfName] = useState("VCRIS 2026");
  const [recentPages, setRecentPages] = useState<any[]>([]);

  useEffect(() => {
    pagesApi.listAll().then((res) => {
      const pages = res.data.pages || [];
      const sorted = [...pages].sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      setStats((s) => ({ ...s, totalPages: pages.length, publishedPages: pages.filter((p: any) => p.isPublished).length }));
      setRecentPages(sorted.slice(0, 5));
    }).catch(console.error);

    configApi.get().then((res) => {
      setConfName(res.data.config?.conference_name || "VCRIS 2026");
    }).catch(console.error);

    mediaApi.list(1, 100).then((res) => {
      setStats((s) => ({ ...s, mediaCount: res.data.files?.length || 0 }));
    }).catch(() => {});
  }, []);

  const statCards = [
    { label: "Total Pages", value: stats.totalPages, icon: "📄", accent: "#1B4F91", light: "#E8F0FE" },
    { label: "Published", value: stats.publishedPages, icon: "✅", accent: "#065f46", light: "#d1fae5" },
    { label: "Drafts", value: stats.totalPages - stats.publishedPages, icon: "📝", accent: "#92400e", light: "#fef3c7" },
    { label: "Media Files", value: stats.mediaCount, icon: "🖼️", accent: "#6b21a8", light: "#f3e8ff" },
  ];

  const quickLinks = [
    { label: "Pages", desc: "Edit page content", href: "/admin/pages", icon: "📄", color: "#1B4F91" },
    { label: "Media", desc: "Manage images & files", href: "/admin/media", icon: "🖼️", color: "#6b21a8" },
    { label: "Site Config", desc: "Conference settings", href: "/admin/config", icon: "⚙️", color: "#065f46" },
    { label: "View Site", desc: "Open public website", href: "/", icon: "↗", color: "#C12026", external: true },
  ];

  return (
    <div style={{ padding: "32px 40px", fontFamily: "var(--font-body)", minHeight: "100vh", background: "#F8F9FA" }}>

      {/* ── Page header ── */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
          <div style={{ width: 5, height: 36, background: "#C12026", borderRadius: 3 }} />
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, fontFamily: "var(--font-display)", color: "#0b2740", textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0 }}>
              Dashboard
            </h1>
            <p style={{ fontSize: 15, color: "#4A4A4A", margin: 0, marginTop: 4 }}>
              Welcome to <strong>{confName}</strong> – Content Management System
            </p>
          </div>
        </div>
        <div style={{ height: 3, background: "linear-gradient(90deg, #1B4F91, #C12026)", borderRadius: 2 }} />
      </div>

      {/* ── Stat cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 36 }}>
        {statCards.map((card) => (
          <div
            key={card.label}
            style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 6, padding: "28px 32px", borderTop: `4px solid ${card.accent}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#4A4A4A", textTransform: "uppercase", letterSpacing: "0.07em" }}>{card.label}</span>
              <div style={{ width: 44, height: 44, borderRadius: 6, background: card.light, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{card.icon}</div>
            </div>
            <div style={{ fontSize: 46, fontWeight: 800, color: card.accent, fontFamily: "var(--font-mono)", lineHeight: 1 }}>{card.value}</div>
          </div>
        ))}
      </div>

      {/* ── Main grid: Quick access + Recent pages ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 24 }}>

        {/* Quick access */}
        <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 6, overflow: "hidden" }}>
          <div style={{ padding: "16px 24px", background: "#0b2740", borderBottom: "3px solid #C12026" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Quick Access</span>
          </div>
          <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                target={link.external ? "_blank" : undefined}
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "#F8F9FA", border: "1px solid #DEE2E6", borderRadius: 6, textDecoration: "none", transition: "all 0.15s", borderLeft: `4px solid ${link.color}` }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#E8F0FE"; e.currentTarget.style.borderColor = link.color; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#F8F9FA"; e.currentTarget.style.borderColor = `${link.color}44`; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 6, background: `${link.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#212529" }}>{link.label}</div>
                  <div style={{ fontSize: 13, color: "#4A4A4A", marginTop: 2 }}>{link.desc}</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: 20, color: "#4A4A4A" }}>→</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent pages */}
        <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 6, overflow: "hidden" }}>
          <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0b2740", borderBottom: "3px solid #C12026" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Recently Updated Pages</span>
            <Link to="/admin/pages" style={{ fontSize: 13, color: "#90b8f8", textDecoration: "none", fontWeight: 700 }}>View All →</Link>
          </div>
          <div>
            {recentPages.length === 0 ? (
              <div style={{ padding: 40, textAlign: "center", color: "#4A4A4A", fontSize: 15 }}>No pages yet</div>
            ) : (
              recentPages.map((page, i) => (
                <div
                  key={page.id}
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 24px", borderBottom: i < recentPages.length - 1 ? "1px solid #F0F0F0" : "none" }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#212529", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{page.title}</div>
                    <code style={{ fontSize: 12, color: "#1B4F91", fontFamily: "var(--font-mono)", marginTop: 4, display: "block" }}>/{page.slug}</code>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, background: page.isPublished ? "#d1fae5" : "#fef3c7", color: page.isPublished ? "#065f46" : "#92400e", flexShrink: 0 }}>
                    {page.isPublished ? "Live" : "Draft"}
                  </span>
                  <span style={{ fontSize: 12, color: "#4A4A4A", flexShrink: 0 }}>
                    {new Date(page.updatedAt).toLocaleDateString("vi-VN")}
                  </span>
                  <Link
                    to={`/admin/editor/${page.slug}`}
                    style={{ padding: "8px 16px", background: "#1B4F91", color: "#fff", borderRadius: 4, fontSize: 12, fontWeight: 700, textDecoration: "none", textTransform: "uppercase", flexShrink: 0 }}
                  >
                    Edit
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
