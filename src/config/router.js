import { createHashRouter } from "react-router-dom";
import App from "../App";
import ContactPage from "../pages/ContactPage.jsx";
import ProjectPage from "../pages/ProjectPage.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import OfficePage from "../pages/OfficePage.jsx";
import ListPage from "../pages/ListPage.jsx";
import TermsPage from "../pages/TermsPage.jsx";
import HomePage from "../pages/HomePage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/works",
    element: <ProjectPage />,
  },
  {
    path: "/project/project-detail",
    element: <ProjectDetail />,
  },
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
