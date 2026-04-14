import { useEffect, useState, useRef } from "react";
import { mediaApi } from "./hooks/useApi";

interface MediaFile {
  id: number;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  createdAt: string;
}

const API_BASE = import.meta.env.VITE_API_URL?.replace("/api/v1", "") || "http://localhost:4000";

function resolveUrl(url: string) {
  if (!url) return "";
  // Already absolute
  if (url.startsWith("http")) return url;
  // Fallback to Express backend directly to bypass dev server proxy quirks
  return `${API_BASE}${url}`;
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaLibraryPage() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selected, setSelected] = useState<MediaFile | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchFiles = () => {
    setLoading(true);
    mediaApi
      .list(1, 100)
      .then((res) => setFiles(res.data.files || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchFiles(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      await mediaApi.upload(file);
      await fetchFiles();
    } catch (err: any) {
      alert(err.response?.data?.error || "Upload failed");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this file permanently?")) return;
    try {
      await mediaApi.delete(id);
      if (selected?.id === id) setSelected(null);
      fetchFiles();
    } catch (err: any) {
      alert(err.response?.data?.error || "Delete failed");
    }
  };

  const copyUrl = (url: string) => {
    const full = url.startsWith("http") ? url : `${window.location.origin}${url}`;
    navigator.clipboard.writeText(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "var(--font-body)", background: "#F8F9FA" }}>

      {/* ── LEFT: Grid ────────────────────────────────────── */}
      <div style={{ flex: 1, overflowY: "auto", padding: "32px 36px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, fontFamily: "var(--font-display)", color: "#0b2740", textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0 }}>
              Media Library
            </h1>
            <p style={{ fontSize: 15, color: "#4A4A4A", marginTop: 4 }}>
              {files.length} file{files.length !== 1 ? "s" : ""} uploaded
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <input ref={fileInputRef} type="file" accept="image/*,application/pdf" style={{ display: "none" }} onChange={handleUpload} />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "12px 24px", background: "#1B4F91",
                color: "#fff", border: "none", borderRadius: 6,
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                opacity: uploading ? 0.65 : 1, letterSpacing: "0.02em", textTransform: "uppercase",
              }}
            >
              {uploading ? (
                <>
                  <span style={{ width: 16, height: 16, border: "2px solid #fff", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                  Uploading…
                </>
              ) : (
                <>⬆ Upload File</>
              )}
            </button>
          </div>
        </div>

        {/* Blue accent rule */}
        <div style={{ width: "100%", height: 3, background: "linear-gradient(90deg, #1B4F91 0%, #C12026 100%)", borderRadius: 2, marginBottom: 28 }} />

        {loading ? (
          <div style={{ textAlign: "center", padding: 80, color: "#4A4A4A" }}>
            <div style={{ width: 36, height: 36, border: "3px solid #1B4F91", borderTopColor: "transparent", borderRadius: "50%", margin: "0 auto 16px", animation: "spin 0.7s linear infinite" }} />
            Loading files…
          </div>
        ) : files.length === 0 ? (
          <div style={{ textAlign: "center", padding: 80, background: "#fff", border: "2px dashed #DEE2E6", borderRadius: 4, color: "#4A4A4A" }}>
            <p style={{ fontSize: 48, marginBottom: 16 }}>📁</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#0b2740", fontFamily: "var(--font-display)", textTransform: "uppercase" }}>No Files Yet</p>
            <p style={{ fontSize: 13, marginTop: 8 }}>Click "Upload File" to add your first image or document.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14 }}>
            {files.map((file) => {
              const isImg = file.mimeType?.startsWith("image/");
              const fileUrl = resolveUrl(file.url);
              const isSelected = selected?.id === file.id;
              return (
                <div
                  key={file.id}
                  onClick={() => setSelected(isSelected ? null : file)}
                  style={{
                    border: isSelected ? "2px solid #1B4F91" : "2px solid #DEE2E6",
                    borderRadius: 4, overflow: "hidden", cursor: "pointer",
                    background: isSelected ? "#E8F0FE" : "#fff",
                    boxShadow: isSelected ? "0 0 0 3px rgba(27,79,145,0.2)" : "0 1px 4px rgba(0,0,0,0.06)",
                    transition: "all 0.15s",
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{ height: 120, background: "#F8F9FA", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    {isImg ? (
                      <img
                        src={fileUrl}
                        alt={file.filename}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    ) : (
                      <span style={{ fontSize: 40 }}>📄</span>
                    )}
                  </div>
                  {/* Info */}
                  <div style={{ padding: "10px 12px 12px" }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#212529", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: 0 }}>
                      {file.filename}
                    </p>
                    <p style={{ fontSize: 12, color: "#4A4A4A", marginTop: 4 }}>
                      {formatSize(file.size)} · {new Date(file.createdAt).toLocaleDateString("vi-VN")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── RIGHT: Detail Panel ───────────────────────────── */}
      <div style={{
        width: selected ? 340 : 0, minHeight: "100vh",
        background: "#fff", borderLeft: "1px solid #DEE2E6",
        overflow: "hidden", transition: "width 0.25s ease",
        flexShrink: 0,
      }}>
        {selected && (
          <div style={{ width: 340, padding: "28px 24px", fontFamily: "var(--font-body)" }}>
            {/* Preview */}
            <div style={{ height: 200, background: "#F8F9FA", border: "1px solid #DEE2E6", borderRadius: 6, overflow: "hidden", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {selected.mimeType?.startsWith("image/") ? (
                <img src={resolveUrl(selected.url)} alt={selected.filename} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              ) : (
                <span style={{ fontSize: 56 }}>📄</span>
              )}
            </div>

            {/* Meta */}
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0b2740", wordBreak: "break-all", margin: "0 0 6px", fontFamily: "var(--font-display)" }}>
              {selected.filename}
            </h3>
            <p style={{ fontSize: 13, color: "#4A4A4A", margin: "0 0 20px" }}>
              {formatSize(selected.size)} · {selected.mimeType} <br/> {new Date(selected.createdAt).toLocaleString("vi-VN")}
            </p>

            {/* URL */}
            <div style={{ background: "#F8F9FA", border: "1px solid #DEE2E6", borderRadius: 4, padding: "10px 12px", marginBottom: 16, wordBreak: "break-all", fontSize: 12, color: "#4A4A4A", fontFamily: "var(--font-mono)" }}>
              {selected.url}
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button
                onClick={() => copyUrl(selected.url)}
                style={{ padding: "12px 16px", background: copied ? "#22c55e" : "#1B4F91", color: "#fff", border: "none", borderRadius: 6, fontSize: 13, fontWeight: 700, cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                {copied ? "✓ Copied!" : "📋 Copy URL"}
              </button>
              <a
                href={resolveUrl(selected.url)}
                target="_blank"
                rel="noreferrer"
                style={{ display: "block", padding: "12px 16px", background: "#F8F9FA", color: "#212529", border: "1px solid #DEE2E6", borderRadius: 6, fontSize: 13, fontWeight: 700, cursor: "pointer", textAlign: "center", textDecoration: "none", textTransform: "uppercase" }}
              >
                ↗ Open in New Tab
              </a>
              <button
                onClick={() => handleDelete(selected.id)}
                style={{ padding: "12px 16px", background: "#fff0f0", color: "#C12026", border: "1px solid #fecaca", borderRadius: 6, fontSize: 13, fontWeight: 700, cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
