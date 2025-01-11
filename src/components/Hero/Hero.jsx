export function Hero() {
    return (
      <div className="relative text-white py-24 min-h-[80vh] bg-gradient-to-b from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/gjy897nM/Home-Furniture2.jpg"
            alt="Modern Stylish Sofa"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative container mx-auto mt-72 px-12 flex flex-col items-start">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Modern Stylish Sofa
            </h1>
            <p className="text-lg mb-6">
              Discover the perfect blend of comfort and style for your living space.
            </p>
            <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  