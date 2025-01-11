import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTwitter } from 'react-icons/fa';
 
export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold italic mb-4">
            Discover The Latest Furniture Trends & Exclusive Deals – Stay Updated!
          </h2>
          <div className="flex max-w-xl mx-auto gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="text-gray-600 mr-4">Pay With</span>
            {/* Replace with actual payment method logos */}
            {Array(15).fill(null).map((_, i) => (
              <div key={i} className="w-16 h-10 bg-white rounded-md shadow-sm flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt={`Payment method ${i + 1}`}
                  width={48}
                  height={30}
                />
              </div>
            ))}
            <div className="flex items-center">
              <img
                src="/placeholder.svg"
                alt="SSL Commerce"
                width={100}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t">
          {/* Company Info */}
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-11%2018-48-12-9RgShHV60czeidnOhDOMOOeyl9ubR7.png"
              alt="Bongo Furniture"
              width={200}
              height={80}
              className="mb-4"
            />
            <p className="text-sm mb-2">F7 (Lift-6), Tower71, ECB Chattar, Matikata Rd Dhaka-1206</p>
            <p className="text-sm mb-2">
              Call us: <p href="tel:+8801710724266" className="hover:underline">+880 1710 - 724266</p>
            </p>
            <p className="text-sm mb-4">
              Email: <p href="mailto:info@bongofurniture.com" className="hover:underline">info@bongofurniture.com</p>
            </p>
            <div className="flex gap-4">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-pink-600" />
              <FaPinterestP className="w-5 h-5 cursor-pointer hover:text-red-600" />
              <FaYoutube className="w-5 h-5 cursor-pointer hover:text-red-600" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            </div>
          </div>

          {/* The Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">The Company</h3>
            <ul className="space-y-2">
              {[
                'About Bongo Furniture',
                'License & Certificates',
                'Privacy Policy',
                'Return & Refund Policy',
                'Shipping Policy',
                'Terms Of Service'
              ].map((item) => (
                <li key={item}>
                  <p href="#" className="text-sm hover:underline">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help? */}
          <div>
            <h3 className="font-bold text-lg mb-4">Need Help?</h3>
            <ul className="space-y-2">
              {[
                'Contact Us',
                'Office Location',
                'Factory Location'
              ].map((item) => (
                <li key={item}>
                  <p href="#" className="text-sm hover:underline">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              {[
                'Available Colors List',
                'Office Furniture Catalogue',
                'Home Furniture Catalogue',
                'Academic Furniture Catalogue',
                'Care & Maintenance',
                'Customization',
                'FAQs'
              ].map((item) => (
                <li key={item}>
                  <p href="#" className="text-sm hover:underline">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-white py-4 text-center text-sm">
        <p>© 2024 Bongo Furniture. All Rights Reserved</p>
      </div>
    </footer>
  );
}
