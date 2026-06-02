import { Outlet, useLocation } from "react-router";
import AdminSidebar from "./components/AdminSidebar";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";

export default function AdminLayout() {
  const location = useLocation();
  const isEditor = location.pathname.includes("/admin/editor");

  return (
    <AuthProvider>
      <ProtectedRoute>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {!isEditor && <AdminSidebar />}
          <main style={{
            flex: 1,
            marginLeft: isEditor ? 0 : 240,
            backgroundColor: "#F8F9FA",
            minHeight: "100vh",
          }}>
            <Outlet />
          </main>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}

