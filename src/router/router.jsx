import { createBrowserRouter } from "react-router-dom";
// import Home from "./components/Home/Home";
import ProductDetails from "../components/Details/ProductDetails";
import CheckoutPage from "../components/Checkout/CheckoutPage";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/productdetails", element: <ProductDetails /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
]);

export default router;
