import React, { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#8B4513]">AfriCuisine</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-[#8B4513]">Menu</a>
            <a href="#specials" className="text-gray-700 hover:text-[#8B4513]">Specials</a>
            <a href="#order" className="text-gray-700 hover:text-[#8B4513]">Order Now</a>
            <a href="#locations" className="text-gray-700 hover:text-[#8B4513]">Locations</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-[#8B4513]">
              <Phone className="w-5 h-5 mr-2" />
              <span>(123) 456-7890</span>
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
        <div className="md:hidden bg-white border-t">
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