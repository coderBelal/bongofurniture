import { FaStar, FaClock, FaShareAlt, FaArrowUp } from 'react-icons/fa';
 

export default function CustomerReviews() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
        <p className="text-muted-foreground mb-4">
          Pellentesque ante neque, faucibus et delito an pretium vestibulum del varius quam.
        </p>
    
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Review 1 */}    
        <div className="space-y-4">
          <div className="relative w-full overflow-hidden rounded-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-11%2018-44-20-GqtxxQHbRozFykh0wDJmBXsbNcPa3H.png"
              alt="Office desk setup"
             
              className="object-cover"
            />
          </div>
          <div className="flex gap-1">
            {Array(5).fill(null).map((_, i) => (
              <FaStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            They are very professional in maintaining quality and are committed to what they do.
          </p>
        </div>

        {/* Review 2 */}
        <div className="space-y-4">
          <div className="relative w-full overflow-hidden rounded-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-11%2018-44-20-GqtxxQHbRozFykh0wDJmBXsbNcPa3H.png"
              alt="Cafe interior"
            
              className="object-cover"
            />
          </div>
          <div className="flex gap-1">
            {Array(5).fill(null).map((_, i) => (
              <FaStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            The quality of everything in their store is very good. Their service is very nice. I am very happy with the things they have. You can take them.
          </p>
          <p className="font-medium">Jalish Mahmud</p>
        </div>

        {/* Review 3 */}
        <div className="space-y-4">
          <div className="relative w-full overflow-hidden rounded-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-11%2018-44-20-GqtxxQHbRozFykh0wDJmBXsbNcPa3H.png"
              alt="Modern cafe interior"
            
              className="object-cover"
            />
          </div>
          <div className="flex gap-1">
            {Array(5).fill(null).map((_, i) => (
              <FaStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
          Pramanik Furniture  was incredible! The quality, style, and durability of the furniture transformed my cafe into a cozy, stylish space. Highly recommend them for anyone needing top-notch furniture and service.
          </p>
          <p className="font-medium">Sojib</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
          <FaClock className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
          <FaShareAlt className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
          <FaArrowUp className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
