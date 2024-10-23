import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface OrderDetails {
  name: string;
  phone: string;
  people: string;
  date: string;
  time: string;
  menu: string;
  special: string;
}

export default function OrderSection() {
  const [formData, setFormData] = useState<OrderDetails>({
    name: '',
    phone: '',
    people: '',
    date: '',
    time: '',
    menu: 'standard',
    special: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
*New Order Request*
Name: ${formData.name}
Phone: ${formData.phone}
Number of People: ${formData.people}
Date: ${formData.date}
Time: ${formData.time}
Menu Selection: ${formData.menu}
Special Requests: ${formData.special}
    `.trim();

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 bg-[#faf6f1]" id="order">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Make a Reservation</h2>
          <p className="text-gray-600 text-center mb-8">Book your table or place an order via WhatsApp</p>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513]"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513]"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of People</label>
                <input
                  type="number"
                  name="people"
                  min="1"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513]"
                  value={formData.people}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513]"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513]"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Menu Selection</label>
                <select
                  name="menu"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513]"
                  value={formData.menu}
                  onChange={handleChange}
                >
                  <option value="standard">Standard Menu</option>
                  <option value="special">Chef's Special</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="group">Group Menu</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
              <textarea
                name="special"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513]"
                value={formData.special}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-[#8B4513] text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#654321] transition-colors"
            >
              <Send className="w-5 h-5" />
              <span>Send via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}