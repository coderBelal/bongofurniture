import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../components/Details/ProductDetails";
import CheckoutPage from "../components/Checkout/CheckoutPage";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import HelpCenter from "../Page/HelpCenter";
import ContactPage from "../Page/ContactPage";
import Login from "../Page/Login";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/productdetails", element: <ProductDetails /> },
      { path: "/checkout", element: <CheckoutPage /> },
      {path:"/page/helpcenter", element:<HelpCenter/> },
      {path:"/page/contactus", element:<ContactPage/>},
      {path:"/page/login", element:<Login/> }
    ],
  },
]);

export default router;
