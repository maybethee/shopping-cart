import Root from "./Root";
import App from "./App";
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
        element: <App />,
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
