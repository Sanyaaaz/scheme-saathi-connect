
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gov-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                <span className="text-gov-blue font-bold">S</span>
              </div>
              SchemeSaathi
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering citizens with accessible information about government schemes and benefits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gov-gold">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gov-gold">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gov-gold">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/schemes" className="text-gray-300 hover:text-white">All Schemes</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white">Latest News</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-white">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Government Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Government Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">National Portal of India</a></li>
              <li><a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">MyGov</a></li>
              <li><a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Digital India</a></li>
              <li><a href="https://www.pmindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">PM India</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gov-gold" />
                <span className="text-gray-300">contact@schemesaathi.gov.in</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gov-gold" />
                <span className="text-gray-300">+91 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gov-gold" />
                <span className="text-gray-300">Ministry of Electronics & IT, Electronics Niketan, New Delhi</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© {new Date().getFullYear()} SchemeSaathi. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-white text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
