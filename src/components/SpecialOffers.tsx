import React from 'react';
import { Clock, Users, Percent } from 'lucide-react';

export default function SpecialOffers() {
  return (
    <section className="py-16 bg-[#8B4513]" id="specials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Special Offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-[#8B4513]" />
            <h3 className="text-xl font-bold mb-2">Happy Hour</h3>
            <p className="text-gray-600">50% off appetizers<br />Monday-Friday, 3-6pm</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-[#8B4513]" />
            <h3 className="text-xl font-bold mb-2">Family Feast</h3>
            <p className="text-gray-600">Feed 4-6 people<br />Starting at $89.99</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center">
            <Percent className="w-12 h-12 mx-auto mb-4 text-[#8B4513]" />
            <h3 className="text-xl font-bold mb-2">Weekly Special</h3>
            <p className="text-gray-600">20% off all orders<br />Every Tuesday</p>
          </div>
        </div>
      </div>
    </section>
  );
}