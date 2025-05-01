import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./page/ErrorPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import HomePage from "./page/HomePage";
import AdminPage from "./page/AdminPage";
import PLPPage from "./page/PLPPage";
import Products from "./page/Products";
import Category from "./page/Category";
import PDP from "./page/PDP";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/admin/7902ca62-e2ed-4044-96d8-1cd7dce26270",
        element: <AdminPage />,
      },
      {
        path: "/plp",
        element: <PLPPage />,
      },
      {
        path: "/products/34u8fuhre4uhjtrtrgh",
        element: <Products />,
      },
      {
        path: "/category/34u8fuhre4uhjtrtrgh3ewd2de",
        element: <Category />,
      },
      {
        path:"/pdp/:proID",
        element:<PDP />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);
