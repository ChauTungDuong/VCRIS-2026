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
];

export default function SiteConfigPage() {
  const [config, setConfig] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [datesJson, setDatesJson] = useState("");
  const [jsonError, setJsonError] = useState(false);

  useEffect(() => {
    configApi.get().then((res) => {
      const c = res.data.config || {};
      setConfig(c);
      setDatesJson(JSON.stringify(c.important_dates || [], null, 2));
    }).catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      // Attempt to parse the dates JSON before saving
      try {
        const parsed = JSON.parse(datesJson);
        config.important_dates = parsed;
      } catch {
        // keep existing if JSON is invalid
      }
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

        {/* ── Important Dates JSON editor ── */}
        <div style={{ background: "#fff", border: "1px solid #DEE2E6", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ padding: "12px 20px", background: "#0b2740", borderBottom: "2px solid #C12026", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 16 }}>📋</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Important Dates (JSON)
              </span>
            </div>
            {jsonError && (
              <span style={{ fontSize: 10, color: "#C12026", background: "rgba(193,32,38,0.15)", padding: "3px 8px", borderRadius: 3, fontWeight: 700 }}>
                ⚠ Invalid JSON
              </span>
            )}
          </div>
          <div style={{ padding: "16px 24px" }}>
            <p style={{ fontSize: 12, color: "#4A4A4A", marginBottom: 12, fontFamily: "var(--font-body)" }}>
              Each item: <code style={{ background: "#F8F9FA", padding: "2px 6px", borderRadius: 3, fontSize: 11, fontFamily: "var(--font-mono)" }}>{"{ \"label\": \"...\", \"date\": \"...\", \"passed\": false }"}</code>
            </p>
            <textarea
              value={datesJson}
              onChange={(e) => {
                setDatesJson(e.target.value);
                try { JSON.parse(e.target.value); setJsonError(false); } catch { setJsonError(true); }
              }}
              rows={14}
              spellCheck={false}
              style={{
                width: "100%", padding: "12px 14px",
                border: `1px solid ${jsonError ? "#C12026" : "#DEE2E6"}`,
                borderRadius: 4, fontSize: 12,
                fontFamily: "var(--font-mono)", boxSizing: "border-box",
                resize: "vertical", outline: "none",
                background: "#FAFAFA", lineHeight: 1.7,
              }}
              onFocus={(e) => { if (!jsonError) e.target.style.borderColor = "#1B4F91"; }}
              onBlur={(e) => { if (!jsonError) e.target.style.borderColor = "#DEE2E6"; }}
            />
            <p style={{ fontSize: 10, color: "#4A4A4A", marginTop: 8 }}>
              Changes are applied when you click <strong>Save Changes</strong> above.
            </p>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
