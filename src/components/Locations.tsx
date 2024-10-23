import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    name: "Downtown",
    address: "123 Main Street, City Center",
    phone: "(123) 456-7890",
    hours: "11am - 10pm",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Westside",
    address: "456 West Avenue, Shopping District",
    phone: "(123) 456-7891",
    hours: "11am - 11pm",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Eastside",
    address: "789 East Boulevard, Cultural Quarter",
    phone: "(123) 456-7892",
    hours: "11am - 10pm",
    image: "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Locations() {
  return (
    <section className="py-16 bg-white" id="locations">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Locations</h2>
        <p className="text-gray-600 text-center mb-12">Visit us at any of our restaurants</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-[#8B4513]" />
                    {location.address}
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-[#8B4513]" />
                    {location.phone}
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#8B4513]" />
                    {location.hours}
                  </p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center bg-[#8B4513] text-white px-6 py-2 rounded-lg hover:bg-[#654321] transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}