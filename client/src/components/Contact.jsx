import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock4 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending message...' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '4a809426-d605-469f-905a-ec0d44b8b18a',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully. Our team will contact you shortly.' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' });
      }

      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: 'Call', value: '+91 8767199833', sub: '' },
    { icon: Mail, label: 'Email', value: 'saimkabeer77@gmail.com', sub: '' },
    { icon: MapPin, label: 'Office', value: 'Zakir Colony Amravati', sub: '' },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="rounded-[2rem] overflow-hidden border border-white/40 bg-white/35 backdrop-blur-xl shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-[0.95fr_1.4fr]">
            <div className="bg-primary text-white p-8 lg:p-10 relative overflow-hidden">
              <div className="ambient-orb w-64 h-64 -top-16 -right-10 bg-cyan-300/35" />
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200 font-semibold">Contact CivicEdge</p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight">Let us engineer your next build with confidence</h2>
              <p className="mt-4 text-slate-200 leading-relaxed">
                Share your project scope, goals, and timeline. We will propose practical and build-ready engineering guidance.
              </p>

              <div className="mt-8 space-y-4 relative z-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl bg-white/10 border border-white/20 p-4 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-cyan-200 font-bold">{item.label}</p>
                        <p className="font-bold mt-1">{item.value}</p>
                        <p className="text-sm text-slate-200">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-4 flex items-center gap-3 relative z-10">
                <Clock4 size={18} className="text-cyan-200" />
                <p className="text-sm text-slate-100">Average response time: less than 24 business hours.</p>
              </div>
            </div>

            <div className="p-8 lg:p-10 bg-gradient-to-b from-white to-slate-50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  <Input label="Email Address" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" type="email" required />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" required />
                  <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-cyan-100 focus:border-accent"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-secondary transition-colors"
                >
                  Send Message
                  <Send size={16} />
                </motion.button>

                {status.message && (
                  <div
                    className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-100'
                        : status.type === 'error'
                        ? 'bg-red-50 text-red-700 border border-red-100'
                        : 'bg-blue-50 text-blue-700 border border-blue-100'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-cyan-100 focus:border-accent"
      />
    </div>
  );
}
