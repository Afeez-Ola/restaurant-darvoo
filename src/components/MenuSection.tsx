import React from 'react';
import { Utensils } from 'lucide-react';

const packages = [
  {
    name: 'Standard Package',
    price: '$25',
    features: [
      'Selection of 3 appetizers',
      '2 main course options',
      '2 side dishes',
      'Basic dessert selection',
      'Soft drinks included'
    ]
  },
  {
    name: 'Premium Package',
    price: '$40',
    features: [
      'Selection of 5 appetizers',
      '3 main course options',
      '3 side dishes',
      'Premium dessert selection',
      'Soft drinks & juices'
    ]
  },
  {
    name: 'Luxury Package',
    price: '$60',
    features: [
      'Selection of 7 appetizers',
      '4 main course options',
      '4 side dishes',
      'Luxury dessert selection',
      'Full beverage service'
    ]
  }
];

export default function MenuSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Utensils className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Menu Packages</h2>
          <p className="text-gray-600">Choose the perfect package for your event</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-orange-600 mb-6">{pkg.price}<span className="text-sm text-gray-600">/person</span></p>
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#order"
                className="mt-6 block text-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}