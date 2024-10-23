import React, { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#"><h1 className="text-2xl font-bold text-[#8B4513]">DarVoo Catering</h1></a>
          </div>
          
          <nav className="hidden space-x-8 md:flex">
            <a href="#menu" className="text-gray-700 hover:text-[#8B4513]">Menu</a>
            <a href="#specials" className="text-gray-700 hover:text-[#8B4513]">Specials</a>
            <a href="#order" className="text-gray-700 hover:text-[#8B4513]">Order Now</a>
            <a href="#locations" className="text-gray-700 hover:text-[#8B4513]">Locations</a>
          </nav>

          <div className="items-center hidden space-x-4 md:flex">
            <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-[#8B4513]">
              <Phone className="w-5 h-5 mr-2" />
              <span>+48 517071489</span>
            </a>
            <button className="bg-[#8B4513] text-white px-4 py-2 rounded-full hover:bg-[#654321]">
              Order Online
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-white border-t md:hidden">
          <div className="px-4 py-2 space-y-3">
            <a href="#menu" className="block py-2 text-gray-700">Menu</a>
            <a href="#specials" className="block py-2 text-gray-700">Specials</a>
            <a href="#order" className="block py-2 text-gray-700">Order Now</a>
            <a href="#locations" className="block py-2 text-gray-700">Locations</a>
            <button className="w-full bg-[#8B4513] text-white px-4 py-2 rounded-full">
              Order Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
}