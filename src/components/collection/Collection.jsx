import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

const collections = [
  {
    id: 1,
    title: "Home Furniture",
    image: "https://i.postimg.cc/wjFvKpFy/Home-Furniture-Collection-570x.jpg",
  },
  {
    id: 2,
    title: "Office Furniture",
    image: "https://i.postimg.cc/wjFvKpFy/Home-Furniture-Collection-570x.jpg",
  },
  {
    id: 3,
    title: "Restaurant Furniture",
    image: "https://i.postimg.cc/wjFvKpFy/Home-Furniture-Collection-570x.jpg",
  },
  {
    id: 4,
    title: "Industrial Furniture",
    image: "https://i.postimg.cc/wjFvKpFy/Home-Furniture-Collection-570x.jpg",
  }
];

const Collection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-8">Collections</h1>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {collections.map((collection) => (
        <div
          key={collection.id}
          className="relative rounded-lg overflow-hidden group"
          onMouseEnter={() => setHoveredId(collection.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Image container with hover effect */}
          <div className="aspect-w-4 aspect-h-3 relative transition-transform group-hover:scale-105 group-hover:opacity-90">
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover transform transition-transform duration-300"
            />
            
            {/* Black overlay with opacity on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
  
            {/* Overlay with title */}
            <div className="absolute inset-0 flex items-end">
              <h3 className="text-white text-xl font-semibold p-4">
                {collection.title}
              </h3>
            </div>
  
            {/* Plus button that appears on hover */}
            {hoveredId === collection.id && (
              <div className="absolute inset-0 flex justify-center items-center">
                <button className="bg-black rounded-full p-4 shadow-lg">
                  <BiPlus className="w-8 h-8 text-gray-800" />
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Collection;
