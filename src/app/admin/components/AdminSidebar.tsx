import { Link, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

const navItems = [
  {
    path: "/admin",
    label: "Dashboard",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    path: "/admin/pages",
    label: "Pages",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    path: "/admin/media",
    label: "Media Library",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
  },
  {
    path: "/admin/config",
    label: "Site Config",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 2.42 10.02 10 10 0 0 1-7.59 6.88 10 10 0 0 1-10.77-3.96A10 10 0 0 1 4.93 4.93"/>
      </svg>
    ),
  },
];

export default function AdminSidebar() {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <aside style={{
      width: 240,
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0b2740 0%, #112d47 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-body)",
      position: "fixed",
      left: 0, top: 0, bottom: 0,
      zIndex: 100,
      borderRight: "1px solid rgba(255,255,255,0.06)",
    }}>
      {/* Logo bar */}
      <div style={{ padding: "22px 20px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <Link to="/admin" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Accent mark */}
            <div style={{ width: 4, height: 28, background: "#C12026", borderRadius: 2, flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: 18, fontWeight: 800, fontFamily: "var(--font-display)", letterSpacing: "-0.01em", color: "#fff", textTransform: "uppercase" }}>
                VCRIS
              </span>
              <span style={{ marginLeft: 6, fontSize: 10, fontWeight: 700, color: "#1B4F91", background: "#E8F0FE", padding: "2px 6px", borderRadius: 3, letterSpacing: "0.05em" }}>
                ADMIN
              </span>
            </div>
          </div>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 6, marginLeft: 14, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Content Management
          </p>
        </Link>
      </div>

      {/* Nav section label */}
      <div style={{ padding: "16px 20px 8px" }}>
        <p style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Navigation
        </p>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: "0 10px" }}>
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/admin" && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 4,
                fontSize: 13,
                fontWeight: isActive ? 700 : 400,
                color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                background: isActive
                  ? "linear-gradient(90deg, #1B4F91 0%, rgba(27,79,145,0.6) 100%)"
                  : "transparent",
                textDecoration: "none",
                marginBottom: 2,
                transition: "all 0.15s",
                borderLeft: isActive ? "3px solid #C12026" : "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }
              }}
            >
              <span style={{ opacity: isActive ? 1 : 0.6, flexShrink: 0 }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* View public site */}
      <div style={{ padding: "12px 10px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <Link
          to="/"
          target="_blank"
          style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "9px 12px",
            fontSize: 12, color: "rgba(255,255,255,0.45)",
            textDecoration: "none", borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          View Public Site
        </Link>
      </div>

      {/* User info */}
      <div style={{ padding: "14px 20px", borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.15)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#1B4F91", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
            {(user?.name || "A").charAt(0).toUpperCase()}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#fff", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user?.name || "Admin"}</p>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user?.email}</p>
          </div>
          <button
            onClick={logout}
            title="Logout"
            style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: 4, borderRadius: 4, transition: "color 0.15s", flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C12026"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
