import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SidebarLogos from "./components/SidebarLogos";
import GlobalHero from "./components/GlobalHero";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <GlobalHero />
      <div className="flex-1 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row relative">
        <main className="flex-1 min-w-0 w-full lg:pr-8 py-8">
          <Outlet />
        </main>
        <aside className="w-full lg:w-[300px] xl:w-[340px] flex-shrink-0 lg:border-l border-rule border-dashed bg-white">
          <div className="sticky top-[60px]">
            <SidebarLogos />
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}
