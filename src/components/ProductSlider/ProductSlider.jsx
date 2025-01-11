import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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

const ProductSlider = () => {
  return (
    <div className="px-4 py-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">New Products</h2>
      <a href="#" className="text-blue-600 hover:underline">View All</a>
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
      className="relative group"
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
  
  );
};

export default ProductSlider;