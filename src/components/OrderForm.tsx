import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface OrderDetails {
  name: string;
  email: string;
  phone: string;
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
    <div id="order" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Place Your Order</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Menu Package</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
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
            className="mt-6 w-full bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-700 transition-colors"
          >
            <Send className="w-5 h-5" />
            <span>Send via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}