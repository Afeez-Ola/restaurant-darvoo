import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface OrderDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  guests: string;
  menu: string;
  message: string;
}

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderDetails>({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    guests: '',
    menu: 'standard',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
*New Catering Order*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Guests: ${formData.guests}
Menu: ${formData.menu}
Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div id="order" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">Place Your Order</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Event Date</label>
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Number of Guests</label>
              <input
                type="number"
                name="guests"
                required
                min="1"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                value={formData.guests}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Menu Package</label>
              <select
                name="menu"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                value={formData.menu}
                onChange={handleChange}
              >
                <option value="standard">Standard Package</option>
                <option value="premium">Premium Package</option>
                <option value="luxury">Luxury Package</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Special Requirements</label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full px-6 py-3 mt-6 space-x-2 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700"
          >
            <Send className="w-5 h-5" />
            <span>Send via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}