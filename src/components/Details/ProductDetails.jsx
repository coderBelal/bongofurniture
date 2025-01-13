import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Share2,
  Clock,
  ArrowUp,
  Heart,
  MessagesSquare,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; 
import { FaShieldAlt, FaHeadset, FaCreditCard, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ScrollToTop from "../../hooks/ScrollToTop";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const price = 13000.0;

  const specifications = {
    dimensions: {
      length: '27"',
      depth: '16"',
      height: '35"',
    },
    materials: {
      body: "Made of water-resistant, strong laminated board.",
      boardThickness: "16mm thick board.",
      boardEdging: "1mm thick PVC edging.",
      drawerFeature: "Made of the best quality SS channel.",
      lock: "No lock is attached.",
      stopper: "Yes, PVC stopper attached.",
    },
  };
    const features = [
      {
        icon: <FaShieldAlt className="text-5xl text-gray-700 mb-4" />,
        title: "Returns & Warranty",
        description:
          "Buy with confidence! Our products come with a warranty and easy return policy.",
      },
      {
        icon: <FaHeadset className="text-5xl text-gray-700 mb-4" />,
        title: "Customer Support",
        description:
          "Get help anytime! Our friendly customer support team is here for you.",
      },
      {
        icon: <FaCreditCard className="text-5xl text-gray-700 mb-4" />,
        title: "EMI Available",
        description:
          "Buy now, pay later! Easy monthly installments for up to 12 months on your credit card.",
      },
    ];
    const products = [
        {
          id: 1,
          name: 'Alexandria Cloth Organizer - BFC401',
          price: 13500.00,
          image: 'https://i.postimg.cc/tgmyNdN7/1-8957332a-f60c-4025-afed-89c20fa3ef92-1170x.webp',
          isNew: true,
        },
        {
          id: 2,
          name: 'Tudor Wardrobe - BFC403',
          price: 14400.00,
          image: 'https://i.postimg.cc/tgmyNdN7/1-8957332a-f60c-4025-afed-89c20fa3ef92-1170x.webp',
          isNew: true,
        },
        {
          id: 3,
          name: 'Florentine Wardrobe - BFC402',
          price: 16500.00,
          originalPrice: 17500.00,
          image: 'https://i.postimg.cc/tgmyNdN7/1-8957332a-f60c-4025-afed-89c20fa3ef92-1170x.webp',
          isNew: true,
          discount: '-6%',
        },
        {
          id: 4,
          name: 'CPU Cruiser - BFA301',
          price: 899.00,
          image: 'https://i.postimg.cc/tgmyNdN7/1-8957332a-f60c-4025-afed-89c20fa3ef92-1170x.webp',
          isNew: true,
        },
        {
          id: 5,
          name: 'Calmness Study Table - BFT012',
          price: 9000.00,
          image: 'https://i.postimg.cc/tgmyNdN7/1-8957332a-f60c-4025-afed-89c20fa3ef92-1170x.webp',
          isNew: true,
        },
        // Add more products to reach 15 total
      ].concat(Array(10).fill().map((_, i) => ({
        id: i + 6,
        name: `Product ${i + 6}`,
        price: 9999.00,
        image: 'https://i.postimg.cc/tgmyNdN7/1-8957332a-f60c-4025-afed-89c20fa3ef92-1170x.webp',
        isNew: true,
      })));
      
  return (
    <ScrollToTop>
    <div className="  p-4 bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Product Image */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/KvWGy258/5-6ab6f241-aa17-48de-a78b-f3f80aac9c59.jpg"
            alt="Victorian Chest of Drawer"
            className="w-full rounded-lg"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-white rounded-full shadow-md">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md">
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

  
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Victorian Chest Of Drawer - BFC405
            </h1>
            <p className="text-gray-600">SKU: BFC405</p>
            <p className="text-gray-600">Product type: Chest of Drawers</p>
            <p className="text-2xl font-bold mt-4">Tk {price.toLocaleString()}</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border-r hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border-l hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => setWishlist(!wishlist)}
            className={`flex items-center gap-2 text-sm ${
              wishlist ? "text-red-500" : "text-gray-600"
            }`}
          >
            <Heart className="w-5 h-5" />
            {wishlist ? "Added to Wishlist" : "Add to Wishlist"}
          </button>

          {/* Terms and Conditions */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree with <span className="text-teal-500 underline">Terms & Conditions</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              className={`w-full py-3 rounded-md text-white ${
                agreed ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!agreed}
            >
              Add To Cart
            </button>
            <button
              className={`w-full border border-black py-3 rounded-md ${
                agreed
                  ? "hover:bg-gray-50"
                  : "bg-gray-100 cursor-not-allowed text-gray-500"
              }`}
              disabled={!agreed}
            >
              Buy It Now
            </button>
          </div>

          {/* Additional Features */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <MessagesSquare className="w-4 h-4" />
            <span>193 customers are viewing this product</span>
          </div>

          {/* Shipping Information */}
          <div className="border-t pt-4">
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Shipping Time</span>
            </div>
            <p className="text-sm text-gray-600">
              Standard delivery time is between 3 to 10 working days for regular
              orders depending on stock availability and shipping location.
            </p>
          </div>

          {/* Description Section */}
          <div className="border-t pt-4">
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="flex justify-between items-center w-full py-2"
            >
              <span className="font-medium">Description</span>
              {showDescription ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {showDescription && (
              <div className="mt-4">
                      <h1 className="text-2xl font-bold mb-2">
              Victorian Chest Of Drawer - BFC405
            </h1>
                <p>
                  Victorian Chest of Drawer - Perfect for organizing your
                  wardrobe, cloths, and more. Designed to add elegance to your
                  space while being functional.
                </p>
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div className="border-t pt-4">
            <button
              onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
              className="flex justify-between items-center w-full py-2"
            >
              <span className="font-medium">Additional Information</span>
              {showAdditionalInfo ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {showAdditionalInfo && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Dimensions:</h3>
                    <p>Length - {specifications.dimensions.length}</p>
                    <p>Depth - {specifications.dimensions.depth}</p>
                    <p>Height - {specifications.dimensions.height}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Materials:</h3>
                    {Object.entries(specifications.materials).map(([key, value]) => (
                      <p key={key}>{value}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="py-16   relative">
        <div className=" px-4">
        <h2 className="text-3xl text-center font-bold"> Why Us?</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation]} // Correctly use the Navigation module
            className="mySwiper"
          >  
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="flex bg-white flex-col items-center justify-center rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300 hover:bg-gray-50">
                  {feature.icon}
                  <h3 className="text-lg font-bold text-gray-800 mb-4 mt-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-8 transform -translate-y-1/2 text-gray-700 text-2xl cursor-pointer z-10">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-700 text-2xl cursor-pointer z-10">
            <FaArrowRight />
          </div>
        </div>
      </div>
          <div className="px-4 py-8">
          <h2 className="text-3xl text-center font-bold">Related Product</h2>
          <div className="flex justify-between   items-center mb-6">
         
  
          </div>
        
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="relative "
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md group">
                  <div className="relative">
                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
        
                    {/* Badges for New and Discount */}
                    <div className="absolute top-2 left-2 flex gap-2">
                      {product.isNew && (
                        <span className="bg-white px-2 py-1 text-xs rounded">New</span>
                      )}
                      {product.discount && (
                        <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                          {product.discount}
                        </span>
                      )}
                    </div>
        
                    {/* Interactive Buttons */}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
        
                    {/* Quick Add Button */}
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      QUICK ADD
                    </div>
                  </div>
        
                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold">
                        Tk {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          Tk {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </ScrollToTop>
  );
};

export default ProductDetails;
