import { useEffect, useState, useRef } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router";
import { Puck, usePuck } from "@measured/puck";
import "@measured/puck/puck.css";
import { puckConfig } from "./components/PuckComponents";
import { pagesApi } from "./hooks/useApi";
import { siteTheme } from "../utils/site";
import Header from "../components/Header";
import GlobalHero from "../components/GlobalHero";
import SidebarLogos from "../components/SidebarLogos";
import Footer from "../components/Footer";
/* ─────────────────────────────────────────────────────────────
   LEFT PANEL — inner component, must be inside <Puck> context
   Shows: component list (default) | field editor (on selection)
───────────────────────────────────────────────────────────── */
function LeftPanelContent() {
  const { appState, dispatch } = usePuck();
  const isItemSelected = appState.ui.itemSelector !== null;
  const [tab, setTab] = useState<"add" | "layers">("add");

  const tabStyle = (t: "add" | "layers"): React.CSSProperties => ({
    flex: 1, padding: "9px 0", fontSize: 10, fontWeight: 700,
    background: "transparent",
    color: tab === t && !isItemSelected ? "#fff" : "rgba(255,255,255,0.4)",
    border: "none", cursor: "pointer",
    textTransform: "uppercase", letterSpacing: "0.08em",
    borderBottom: tab === t && !isItemSelected ? "2px solid #C12026" : "2px solid transparent",
    transition: "all 0.15s",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>

      {/* Panel header */}
      <div style={{
        background: "#071d30", borderBottom: "1px solid rgba(255,255,255,0.08)",
        flexShrink: 0,
      }}>
        {isItemSelected ? (
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 14px" }}>
            <button
              onClick={() => dispatch({ type: "setUi", ui: { itemSelector: null } })}
              style={{
                background: "rgba(255,255,255,0.08)", border: "none", color: "#fff",
                padding: "4px 10px", borderRadius: 3, cursor: "pointer", fontSize: 16, lineHeight: 1,
              }}
              title="Back"
            >
              ←
            </button>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.07em" }}>
              Properties
            </span>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <button style={tabStyle("add")} onClick={() => setTab("add")}>＋ Add</button>
            <button style={tabStyle("layers")} onClick={() => setTab("layers")}>Layers</button>
          </div>
        )}
      </div>

      {/* Panel body */}
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
        {isItemSelected ? (
          /* Puck.Fields renders the property editor for the selected block */
          <div className="elementor-fields-panel">
            <Puck.Fields />
          </div>
        ) : tab === "add" ? (
          /* Puck.Components renders the draggable component palette */
          <div className="elementor-components-panel">
            <Puck.Components />
          </div>
        ) : (
          /* Puck.Outline renders the page layer tree */
          <div className="elementor-outline-panel">
            <Puck.Outline />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   TOP BAR — inside Puck context so we can use usePuck
───────────────────────────────────────────────────────────── */
function EditorTopBar({
  slug,
  locale,
  pageTitle,
  onPageTitleChange,
  saving,
  lastSaved,
  onSave,
  onBack,
}: {
  slug: string;
  locale: string;
  pageTitle: string;
  onPageTitleChange: (v: string) => void;
  saving: boolean;
  lastSaved: string | null;
  onSave: () => void;
  onBack: () => void;
}) {
  const { history } = usePuck();

  return (
    <div style={{
      height: 46, minHeight: 46, display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 14px",
      background: "#0b2740", borderBottom: "2px solid #C12026",
      fontFamily: "var(--font-body)", zIndex: 200, flexShrink: 0,
    }}>
      {/* Left */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button onClick={onBack} style={{ background: "none", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", padding: "4px 10px", borderRadius: 3, cursor: "pointer", fontSize: 11, fontWeight: 700 }}>
          ← Back
        </button>
        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />
        <input
          value={pageTitle}
          onChange={(e) => onPageTitleChange(e.target.value)}
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", padding: "5px 10px", borderRadius: 3, fontSize: 12, fontWeight: 600, width: 180 }}
        />
        <code style={{ fontSize: 10, color: "#90b8f8", background: "rgba(27,79,145,0.25)", padding: "3px 7px", borderRadius: 3 }}>/{slug}</code>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.06)", padding: "3px 7px", borderRadius: 3 }}>
          {locale === "en" ? "🇬🇧 EN" : "🇻🇳 VI"}
        </span>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {[
            { action: () => history.back(), label: "↩", enabled: history.hasPast, title: "Undo" },
            { action: () => history.forward(), label: "↪", enabled: history.hasFuture, title: "Redo" },
          ].map(({ action, label, enabled, title }) => (
            <button
              key={label}
              onClick={action}
              disabled={!enabled}
              title={title}
              style={{ background: "none", border: "1px solid rgba(255,255,255,0.12)", color: enabled ? "#fff" : "rgba(255,255,255,0.2)", padding: "4px 9px", borderRadius: 3, cursor: enabled ? "pointer" : "default", fontSize: 14 }}
            >
              {label}
            </button>
          ))}
        </div>
        {lastSaved && <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>Saved {lastSaved}</span>}
        {saving && <span style={{ fontSize: 10, color: "#90b8f8" }}>Saving…</span>}
        <button
          onClick={onSave}
          disabled={saving}
          style={{ padding: "7px 18px", background: saving ? "rgba(27,79,145,0.4)" : "#1B4F91", color: "#fff", border: "none", borderRadius: 3, fontSize: 11, fontWeight: 800, cursor: saving ? "default" : "pointer", textTransform: "uppercase", letterSpacing: "0.06em" }}
        >
          {saving ? "Saving…" : "💾 Publish"}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE — wires everything together
───────────────────────────────────────────────────────────── */
export default function PageEditorPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const locale = searchParams.get("locale") || siteTheme.defaultLocale;
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState<any>(null);
  const [pageTitle, setPageTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const pendingDataRef = useRef<any>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    pagesApi
      .get(slug, locale)
      .then((res) => {
        const page = res.data.page;
        setPageTitle(page.title);
        const content = JSON.parse(JSON.stringify(page.content || {}));
        if (!content.root) content.root = { props: {} };
        if (!content.content) content.content = [];
        setInitialData(content);
      })
      .catch((err) => setError(err.response?.data?.error || "Failed to load page"))
      .finally(() => setLoading(false));
  }, [slug, locale]);

  const doSave = async () => {
    if (!slug || !pendingDataRef.current) return;
    setSaving(true);
    try {
      await pagesApi.update(slug, { title: pageTitle, content: pendingDataRef.current, locale });
      setLastSaved(new Date().toLocaleTimeString("vi-VN"));
    } catch (err: any) {
      alert(err.response?.data?.error || "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#071d30" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 40, height: 40, border: "3px solid #1B4F91", borderTopColor: "#C12026", borderRadius: "50%", animation: "spin 0.7s linear infinite", margin: "0 auto 16px" }} />
          <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)", fontSize: 13 }}>Loading editor…</p>
        </div>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "var(--font-body)" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 18, color: "#C12026", marginBottom: 16 }}>{error}</p>
          <button onClick={() => navigate("/admin/pages")} style={{ padding: "10px 24px", background: "#1B4F91", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}>
            Back to Pages
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Puck sub-component style overrides */}
      <style>{`
        @keyframes spin{to{transform:rotate(360deg)}}

        /* ── Elementor Panel: left sidebar background ── */
        .elementor-left-panel {
          background: #132336;
          color: #fff;
        }

        /* ── Puck field overrides for dark panel ── */
        .elementor-fields-panel [class*="FieldLabel"],
        .elementor-fields-panel label {
          color: rgba(255,255,255,0.55) !important;
          font-size: 10px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.07em !important;
          font-family: var(--font-body) !important;
          margin-bottom: 5px !important;
        }
        .elementor-fields-panel input[type="text"],
        .elementor-fields-panel input[type="number"],
        .elementor-fields-panel select,
        .elementor-fields-panel textarea {
          background: rgba(255,255,255,0.07) !important;
          border: 1px solid rgba(255,255,255,0.12) !important;
          color: #fff !important;
          border-radius: 3px !important;
          font-size: 12px !important;
          font-family: var(--font-body) !important;
          width: 100% !important;
        }
        .elementor-fields-panel input:focus,
        .elementor-fields-panel select:focus,
        .elementor-fields-panel textarea:focus {
          outline: none !important;
          border-color: #1B4F91 !important;
          box-shadow: 0 0 0 2px rgba(27,79,145,0.25) !important;
        }
        /* Array items (properties) */
        .elementor-fields-panel [class*="ArrayFieldItem"] {
          background: rgba(255,255,255,0.04) !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 3px !important;
          margin-bottom: 6px !important;
        }
        /* Strip out all internal white backgrounds in ArrayItems and fields */
        .elementor-fields-panel [class*="ArrayFieldItem"] div,
        .elementor-fields-panel [class*="ArrayFieldItem"] span,
        .elementor-fields-panel [class*="Field"] div {
          background-color: transparent !important;
          color: #fff !important;
        }
        /* Exception for inputs inside those fields so they don't become transparent */
        .elementor-fields-panel [class*="ArrayFieldItem"] input,
        .elementor-fields-panel [class*="ArrayFieldItem"] textarea,
        .elementor-fields-panel [class*="ArrayFieldItem"] select {
          background-color: rgba(255,255,255,0.07) !important;
          color: #fff !important;
        }
        
        /* Section dividers */
        .elementor-fields-panel [class*="FieldWrapper"],
        .elementor-fields-panel [class*="Field--"] {
          border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          padding: 10px 14px !important;
        }
        /* Buttons inside fields (array add, etc.) */
        .elementor-fields-panel button {
          border-color: rgba(255,255,255,0.15) !important;
          color: rgba(255,255,255,0.8) !important;
          background: rgba(255,255,255,0.06) !important;
          border-radius: 3px !important;
        }
        .elementor-fields-panel button:hover {
          background: rgba(27,79,145,0.4) !important;
          color: #fff !important;
        }

        /* ── Puck component palette for dark panel ── */
        .elementor-components-panel [class*="Drawer"],
        .elementor-components-panel [class*="ComponentList"] {
          background: transparent !important;
        }
        .elementor-components-panel [class*="DrawerItem"] {
          background: rgba(255,255,255,0.06) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 4px;
        }
        /* Force text and nested containers to be readable */
        .elementor-components-panel [class*="DrawerItem"] * {
          background-color: transparent !important;
          color: #fff !important;
        }
        .elementor-components-panel [class*="DrawerItem"]:hover {
          background: rgba(27,79,145,0.5) !important;
          border-color: #1B4F91 !important;
        }
        .elementor-components-panel [class*="CategoryTitle"],
        .elementor-components-panel [class*="SectionTitle"] {
          color: rgba(255,255,255,0.45) !important;
          font-size: 10px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.1em !important;
          padding: 12px 14px 6px !important;
          font-weight: 700 !important;
        }
        /* ── Outline / Layers panel ── */
        .elementor-outline-panel [class*="Layer"],
        .elementor-outline-panel [class*="layer"] {
          background: transparent !important;
          color: rgba(255,255,255,0.8) !important;
          font-size: 13px !important;
        }
        /* Force internal labels and icons in outline to be white/transparent */
        .elementor-outline-panel [class*="Layer"] *,
        .elementor-outline-panel [class*="layer"] * {
          background-color: transparent !important;
          color: #fff !important;
        }
        .elementor-outline-panel [class*="Layer"]:hover,
        .elementor-outline-panel [class*="layer"]:hover {
          background: rgba(255,255,255,0.05) !important;
        }
        .elementor-outline-panel [data-selected="true"],
        .elementor-outline-panel [class*="selected"],
        .elementor-outline-panel [class*="Layer"][data-selected="true"],
        .elementor-outline-panel [class*="layer"][class*="selected"] {
          background: rgba(27,79,145,0.5) !important;
        }

        /* ── Hide Puck's default chrome we don't want ── */
        /* Header is rendered by our TopBar, so hide Puck's default header */
        [class*="PuckLayout"] > [class*="Header"],
        [class*="puck-root"] > header {
          display: none !important;
        }
        /* We control the left sidebar, hide default sidebar */
        [class*="SidebarSection"] {
          display: none !important;
        }

        /* ── Canvas (preview) should have white background ── */
        [class*="Preview"],
        [class*="Frame"],
        iframe[class*="puck"] {
          background: #F8F9FA !important;
        }
      `}</style>

      {initialData && (
        <Puck
          key={`${slug}-${locale}`}
          config={puckConfig}
          data={initialData}
          onPublish={doSave}
          onChange={(data) => { pendingDataRef.current = data; }}
          iframe={false}
        >
          {/* Custom Elementor-style layout using children render */}
          <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden", fontFamily: "var(--font-body)" }}>

            {/* TOP BAR */}
            <EditorTopBar
              slug={slug!}
              locale={locale}
              pageTitle={pageTitle}
              onPageTitleChange={setPageTitle}
              saving={saving}
              lastSaved={lastSaved}
              onSave={doSave}
              onBack={() => navigate("/admin/pages")}
            />

            {/* EDITOR BODY */}
            <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

              {/* ── LEFT PANEL: component list + field editor ── */}
              <div
                className="elementor-left-panel"
                style={{
                  width: 320, minWidth: 260, maxWidth: 600, flexShrink: 0,
                  resize: "horizontal",
                  display: "block",
                  height: "100%", overflow: "hidden",
                  borderRight: "1px solid rgba(255,255,255,0.07)",
                  background: "#132336",
                }}
              >
                <LeftPanelContent />
              </div>

              {/* ── CANVAS: full-width drag-and-drop preview ── */}
              <div style={{ flex: 1, overflow: "auto", background: "#e8ecf0", display: "flex", flexDirection: "column" }}>
                {/* Canvas toolbar */}
                <div style={{
                  height: 36, flexShrink: 0, display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 8,
                  background: "#1a2742", borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Canvas — drag components from the left panel
                  </span>
                </div>
                {/* The actual preview iframe/DIV */}
                <div style={{ flex: 1, padding: "0px", display: "flex", flexDirection: "column" }}>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", width: "100%", background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.18)", overflowX: "hidden" }}>
                    {/* Site Layout Wrapper */}
                    <Header />
                    <GlobalHero />
                    <div className="flex-1 w-full max-w-[1800px] mx-auto pl-8 lg:pl-12 xl:pl-16 pr-0 flex flex-col lg:flex-row relative">
                      <main className="flex-1 min-w-0 w-full lg:pr-24 py-12">
                        <Puck.Preview />
                      </main>
                      <aside className="w-full lg:w-[300px] xl:w-[340px] flex-shrink-0 lg:border-l border-rule border-dashed bg-white">
                        <div className="sticky top-[60px]">
                          <SidebarLogos />
                        </div>
                      </aside>
                    </div>
                    <Footer />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Puck>
      )}
    </>
  );
}
