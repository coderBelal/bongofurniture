export function Hero() {
  return (
    <div className="relative text-white mb-10 py-10 md:py-0">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://i.postimg.cc/gjy897nM/Home-Furniture2.jpg"
          alt="Modern Stylish Sofa"
          className="object-cover w-full h-[300px] md:h-[450px]"
        />
        <div className="absolute inset-0 py-10 h-[300px] md:h-[450px] bg-gradient-to-r from-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full text-left">
        <div className="max-w-3xl mt-0 md:mt-32 mb-5">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide">
            Modern Stylish Sofa
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-200">
            Discover the perfect blend of comfort and style for your living space. Crafted with care, designed for elegance.
          </p>
          <button className="bg-teal-400 hover:text-teal-400 hover:bg-teal-50 text-white text-sm md:text-base font-semibold py-2.5 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
