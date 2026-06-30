import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Speakers from "./pages/Speakers";
import Submission from "./pages/Submission";
import Registration from "./pages/Registration";
import Program from "./pages/Program";
import Venue from "./pages/Venue";

// Additional static pages
import Accommodation from "./pages/Accommodation";
import CallForPapers from "./pages/CallForPapers";
import CallForWorkshops from "./pages/CallForWorkshops";
import CameraReadySubmission from "./pages/CameraReadySubmission";
import InstructionsForAuthors from "./pages/InstructionsForAuthors";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import OrganizingCommittees from "./pages/OrganizingCommittees";
import PaperSubmission from "./pages/PaperSubmission";
import PreviousConferences from "./pages/PreviousConferences";
import ProgramCommittees from "./pages/ProgramCommittees";

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

import { USE_STATIC_DATA } from "./utils/site";

export const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: () => <DynamicPage FallbackComponent={Home} pageSlug="home" /> },
      { path: "members", Component: () => <DynamicPage FallbackComponent={Members} pageSlug="members" /> },
      { path: "speakers", Component: () => <DynamicPage FallbackComponent={Speakers} pageSlug="speakers" /> },
      { path: "submission", Component: () => <DynamicPage FallbackComponent={Submission} pageSlug="submission" /> },
      { path: "registration", Component: () => <DynamicPage FallbackComponent={Registration} pageSlug="registration" /> },
      { path: "program", Component: () => <DynamicPage FallbackComponent={Program} pageSlug="program" /> },
      { path: "venue", Component: () => <DynamicPage FallbackComponent={Venue} pageSlug="venue" /> },
      { path: "accommodation", Component: Accommodation },
      { path: "call-for-papers", Component: CallForPapers },
      { path: "call-for-workshops", Component: CallForWorkshops },
      { path: "camera-ready-submission", Component: CameraReadySubmission },
      { path: "instructions-for-authors", Component: InstructionsForAuthors },
      { path: "keynote-speakers", Component: KeynoteSpeakers },
      { path: "organizing-committees", Component: OrganizingCommittees },
      { path: "paper-submission", Component: PaperSubmission },
      { path: "previous-conferences", Component: PreviousConferences },
      { path: "program-committees", Component: ProgramCommittees },
      // Dynamic page for admin-created pages or fallback
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
