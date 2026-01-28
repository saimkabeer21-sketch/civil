import React from 'react';
import { HardHat, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <HardHat className="h-8 w-8 text-accent" />
              <span className="ml-2 text-2xl font-bold">CivicEdge</span>
            </div>
            <p className="text-gray-300 max-w-sm mb-6">
              Leading the way in civil engineering excellence. From structural design to site supervision, we build the foundations of a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-accent transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-300">Structural Design</li>
              <li className="text-gray-300">Construction Consultancy</li>
              <li className="text-gray-300">Planning & Estimation</li>
              <li className="text-gray-300">Site Supervision</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} CivicEdge Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
