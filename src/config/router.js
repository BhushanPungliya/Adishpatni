import { createHashRouter } from "react-router-dom";
import App from "../App";
import ContactPage from "../pages/ContactPage";
import ProjectPage from "../pages/ProjectPage";
// import ProjectDetail from "../pages/ProjectDetail";
import AboutPage from "../pages/AboutPage";
import OfficePage from "../pages/OfficePage";
import ListPage from "../pages/ListPage";
import TermsPage from "../pages/TermsPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/works",
    element: <ProjectPage />,
  },
  // {
  //   path: "/project/project-detail",
  //   element: <ProjectDetail />,
  // },
  {
    path: "/process",
    element: <AboutPage />,
  },
  {
    path: "/office",
    element: <OfficePage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
  {
    path: "/terms-privacy",
    element: <TermsPage />,
  },
]);

export default router;
