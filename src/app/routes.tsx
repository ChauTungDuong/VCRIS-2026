import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import CallForWorkshops from "./pages/CallForWorkshops";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Registration from "./pages/Registration";
import Program from "./pages/Program";
import Venue from "./pages/Venue";
import OrganizingCommittees from "./pages/OrganizingCommittees";
import ProgramCommittees from "./pages/ProgramCommittees";
import PreviousConferences from "./pages/PreviousConferences";
import PaperSubmission from "./pages/PaperSubmission";
import CameraReadySubmission from "./pages/CameraReadySubmission";
import InstructionsForAuthors from "./pages/InstructionsForAuthors";
import Accommodation from "./pages/Accommodation";
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
      { path: vcrisRoutes.callForPapers, Component: CallForPapers },
      { path: vcrisRoutes.callForWorkshops, Component: CallForWorkshops },
      { path: vcrisRoutes.keynoteSpeakers, Component: KeynoteSpeakers },
      { path: vcrisRoutes.registration, Component: Registration },
      { path: vcrisRoutes.program, Component: Program },
      { path: vcrisRoutes.venue, Component: Venue },
      { path: vcrisRoutes.accommodation, Component: Accommodation },
      { path: vcrisRoutes.organizingCommittees, Component: OrganizingCommittees },
      { path: vcrisRoutes.programCommittees, Component: ProgramCommittees },
      { path: vcrisRoutes.previousConferences, Component: PreviousConferences },
      { path: vcrisRoutes.paperSubmission, Component: PaperSubmission },
      {
        path: vcrisRoutes.cameraReadySubmission,
        Component: CameraReadySubmission,
      },
      {
        path: vcrisRoutes.instructionsForAuthors,
        Component: InstructionsForAuthors,
      },
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
