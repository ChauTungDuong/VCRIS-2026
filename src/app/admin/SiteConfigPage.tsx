import { useEffect, useState } from "react";
import { configApi } from "./hooks/useApi";

// Config field definitions with section grouping
const configSections = [
  {
    title: "Conference Identity",
    icon: "🎓",
    fields: [
      { key: "conference_name", label: "Short Name", placeholder: "VCRIS 2026", hint: "Used in headers and titles" },
      { key: "conference_full_name", label: "Full Name", placeholder: "International Conference on...", hint: "Full official name" },
      { key: "conference_edition", label: "Edition", placeholder: "2026", hint: "Year or edition number" },
    ],
  },
  {
    title: "Schedule & Venue",
    icon: "📅",
    fields: [
      { key: "conference_dates", label: "Conference Dates (display)", placeholder: "October 29-30, 2026", hint: "Shown on website" },
      { key: "conference_date_start", label: "Start Date (ISO)", placeholder: "2026-10-29", hint: "Used for countdown" },
      { key: "conference_location", label: "Location (short)", placeholder: "Hanoi, Vietnam", hint: "City, Country" },
      { key: "conference_address", label: "Full Address", placeholder: "123 Street, Hanoi, Vietnam", hint: "For map/contact" },
    ],
  },
  {
    title: "Links & Contact",
    icon: "🔗",
    fields: [
      { key: "easychair_url", label: "EasyChair URL", placeholder: "https://easychair.org/...", hint: "Paper submission link" },
      { key: "contact_email", label: "Contact Email", placeholder: "contact@vcris.org", hint: "Main contact address" },
      { key: "website_url", label: "Website URL", placeholder: "https://vcris.org", hint: "Public site URL" },
    ],
  },
  {
    title: "Global Hero Banner",
    icon: "🚩",
    fields: [
      { key: "hero_title", label: "Hero Title", placeholder: "VCRIS 2026", hint: "Main title on banner" },
      { key: "hero_subtitle", label: "Hero Subtitle", placeholder: "International Conference...", hint: "Subtitle" },
      { key: "hero_btn_text", label: "Button Text", placeholder: "Submit Paper", hint: "e.g., Submit Paper" },
      { key: "hero_btn_url", label: "Button URL", placeholder: "/submission", hint: "e.g., /submission" },
      { key: "hero_bg_color", label: "Background Color", placeholder: "#1B4F91", hint: "Hex code" },
      { key: "hero_bg_image", label: "Background Image URL", placeholder: "/images/bg.jpg", hint: "From Media Library" },
    ],
  },
];

export default function SiteConfigPage() {
  const [config, setConfig] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const [datesJson, setDatesJson] = useState("");
  const [datesJsonError, setDatesJsonError] = useState(false);
  
  const [navJson, setNavJson] = useState("");
  const [navJsonError, setNavJsonError] = useState(false);
  
  const [sidebarCatsJson, setSidebarCatsJson] = useState("");
  const [sidebarCatsError, setSidebarCatsError] = useState(false);
  
  const [sidebarSponsorsJson, setSidebarSponsorsJson] = useState("");
  const [sidebarSponsorsError, setSidebarSponsorsError] = useState(false);

  useEffect(() => {
    configApi.get().then((res) => {
      const c = res.data.config || {};
      setConfig(c);
      setDatesJson(JSON.stringify(c.important_dates || [], null, 2));
      setNavJson(JSON.stringify(c.header_nav_links || [], null, 2));
      setSidebarCatsJson(JSON.stringify(c.sidebar_categories || [], null, 2));
      setSidebarSponsorsJson(JSON.stringify(c.sidebar_sponsors || [], null, 2));
    }).catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      try { config.important_dates = JSON.parse(datesJson); } catch {}
      try { config.header_nav_links = JSON.parse(navJson); } catch {}
      try { config.sidebar_categories = JSON.parse(sidebarCatsJson); } catch {}
      try { config.sidebar_sponsors = JSON.parse(sidebarSponsorsJson); } catch {}
      
      await configApi.update(config);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err: any) {
      alert(err.response?.data?.error || "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const updateConfig = (key: string, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px",
    border: "1px solid #DEE2E6", borderRadius: 4,
    fontSize: 13, outline: "none",
    fontFamily: "var(--font-body)", boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 300, fontFamily: "var(--font-body)", color: "#4A4A4A" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 32, height: 32, border: "2px solid #1B4F91", borderTopColor: "transparent", borderRadius: "50%", margin: "0 auto 12px", animation: "spin 0.7s linear infinite" }} />
          Loading configuration…
        </div>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    );
  }

  return (
    <div style={{ padding: "32px 40px", fontFamily: "var(--font-body)", minHeight: "100vh", background: "#F8F9FA" }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: "var(--font-display)", color: "#0b2740", textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0 }}>
            Site Configuration
          </h1>
          <p style={{ fontSize: 13, color: "#4A4A4A", margin: "4px 0 0" }}>
            Global conference settings used across all pages
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "10px 22px",
            background: saved ? "#065f46" : saving ? "rgba(27,79,145,0.5)" : "#1B4F91",
            color: "#fff", border: "none", borderRadius: 4,
            fontSize: 12, fontWeight: 800, cursor: saving ? "wait" : "pointer",
            textTransform: "uppercase", letterSpacing: "0.06em",
            transition: "background 0.2s",
          }}
        >
          {saved ? "✓ Saved!" : saving ? "Saving…" : "💾 Save Changes"}
        </button>
      </div>

      {/* Gradient rule */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #1B4F91, #C12026)", borderRadius: 2, marginBottom: 28 }} />

      {/* ── Config sections ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 860 }}>
        {configSections.map((section) => (
          <div key={section.title} style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 4, overflow: "hidden" }}>
            {/* Section header */}
            <div style={{ padding: "12px 20px", background: "#0b2740", borderBottom: "2px solid #C12026", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 16 }}>{section.icon}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {section.title}
              </span>
            </div>
            {/* Fields */}
            <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
              {section.fields.map((field) => (
                <div key={field.key} style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "#0b2740", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    {field.label}
                    <code style={{ marginLeft: 8, fontSize: 9, color: "#4A4A4A", background: "#F8F9FA", padding: "1px 5px", borderRadius: 2, fontFamily: "var(--font-mono)", border: "1px solid #DEE2E6" }}>
                      {field.key}
                    </code>
                  </label>
                  <input
                    type="text"
                    value={typeof config[field.key] === "string" ? config[field.key] : (config[field.key] != null ? JSON.stringify(config[field.key]) : "")}
                    onChange={(e) => updateConfig(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#1B4F91"; e.target.style.boxShadow = "0 0 0 3px rgba(27,79,145,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#DEE2E6"; e.target.style.boxShadow = "none"; }}
                  />
                  {field.hint && <p style={{ fontSize: 10, color: "#4A4A4A", margin: "4px 0 0" }}>{field.hint}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ── JSON Editors Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Important Dates */}
          <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ padding: "12px 20px", background: "#0b2740", borderBottom: "2px solid #C12026", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>📅</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Important Dates
                </span>
              </div>
              {datesJsonError && (
                <span style={{ fontSize: 10, color: "#C12026", background: "rgba(193,32,38,0.15)", padding: "3px 8px", borderRadius: 3, fontWeight: 700 }}>
                  ⚠ Invalid JSON
                </span>
              )}
            </div>
            <div style={{ padding: "16px 24px" }}>
              <textarea
                value={datesJson}
                onChange={(e) => {
                  setDatesJson(e.target.value);
                  try { JSON.parse(e.target.value); setDatesJsonError(false); } catch { setDatesJsonError(true); }
                }}
                rows={8} spellCheck={false}
                style={{
                  width: "100%", padding: "12px 14px",
                  border: `1px solid ${datesJsonError ? "#C12026" : "#DEE2E6"}`,
                  borderRadius: 4, fontSize: 12, fontFamily: "var(--font-mono)",
                  resize: "vertical", outline: "none", background: "#FAFAFA",
                }}
              />
            </div>
          </div>

          {/* Header Nav Links */}
          <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ padding: "12px 20px", background: "#0b2740", borderBottom: "2px solid #C12026", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>🧭</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Header Navigation
                </span>
              </div>
              {navJsonError && (
                <span style={{ fontSize: 10, color: "#C12026", background: "rgba(193,32,38,0.15)", padding: "3px 8px", borderRadius: 3, fontWeight: 700 }}>
                  ⚠ Invalid JSON
                </span>
              )}
            </div>
            <div style={{ padding: "16px 24px" }}>
              <textarea
                value={navJson}
                onChange={(e) => {
                  setNavJson(e.target.value);
                  try { JSON.parse(e.target.value); setNavJsonError(false); } catch { setNavJsonError(true); }
                }}
                rows={8} spellCheck={false}
                style={{
                  width: "100%", padding: "12px 14px",
                  border: `1px solid ${navJsonError ? "#C12026" : "#DEE2E6"}`,
                  borderRadius: 4, fontSize: 12, fontFamily: "var(--font-mono)",
                  resize: "vertical", outline: "none", background: "#FAFAFA",
                }}
              />
            </div>
          </div>

          {/* Sidebar Categories */}
          <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ padding: "12px 20px", background: "#0b2740", borderBottom: "2px solid #C12026", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>📂</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Sidebar Categories
                </span>
              </div>
              {sidebarCatsError && (
                <span style={{ fontSize: 10, color: "#C12026", background: "rgba(193,32,38,0.15)", padding: "3px 8px", borderRadius: 3, fontWeight: 700 }}>
                  ⚠ Invalid JSON
                </span>
              )}
            </div>
            <div style={{ padding: "16px 24px" }}>
              <textarea
                value={sidebarCatsJson}
                onChange={(e) => {
                  setSidebarCatsJson(e.target.value);
                  try { JSON.parse(e.target.value); setSidebarCatsError(false); } catch { setSidebarCatsError(true); }
                }}
                rows={8} spellCheck={false}
                style={{
                  width: "100%", padding: "12px 14px",
                  border: `1px solid ${sidebarCatsError ? "#C12026" : "#DEE2E6"}`,
                  borderRadius: 4, fontSize: 12, fontFamily: "var(--font-mono)",
                  resize: "vertical", outline: "none", background: "#FAFAFA",
                }}
              />
            </div>
          </div>

          {/* Sidebar Sponsors */}
          <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ padding: "12px 20px", background: "#0b2740", borderBottom: "2px solid #C12026", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>🏢</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Sidebar Sponsors
                </span>
              </div>
              {sidebarSponsorsError && (
                <span style={{ fontSize: 10, color: "#C12026", background: "rgba(193,32,38,0.15)", padding: "3px 8px", borderRadius: 3, fontWeight: 700 }}>
                  ⚠ Invalid JSON
                </span>
              )}
            </div>
            <div style={{ padding: "16px 24px" }}>
              <textarea
                value={sidebarSponsorsJson}
                onChange={(e) => {
                  setSidebarSponsorsJson(e.target.value);
                  try { JSON.parse(e.target.value); setSidebarSponsorsError(false); } catch { setSidebarSponsorsError(true); }
                }}
                rows={8} spellCheck={false}
                style={{
                  width: "100%", padding: "12px 14px",
                  border: `1px solid ${sidebarSponsorsError ? "#C12026" : "#DEE2E6"}`,
                  borderRadius: 4, fontSize: 12, fontFamily: "var(--font-mono)",
                  resize: "vertical", outline: "none", background: "#FAFAFA",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Footer Editor Link ── */}
        <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 4, overflow: "hidden", marginTop: 20 }}>
          <div style={{ padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#0b2740", fontFamily: "var(--font-display)" }}>
                Footer Editor (Puck Blocks)
              </h3>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#4A4A4A" }}>
                Footer is a full block container. Edit text, maps, and links via the visual editor.
              </p>
            </div>
            <a
              href="/admin/editor/_footer"
              style={{
                background: "#1B4F91", color: "#fff", padding: "10px 20px", borderRadius: 4,
                textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase"
              }}
            >
              Open Footer Editor ➔
            </a>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
