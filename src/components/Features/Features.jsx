import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Updated import for Swiper modules
import { FaShieldAlt, FaHeadset, FaCreditCard, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Features() {
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
  
    return (
      <div className="py-16 relative">
        <div className=" px-4">
    
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
    );
  }
  