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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "call-for-papers", Component: CallForPapers },
      { path: "speakers", Component: KeynoteSpeakers },
      { path: "registration", Component: Registration },
      { path: "program", Component: Program },
      { path: "venue", Component: Venue },
      { path: "committees", Component: Committees },
      { path: "previous-conferences", Component: PreviousConferences },
    ],
  },
]);
