import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { LandingPage } from "../views/LandingPage";
import { Menu } from "../views/Menu.jsx";
import { DetailMenu } from "../views/MenuDetail";
import { NotFound } from "../views/NotFound";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/menuDetail/:id",
        element: <DetailMenu />,
      },
      {
        path: "*",
        element: <NotFound/>,
      },
    ],
  },
]);

export default router;
