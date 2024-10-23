import React from 'react';
import { ChefHat, Users, Clock } from 'lucide-react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  minPeople: number;
  preparationTime: string;
  image: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Mediterranean Feast",
    description: "A delightful spread of hummus, falafel, grilled vegetables, and Mediterranean specialties",
    price: 25,
    minPeople: 15,
    preparationTime: "24 hours",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Asian Fusion Experience",
    description: "Sushi rolls, dim sum, and Asian-inspired appetizers perfect for any occasion",
    price: 30,
    minPeople: 20,
    preparationTime: "48 hours",
    image: "https://images.unsplash.com/photo-1547620936-64121c398e54?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Premium BBQ Package",
    description: "Slow-cooked meats, artisanal sides, and homemade sauces for the perfect BBQ",
    price: 35,
    minPeople: 25,
    preparationTime: "48 hours",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Menu() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="menu">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Catering Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 w-full overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Min {item.minPeople} people</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">{item.preparationTime}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${item.price}/person</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}