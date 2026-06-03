import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Speakers from "./pages/Speakers";
import Submission from "./pages/Submission";
import Registration from "./pages/Registration";
import Program from "./pages/Program";
import Venue from "./pages/Venue";
import { vcrisRoutes } from "./utils/routes";

// Admin imports
import AdminLayout from "./admin/AdminLayout";
import LoginPage from "./admin/LoginPage";
import DashboardPage from "./admin/DashboardPage";
import PagesListPage from "./admin/PagesListPage";
import PageEditorPage from "./admin/PageEditorPage";
import SiteConfigPage from "./admin/SiteConfigPage";
import MediaLibraryPage from "./admin/MediaLibraryPage";
import DynamicPage from "./pages/DynamicPage";

export const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: vcrisRoutes.members, Component: Members },
      { path: vcrisRoutes.speakers, Component: Speakers },
      { path: vcrisRoutes.submission, Component: Submission },
      { path: vcrisRoutes.registration, Component: Registration },
      { path: vcrisRoutes.program, Component: Program },
      { path: vcrisRoutes.venue, Component: Venue },
      // Dynamic page for admin-created pages
      { path: ":slug", Component: DynamicPage },
    ],
  },
  // Admin routes
  {
    path: "/admin/login",
    Component: LoginPage,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "pages", Component: PagesListPage },
      { path: "editor/:slug", Component: PageEditorPage },
      { path: "config", Component: SiteConfigPage },
      { path: "media", Component: MediaLibraryPage },
    ],
  },
]);
