import React, { useState } from "react";
 
const RoomPopular = () => {
    const officeProducts = [
        {
          id: 1,
          title: "Boss Table",
          image: "https://i.postimg.cc/Hx7zPHXX/Bed-785x.jpg",
          gridClass: "col-span-2 row-span-2"
        },
        {
          id: 2,
          title: "CEO Desk",
          image: "https://i.postimg.cc/Hx7zPHXX/Bed-785x.jpg",
        },
        {
          id: 3,
          title: "WorkStation",
          image: "https://i.postimg.cc/Hx7zPHXX/Bed-785x.jpg",
        },
        {
          id: 4,
          title: "Executive Desk",
          image: "https://i.postimg.cc/Hx7zPHXX/Bed-785x.jpg",
        },
        {
          id: 5,
          title: "Conference Table",
          image: "https://i.postimg.cc/Hx7zPHXX/Bed-785x.jpg",
        }
      ];
 const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className="px-4 py-8">
    <h1 className="text-3xl font-bold text-center mb-8">Room Popular Choice</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {officeProducts.map((product) => (
        <div
          key={product.id}
          className={`relative rounded-lg overflow-hidden group ${
            product.id === 1 ? 'md:col-span-2 md:row-span-2' : ''
          }`}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative h-full">
            {/* Image with hover zoom effect */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Dark overlay with title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300">
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {product.title}
              </h3>
            </div>
  
            {/* Details on hover */}
          
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default RoomPopular;
