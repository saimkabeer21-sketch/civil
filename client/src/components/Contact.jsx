import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending message...' });
    
    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully! Check server console.');
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or need professional advice? Reach out to us today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mr-4 shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mr-4 shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Email</h4>
                <p className="text-gray-600">contact@civicedge.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mr-4 shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Location</h4>
                <p className="text-gray-600">123 Engineering Way, Structure City, SC 90210</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Structural Design Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
              {status.message && (
                <p className={`text-center mt-4 ${status.type === 'success' ? 'text-green-600' : status.type === 'error' ? 'text-red-600' : 'text-blue-600'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
