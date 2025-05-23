import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/home";
import { ErrorPage } from "../components/error-page";
import { StoreApp } from "../app-store";
import { PageCart } from "../components/cart";
import { Authorization } from "../components/auth/authorization";
import { Registration } from "../components/auth/registration";
import { ProductDetails } from "../components/product-details";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <StoreApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element: <PageCart />,
        },
        {
          path: "details/:id",
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "/authorization",
      element: <Authorization />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/registration",
      element: <Registration />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: "/store-app",
  },
);
