// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import { Heart, ShoppingCart, ChevronRight, Star } from 'lucide-react';

// const ProductPage = () => {
//   const [selectedCombo, setSelectedCombo] = useState('without');
//   const [selectedImage, setSelectedImage] = useState(0);

//   const images = Array(3).fill('/api/placeholder/800/600');
  
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
//       <Card className="max-w-7xl mx-auto overflow-hidden">
//         <CardContent className="p-6">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Left Section: Image Gallery */}
//             <div className="lg:w-1/2 space-y-4">
//               <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
//                 <img
//                   src={images[selectedImage]}
//                   alt="Product view"
//                   className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                 />
//                 <Badge className="absolute top-4 left-4 bg-red-500">
//                   New Arrival
//                 </Badge>
//               </div>
              
//               <div className="grid grid-cols-3 gap-4">
//                 {images.map((src, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedImage(idx)}
//                     className={`relative rounded-lg overflow-hidden aspect-square ${
//                       selectedImage === idx ? 'ring-2 ring-blue-500' : ''
//                     }`}
//                   >
//                     <img src={src} alt={`View ${idx + 1}`} className="object-cover w-full h-full" />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Right Section: Product Details */}
//             <div className="lg:w-1/2 space-y-6">
//               <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <Badge variant="secondary">Premium</Badge>
//                   <Badge variant="secondary">In Stock</Badge>
//                 </div>
//                 <h1 className="text-3xl font-bold text-gray-900">Royal Luxury Boss Table - BFT861</h1>
//                 <div className="flex items-center gap-2 mt-2">
//                   {Array(5).fill(null).map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                   <span className="text-sm text-gray-500">(128 reviews)</span>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-3xl font-bold text-gray-900">৳62,000.00</span>
//                   <span className="text-lg text-gray-500 line-through">৳75,000.00</span>
//                   <Badge variant="destructive" className="ml-2">Save 17%</Badge>
//                 </div>
//                 <p className="text-sm text-gray-500">Shipping calculated at checkout</p>
//               </div>

//               <Separator />

//               <div className="space-y-4">
//                 <h3 className="font-semibold text-gray-900">Product Configuration</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   <Button
//                     variant={selectedCombo === 'without' ? 'default' : 'outline'}
//                     onClick={() => setSelectedCombo('without')}
//                     className="w-full"
//                   >
//                     Without Cabinet
//                   </Button>
//                   <Button
//                     variant={selectedCombo === 'with' ? 'default' : 'outline'}
//                     onClick={() => setSelectedCombo('with')}
//                     className="w-full"
//                   >
//                     With Cabinet
//                   </Button>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <p className="text-gray-700">
//                   Royal Luxury Boss Table Application: Boss Table, Chairman Table, MD Table, Director Table, CEO Desk. 
//                   Premium materials and expert craftsmanship ensure lasting quality.
//                 </p>
                
//                 <div className="flex items-center gap-2 text-sm text-red-500">
//                   <span className="animate-pulse">🔥</span>
//                   <span>5 sold in last 18 hours</span>
//                 </div>
//               </div>

//               <Separator />

//               <div className="space-y-4">
//                 <Button className="w-full h-12 text-lg" size="lg">
//                   <ShoppingCart className="w-5 h-5 mr-2" />
//                   Add to Cart
//                 </Button>
                
//                 <Button variant="secondary" className="w-full h-12 text-lg" size="lg">
//                   Buy Now
//                   <ChevronRight className="w-5 h-5 ml-2" />
//                 </Button>

//                 <Button variant="outline" className="w-full">
//                   <Heart className="w-5 h-5 mr-2" />
//                   Add to Wishlist
//                 </Button>
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-500">
//                 <input type="checkbox" id="terms" className="rounded border-gray-300" />
//                 <label htmlFor="terms">
//                   I agree with the <button className="text-blue-500 hover:underline">Terms & Conditions</button>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default ProductPage;
import React, { useState } from 'react';

const ProductPage = () => {
  const [selectedCombo, setSelectedCombo] = useState('without');
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = Array(3).fill('/api/placeholder/800/600');

  return (
    <div className="min-h-screen bg-gray-300 p-6">
      <div className="   rounded-xl   overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section: Image Gallery */}
            <div className="lg:w-1/2 space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={images[selectedImage]}
                  alt="Product view"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                  New Arrival
                </span>
              </div>
              
          
            </div>

            {/* Right Section: Product Details */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-full">Premium</span>
                  <span className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-full">In Stock</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Royal Luxury Boss Table - BFT861</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {Array(5).fill(null).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(128 reviews)</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">৳62,000.00</span>
                  <span className="text-lg text-gray-500 line-through">৳75,000.00</span>
                  <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">Save 17%</span>
                </div>
                <p className="text-sm text-gray-500">Shipping calculated at checkout</p>
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Product Configuration</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedCombo('without')}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      selectedCombo === 'without'
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Without Cabinet
                  </button>
                  <button
                    onClick={() => setSelectedCombo('with')}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      selectedCombo === 'with'
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    With Cabinet
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Royal Luxury Boss Table Application: Boss Table, Chairman Table, MD Table, Director Table, CEO Desk. 
                  Premium materials and expert craftsmanship ensure lasting quality.
                </p>
                
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <span className="animate-pulse">🔥</span>
                  <span>5 sold in last 18 hours</span>
                </div>
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              <div className="space-y-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white h-12 text-lg rounded-lg transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
                
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white h-12 text-lg rounded-lg transition-colors flex items-center justify-center">
                  Buy Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Add to Wishlist
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <input
                  type="checkbox"
                  id="terms"
                  className="rounded border-gray-300"
                />
                <label htmlFor="terms">
                  I agree with the{" "}
                  <button className="text-blue-500 hover:underline">
                    Terms & Conditions
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;