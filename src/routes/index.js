import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Contect from "../pages/Contect";
import Project from "../pages/Project";
import Skills from "../pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "contect",
        element: <Contect/>,
      },
      {
        path: "projects",
        element: <Project/>,
      },
      {
        path: "skills",
        element: <Skills/>,
      },
    ],
  },
]);

export default router;
