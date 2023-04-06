import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";
import ErrorPage from "./Pages/Error/ErrorPage";
import Layout from "./Pages/Layout";
import Products from "./Pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
