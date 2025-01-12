import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChairPopular from "./components/ChairPopular/ChairPopular";
import Collection from "./components/collection/Collection";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import { Features } from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OfficePopularChoice from "./components/OfficePopular/OfficePopular";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import RoomPopular from "./components/RoomPopular/RoomPopular";
import Header from "./components/Navbar/Header";
import { useState } from "react";
import ProductDetails from "./components/Details/ProductDetails";
import CheckoutPage from "./components/Checkout/CheckoutPage";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <BrowserRouter>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar />
      <Routes>
 
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Features />
              <Collection />
              <OfficePopularChoice />
              <RoomPopular />
              <ChairPopular />
              <ProductPage />
              <ProductSlider />
              <CustomerReviews />
           
            </div>
          }
        />
      
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
