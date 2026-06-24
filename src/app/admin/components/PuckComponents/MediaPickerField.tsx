import React, { useCallback, useEffect, useRef, useState } from "react";
import { mediaApi } from "../../hooks/useApi";

interface MediaFile {
  id: number;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  createdAt: string;
}

interface MediaPickerFieldProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const API_BASE = import.meta.env.VITE_API_URL?.replace("/api/v1", "") || "http://localhost:4000";

// Resolve a stored URL for display: direct absolute URL to bypass dev proxy issues
function resolveDisplayUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${API_BASE}${url}`;
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function MediaPickerField({ value, onChange, label }: MediaPickerFieldProps) {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState<string>(value || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ---------- load media list ---------- */
  const fetchFiles = useCallback(() => {
    setLoading(true);
    mediaApi
      .list(1, 100)
      .then((res: any) => setFiles(res.data.files || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (open) fetchFiles();
  }, [open, fetchFiles]);

  const handleUploadFile = async (file: File) => {
    setUploading(true);
    try {
      await mediaApi.upload(file);
      fetchFiles();
    } catch (err: any) {
      alert(err?.response?.data?.error || "Upload failed");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await handleUploadFile(file);
  };

  /* ---------- drag & drop ---------- */
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    await handleUploadFile(file);
  };

  /* ---------- confirm selection ---------- */
  const handleSelect = (file: MediaFile) => {
    // Always store the relative path from the server (e.g. /uploads/filename.jpg)
    // The Vite dev proxy and Express static server both handle /uploads/* correctly
    const url = file.url;
    setSelected(url);
    onChange(url);
    setOpen(false);
  };

  const handleClear = () => {
    setSelected("");
    onChange("");
  };

  /* ---------- sync external value ---------- */
  useEffect(() => {
    setSelected(value || "");
  }, [value]);

  /* ========== RENDER ========== */
  return (
    <div style={{ fontFamily: "var(--font-body, sans-serif)" }}>
      {label && (
        <p style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>
          {label}
        </p>
      )}

      {/* Preview thumb + controls */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: 8, border: "1px solid #DEE2E6", borderRadius: 4,
        background: "#F8F9FA",
      }}>
        {selected ? (
          <img
            src={selected}
            alt=""
            style={{ width: 52, height: 52, objectFit: "cover", borderRadius: 4, border: "1px solid #DEE2E6", flexShrink: 0 }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : (
          <div style={{
            width: 52, height: 52, borderRadius: 4, background: "#DEE2E6",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#4A4A4A", fontSize: 20, flexShrink: 0,
          }}>
            🖼️
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          {selected ? (
            <p style={{ fontSize: 11, color: "#212529", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {selected.split("/").pop()}
            </p>
          ) : (
            <p style={{ fontSize: 12, color: "#4A4A4A" }}>No image selected</p>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4, flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            style={{
              padding: "4px 10px", fontSize: 11, fontWeight: 600,
              background: "#1B4F91", color: "#fff", border: "none",
              borderRadius: 4, cursor: "pointer", whiteSpace: "nowrap",
            }}
          >
            Browse
          </button>
          {selected && (
            <button
              type="button"
              onClick={handleClear}
              style={{
                padding: "4px 10px", fontSize: 11, fontWeight: 600,
                background: "#fff0f0", color: "#C12026", border: "1px solid #fecaca",
                borderRadius: 4, cursor: "pointer",
              }}
            >
              Remove
            </button>
          )}
        </div>
      </div>

      {/* Fallback URL input */}
      <input
        type="text"
        placeholder="Or paste image URL..."
        value={selected}
        onChange={(e) => { setSelected(e.target.value); onChange(e.target.value); }}
        style={{
          width: "100%", marginTop: 6, padding: "6px 10px", fontSize: 12,
          border: "1px solid #DEE2E6", borderRadius: 4, background: "#fff",
          boxSizing: "border-box",
        }}
      />

      {/* ===== MODAL ===== */}
      {open && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 99999,
            background: "rgba(11,39,64,0.65)", backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div style={{
            width: "min(92vw, 860px)", maxHeight: "85vh",
            background: "#fff", borderRadius: 8, overflow: "hidden",
            display: "flex", flexDirection: "column",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}>
            {/* Header */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "16px 20px", background: "#0b2740", color: "#fff",
            }}>
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, fontFamily: "var(--font-display, sans-serif)" }}>
                Media Library
              </h2>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input ref={fileInputRef} type="file" accept="image/*,application/pdf" style={{ display: "none" }} onChange={handleUpload} />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  style={{
                    padding: "7px 16px", fontSize: 13, fontWeight: 600,
                    background: "#C12026", color: "#fff", border: "none",
                    borderRadius: 4, cursor: "pointer", opacity: uploading ? 0.65 : 1,
                  }}
                >
                  {uploading ? "Uploading..." : "⬆ Upload New"}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  style={{
                    width: 32, height: 32, borderRadius: "50%",
                    border: "none", background: "rgba(255,255,255,0.15)",
                    color: "#fff", fontSize: 18, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Body */}
            <div 
              style={{ 
                flex: 1, 
                overflowY: "auto", 
                padding: 20, 
                position: "relative",
                transition: "background-color 0.2s",
                backgroundColor: dragging ? "#F0F4F8" : "transparent"
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {dragging && (
                <div style={{
                  position: "absolute", inset: 0, background: "rgba(27,79,145,0.05)",
                  border: "2px dashed #1B4F91", borderRadius: 8, zIndex: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  pointerEvents: "none"
                }}>
                  <p style={{ fontSize: 20, fontWeight: 600, color: "#1B4F91" }}>Drop file here to upload</p>
                </div>
              )}
              {loading ? (
                <div style={{ textAlign: "center", padding: 60, color: "#4A4A4A" }}>
                  Loading files…
                </div>
              ) : files.length === 0 ? (
                <div style={{ textAlign: "center", padding: 60, color: "#4A4A4A" }}>
                  <p style={{ fontSize: 40, marginBottom: 12 }}>📁</p>
                  <p style={{ fontWeight: 600 }}>No files yet</p>
                  <p style={{ fontSize: 13, marginTop: 4 }}>Upload an image to get started</p>
                </div>
              ) : (
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
                  gap: 14,
                }}>
                  {files.map((file) => {
                    const fileUrl = resolveDisplayUrl(file.url);
                    const isImg = file.mimeType?.startsWith("image/");
                    return (
                      <div
                        key={file.id}
                        onClick={() => handleSelect(file)}
                        style={{
                          border: selected === fileUrl ? "2px solid #1B4F91" : "2px solid #DEE2E6",
                          borderRadius: 6, overflow: "hidden", cursor: "pointer",
                          background: selected === fileUrl ? "#E8F0FE" : "#F8F9FA",
                          transition: "border-color 0.15s, box-shadow 0.15s",
                          boxShadow: selected === fileUrl ? "0 0 0 3px rgba(27,79,145,0.18)" : "none",
                        }}
                      >
                        <div style={{
                          height: 110, background: "#DEE2E6",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          overflow: "hidden",
                        }}>
                          {isImg ? (
                            <img src={fileUrl} alt={file.filename} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          ) : (
                            <span style={{ fontSize: 36 }}>📄</span>
                          )}
                        </div>
                        <div style={{ padding: "8px 10px" }}>
                          <p style={{
                            fontSize: 11, fontWeight: 600, color: "#212529",
                            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                            margin: 0,
                          }}>
                            {file.filename}
                          </p>
                          <p style={{ fontSize: 10, color: "#4A4A4A", margin: "2px 0 0" }}>
                            {formatSize(file.size)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{
              padding: "12px 20px", borderTop: "1px solid #DEE2E6",
              display: "flex", justifyContent: "flex-end", gap: 10,
              background: "#F8F9FA",
            }}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                style={{
                  padding: "8px 18px", fontSize: 13, fontWeight: 600,
                  background: "#fff", color: "#212529", border: "1px solid #DEE2E6",
                  borderRadius: 4, cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
 * Puck custom field descriptor
 * Usage in puckConfig:
 *   someImageProp: {
 *     type: "custom",
 *     label: "Background Image",
 *     render: ({ value, onChange }) => (
 *       <MediaPickerField value={value} onChange={onChange} />
 *     ),
 *   }
 * ============================================================ */
export function makeMediaField(label = "Image") {
  return {
    type: "custom" as const,
    label,
    render: ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
      <MediaPickerField value={value} onChange={onChange} label={label} />
    ),
  };
}
