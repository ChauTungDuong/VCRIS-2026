import { useState } from "react";
import { useNavigate } from "react-router";
import { AuthProvider, useAuth } from "./hooks/useAuth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/admin", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/admin", { replace: true });
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", fontFamily: "var(--font-body)",
      background: "linear-gradient(135deg, #071d30 0%, #0b2740 50%, #112d47 100%)",
    }}>
      {/* Left panel — branding */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "60px 80px", position: "relative", overflow: "hidden",
      }}>
        {/* Dotted bg pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <div style={{ width: 5, height: 40, background: "#C12026", borderRadius: 2 }} />
            <span style={{ fontSize: 36, fontWeight: 800, fontFamily: "var(--font-display)", color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              VCRIS 2026
            </span>
          </div>

          <h1 style={{ fontSize: 40, fontWeight: 800, color: "#fff", fontFamily: "var(--font-display)", textTransform: "uppercase", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.01em" }}>
            Content<br />Management<br />System
          </h1>
          <div style={{ width: 48, height: 4, background: "#C12026", marginBottom: 24 }} />
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 340 }}>
            Manage your conference pages, media files, and site configuration from one central admin panel.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 32, marginTop: 48 }}>
            {[
              { num: "14", label: "Pages" },
              { num: "2", label: "Languages" },
              { num: "2026", label: "Edition" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", fontFamily: "var(--font-mono)" }}>{num}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — login form */}
      <div style={{
        width: 460, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
        background: "#fff", padding: "60px 48px",
      }}>
        <div style={{ width: "100%" }}>
          {/* Form header */}
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0b2740", fontFamily: "var(--font-display)", textTransform: "uppercase", margin: "0 0 8px", letterSpacing: "-0.01em" }}>
              Administrator Sign In
            </h2>
            <div style={{ width: 40, height: 3, background: "#C12026" }} />
          </div>

          {/* Error message */}
          {error && (
            <div style={{ padding: "12px 16px", background: "#fff0f0", border: "1px solid #fecaca", borderLeft: "3px solid #C12026", borderRadius: "0 4px 4px 0", color: "#C12026", fontSize: 13, marginBottom: 20, fontWeight: 600 }}>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#4A4A4A", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@vcris.org"
                required
                style={{ width: "100%", padding: "12px 14px", border: "1px solid #DEE2E6", borderRadius: 4, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-body)", transition: "border-color 0.15s" }}
                onFocus={(e) => { e.target.style.borderColor = "#1B4F91"; e.target.style.boxShadow = "0 0 0 3px rgba(27,79,145,0.12)"; }}
                onBlur={(e) => { e.target.style.borderColor = "#DEE2E6"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: 32 }}>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#4A4A4A", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  style={{ width: "100%", padding: "12px 44px 12px 14px", border: "1px solid #DEE2E6", borderRadius: 4, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-body)", transition: "border-color 0.15s" }}
                  onFocus={(e) => { e.target.style.borderColor = "#1B4F91"; e.target.style.boxShadow = "0 0 0 3px rgba(27,79,145,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#DEE2E6"; e.target.style.boxShadow = "none"; }}
                />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#4A4A4A" }}>
                  {showPass ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "14px", background: loading ? "rgba(27,79,145,0.5)" : "#1B4F91",
                color: "#fff", border: "none", borderRadius: 4, fontSize: 13,
                fontWeight: 800, cursor: loading ? "wait" : "pointer",
                textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-body)",
                transition: "background 0.15s",
              }}
            >
              {loading ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <span style={{ width: 16, height: 16, border: "2px solid #fff", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                  Signing in…
                </span>
              ) : "Sign In →"}
            </button>
          </form>

          <p style={{ textAlign: "center", fontSize: 11, color: "rgba(0,0,0,0.3)", marginTop: 28, letterSpacing: "0.04em" }}>
            VCRIS 2026 · CONTENT MANAGEMENT SYSTEM
          </p>
        </div>
      </div>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}
