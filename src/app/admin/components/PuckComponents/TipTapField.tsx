import React, { useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Link } from "@tiptap/extension-link";
import { TextAlign } from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";

/* ─────────────────────────────────────────────────────────
   Styles — injected once via <style> to keep it self-contained
───────────────────────────────────────────────────────── */
const EDITOR_STYLES = `
/* Wrapper */
.tiptap-field-wrap {
  background: #fff;
  border-radius: 6px;
  border: 1px solid #dee2e6;
  overflow: hidden;
}

/* Toolbar */
.tiptap-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 6px 8px;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}
.tiptap-toolbar button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 28px;
  padding: 0 5px;
  border: none;
  border-radius: 4px;
  background: transparent !important;
  color: #374151 !important;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.12s;
  font-family: system-ui, sans-serif;
}
.tiptap-toolbar button:hover {
  background: #e9ecef !important;
  color: #111 !important;
}
.tiptap-toolbar button.is-active {
  background: #1B4F91 !important;
  color: #fff !important;
}
.tiptap-toolbar .sep {
  width: 1px;
  height: 20px;
  background: #dee2e6;
  margin: 4px 4px;
  flex-shrink: 0;
}

/* Editor content area */
.tiptap-editor-content .ProseMirror {
  min-height: 140px;
  max-height: 400px;
  overflow-y: auto;
  padding: 12px 14px;
  font-family: var(--font-body, 'Open Sans', sans-serif);
  font-size: 14px;
  line-height: 1.7;
  color: #212529;
  outline: none;
}
.tiptap-editor-content .ProseMirror:focus {
  outline: none;
}
.tiptap-editor-content .ProseMirror p {
  margin: 0 0 8px 0;
}
.tiptap-editor-content .ProseMirror ul,
.tiptap-editor-content .ProseMirror ol {
  padding-left: 24px;
  margin: 4px 0 12px 0;
}
.tiptap-editor-content .ProseMirror li {
  margin-bottom: 2px;
}
.tiptap-editor-content .ProseMirror h1,
.tiptap-editor-content .ProseMirror h2,
.tiptap-editor-content .ProseMirror h3,
.tiptap-editor-content .ProseMirror h4,
.tiptap-editor-content .ProseMirror h5,
.tiptap-editor-content .ProseMirror h6 {
  margin: 8px 0 4px 0;
  line-height: 1.3;
  font-weight: 700;
}
.tiptap-editor-content .ProseMirror h1 { font-size: 28px; }
.tiptap-editor-content .ProseMirror h2 { font-size: 24px; }
.tiptap-editor-content .ProseMirror h3 { font-size: 20px; }
.tiptap-editor-content .ProseMirror h4 { font-size: 18px; }
.tiptap-editor-content .ProseMirror blockquote {
  border-left: 4px solid #1B4F91;
  padding-left: 16px;
  margin: 8px 0;
  color: #4a4a4a;
  font-style: italic;
}
.tiptap-editor-content .ProseMirror a {
  color: #1B4F91;
  text-decoration: underline;
  cursor: pointer;
}
.tiptap-editor-content .ProseMirror hr {
  border: none;
  border-top: 1px solid #dee2e6;
  margin: 16px 0;
}
.tiptap-editor-content .ProseMirror mark {
  background: #fef08a;
  border-radius: 2px;
  padding: 0 2px;
}
`;

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.textContent = EDITOR_STYLES;
  document.head.appendChild(style);
  stylesInjected = true;
}

/* ─────────────────────────────────────────────────────────
   Toolbar button helper
───────────────────────────────────────────────────────── */
interface TBProps {
  onClick: () => void;
  isActive?: boolean;
  title: string;
  children: React.ReactNode;
}
const TB: React.FC<TBProps> = ({ onClick, isActive, title, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={isActive ? "is-active" : ""}
    title={title}
  >
    {children}
  </button>
);

const Sep = () => <span className="sep" />;

/* ─────────────────────────────────────────────────────────
   Color picker (small inline)
───────────────────────────────────────────────────────── */
const PRESET_COLORS = [
  "#212529", "#C12026", "#1B4F91", "#0EA5A0", "#F59E0B",
  "#22C55E", "#8B5CF6", "#EC4899", "#64748B", "#FFFFFF",
];

/* ─────────────────────────────────────────────────────────
   Main TipTap Editor Component
───────────────────────────────────────────────────────── */
interface TipTapEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export const TipTapEditor: React.FC<TipTapEditorProps> = ({ value, onChange }) => {
  React.useEffect(() => { injectStyles(); }, []);

  const [showColorPicker, setShowColorPicker] = React.useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4, 5, 6] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
    ],
    content: value || "",
    onUpdate: ({ editor: e }) => {
      onChange(e.getHTML());
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href;
    const url = window.prompt("URL:", prev || "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="tiptap-field-wrap">
      {/* ── Toolbar ── */}
      <div className="tiptap-toolbar">
        {/* Text formatting */}
        <TB onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive("bold")} title="Bold (Ctrl+B)">
          <strong>B</strong>
        </TB>
        <TB onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive("italic")} title="Italic (Ctrl+I)">
          <em>I</em>
        </TB>
        <TB onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive("underline")} title="Underline (Ctrl+U)">
          <span style={{ textDecoration: "underline" }}>U</span>
        </TB>
        <TB onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive("strike")} title="Strikethrough">
          <span style={{ textDecoration: "line-through" }}>S</span>
        </TB>

        <Sep />

        {/* Lists */}
        <TB onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive("bulletList")} title="Bullet List">
          •≡
        </TB>
        <TB onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive("orderedList")} title="Numbered List">
          1.
        </TB>

        <Sep />

        {/* Headings */}
        <TB onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive("heading", { level: 2 })} title="Heading 2">
          H2
        </TB>
        <TB onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive("heading", { level: 3 })} title="Heading 3">
          H3
        </TB>
        <TB onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} isActive={editor.isActive("heading", { level: 4 })} title="Heading 4">
          H4
        </TB>

        <Sep />

        {/* Alignment */}
        <TB onClick={() => editor.chain().focus().setTextAlign("left").run()} isActive={editor.isActive({ textAlign: "left" })} title="Align Left">
          ≡
        </TB>
        <TB onClick={() => editor.chain().focus().setTextAlign("center").run()} isActive={editor.isActive({ textAlign: "center" })} title="Align Center">
          ≡
        </TB>
        <TB onClick={() => editor.chain().focus().setTextAlign("right").run()} isActive={editor.isActive({ textAlign: "right" })} title="Align Right">
          ≡
        </TB>

        <Sep />

        {/* Link */}
        <TB onClick={setLink} isActive={editor.isActive("link")} title="Insert Link">
          🔗
        </TB>

        {/* Blockquote */}
        <TB onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive("blockquote")} title="Blockquote">
          ❝
        </TB>

        {/* Horizontal rule */}
        <TB onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule">
          ―
        </TB>

        <Sep />

        {/* Color */}
        <div style={{ position: "relative" }}>
          <TB onClick={() => setShowColorPicker(!showColorPicker)} title="Text Color">
            <span style={{ color: editor.getAttributes("textStyle").color || "#212529" }}>A</span>
            <span style={{ fontSize: 8, marginLeft: 1 }}>▼</span>
          </TB>
          {showColorPicker && (
            <div style={{
              position: "absolute", top: "100%", left: 0, zIndex: 100,
              background: "#fff", border: "1px solid #dee2e6", borderRadius: 6,
              padding: 8, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4,
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)", minWidth: 140,
            }}>
              {PRESET_COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => { editor.chain().focus().setColor(c).run(); setShowColorPicker(false); }}
                  style={{
                    width: 24, height: 24, borderRadius: 4, border: "1px solid #ccc",
                    background: c, cursor: "pointer", padding: 0,
                  }}
                  title={c}
                />
              ))}
              <button
                type="button"
                onClick={() => { editor.chain().focus().unsetColor().run(); setShowColorPicker(false); }}
                style={{
                  gridColumn: "1 / -1", padding: "4px", fontSize: 11,
                  border: "1px solid #ccc", borderRadius: 4, cursor: "pointer",
                  background: "#f8f9fa !important", color: "#374151 !important",
                  fontWeight: 600, textAlign: "center",
                }}
              >
                Reset
              </button>
            </div>
          )}
        </div>

        {/* Highlight */}
        <TB onClick={() => editor.chain().focus().toggleHighlight().run()} isActive={editor.isActive("highlight")} title="Highlight">
          <span style={{ background: "#fef08a", padding: "0 3px", borderRadius: 2 }}>H</span>
        </TB>
      </div>

      {/* ── Editor Content ── */}
      <div className="tiptap-editor-content">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   Puck Custom Field — wraps TipTapEditor as a Puck field
   Usage in puckConfig:
     html: {
       type: "custom",
       label: "Content",
       render: makeTipTapField(),
     }
───────────────────────────────────────────────────────── */
export function makeTipTapField(label?: string) {
  return {
    type: "custom" as const,
    label: label || "Content (Rich Text)",
    render: ({ value, onChange }: { value: string; onChange: (val: string) => void }) => (
      <TipTapEditor value={value || ""} onChange={onChange} />
    ),
  };
}

export default TipTapEditor;
