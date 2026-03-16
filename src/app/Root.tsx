import { Outlet } from "react-router";
import Navigation from "./components/Header";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
