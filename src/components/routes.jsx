import Root from "./Root";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Products from "./Products";
import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
