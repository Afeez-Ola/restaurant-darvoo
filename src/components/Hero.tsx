import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Experience Authentic African Cuisine</h1>
        <p className="text-xl md:text-2xl mb-8">Journey through Africa's rich culinary heritage with our expertly crafted dishes</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#order"
            className="bg-[#8B4513] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#654321] transition-colors"
          >
            Order Now
          </a>
          <a 
            href="#menu"
            className="bg-white text-[#8B4513] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
}