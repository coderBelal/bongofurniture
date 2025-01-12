import React, { useState } from "react";
import { FaBars, FaHeart, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({isOpen, setIsOpen}) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

const navigation = [
    { name: 'Home Furniture', href: '#' },
    { name: 'Office Furniture', href: '#' },
    { name: 'Industrial Furniture', href: '#' },
    { name: 'Restaurant Furniture', href: '#' },
    { name: 'All Chair', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Photo Gallery', href: '#' },
  ];

  
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Links for Large Devices */}
        <div className="flex items-center space-x-6">
          <img src="/pflogo.jpg" alt="BONGO" className="h-6" />
          <nav className="hidden md:flex space-x-3">
            <a href="#" className="text-gray-600 hover:text-black">
              HELP CENTER
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-black">
              CONTACT US
            </a> */}
            <a href="#" className="text-gray-600 hover:text-black">
              MEETING REQUEST
            </a>
          </nav>
        </div>

        {/* Search Bar for Large Devices */}
        <div className="hidden mx-12 md:flex items-center flex-1">
          <input
            type="text"
            placeholder="Search entire store here..."
            className="border rounded-full px-4 py-2 w-full text-sm"
          />
          <button className="text-gray-600 ml-2">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600">
            <FaUser />
          </button>
          <button className="text-gray-600">
            <FaHeart />
          </button>
          <button className="relative text-gray-600">
           <FaShoppingBag />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Hamburger Menu for Small Devices */}
         <div className="flex md:hidden">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-indigo-600"
                      aria-controls="mobile-menu"
                      aria-expanded={isOpen ? 'true' : 'false'}
                    >
                      <span className="sr-only">Open main menu</span>
                      {isOpen ? (
                        <FaTimes className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <FaBars className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </button>
                  </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-900 hover:text-indigo-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
