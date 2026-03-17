import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Registration from "./pages/Registration";
import Program from "./pages/Program";
import Venue from "./pages/Venue";
import Committees from "./pages/Committees";
import PreviousConferences from "./pages/PreviousConferences";
import PaperSubmission from "./pages/PaperSubmission";
import CameraReadySubmission from "./pages/CameraReadySubmission";
import InstructionsForAuthors from "./pages/InstructionsForAuthors";
import { vcrisRoutes } from "./utils/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: vcrisRoutes.callForPapers, Component: CallForPapers },
      { path: vcrisRoutes.keynoteSpeakers, Component: KeynoteSpeakers },
      { path: vcrisRoutes.registration, Component: Registration },
      { path: vcrisRoutes.program, Component: Program },
      { path: vcrisRoutes.venue, Component: Venue },
      { path: vcrisRoutes.organizingCommittees, Component: Committees },
      { path: vcrisRoutes.programCommittees, Component: Committees },
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
    ],
  },
]);
