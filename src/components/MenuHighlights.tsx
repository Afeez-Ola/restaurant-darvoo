import React from 'react';

const highlights = [
  {
    name: "Jollof Rice Special",
    description: "West African classic rice dish cooked in rich tomato sauce with aromatic spices",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Ethiopian Platter",
    description: "Combination of injera bread with various meat and vegetable stews",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1580793141077-e8296adb3ba1?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Moroccan Tagine",
    description: "Slow-cooked aromatic stew with tender meat, vegetables, and exotic spices",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80&w=800"
  }
];

export default function MenuHighlights() {
  return (
    <section className="py-16 bg-white" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Popular Dishes</h2>
        <p className="text-gray-600 text-center mb-12">Discover our most beloved African delicacies</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((dish) => (
            <div key={dish.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-64 mb-4">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-600 mb-2">{dish.description}</p>
              <p className="text-[#8B4513] font-bold">${dish.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#order" 
            className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full hover:bg-[#654321] transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}