import { createBrowserRouter, redirect } from "react-router-dom";
import { Menu } from "../views/Menu";
import { Layout } from "../components/Layout";
import { Category } from "../views/Category";
import {MenuForm} from '../views/MenuForm'
import { LoginPage } from "../views/LoginPage";
import { CategoryForm } from "../views/CategoryForm";
import { AdminTable } from "../views/AdminTable";
import { AdminForm } from "../views/AdminForm";
import { NotFound } from "../views/NotFound";
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => {
      if(localStorage.access_token){
        throw redirect('/')
      }
      return null
    }
  },
  {
    path:'*',
    element: <NotFound/>
  },
  {
    element: <Layout/>,
    loader: () => {
      if(!localStorage.access_token){
        throw redirect('/login')
      }
      return null
    },
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/admins",
        element: <AdminTable />,
      },
      {
        path: "/MenuFormAdd",
        element: <MenuForm/>
      },
      {
        path: "/MenuFormEdit/:id",
        element: <MenuForm/>
      },
      {
        path: "/CategoryFormAdd",
        element: <CategoryForm/>
      },
      {
        path: "/CategoryFormEdit/:id",
        element: <CategoryForm/>
      },
      {
        path: "/addAdmin",
        element: <AdminForm/>
      }
    ],
  },
]);

export default router;
