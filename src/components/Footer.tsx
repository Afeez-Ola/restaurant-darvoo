import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AfriCuisine</h3>
            <p className="text-gray-300">Experience the authentic taste of Africa in every bite.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                (123) 456-7890
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@africuisine.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                123 Main Street, City
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-3">
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Mon-Thu: 11am-10pm
              </p>
              <p className="ml-7">Fri-Sat: 11am-11pm</p>
              <p className="ml-7">Sun: 12pm-9pm</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#8B4513] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#8B4513] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#8B4513] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} AfriCuisine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}