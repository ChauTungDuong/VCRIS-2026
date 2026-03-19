import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Root() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
