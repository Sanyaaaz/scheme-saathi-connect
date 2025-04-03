
import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gov-blue flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h1 className="text-xl font-bold text-gov-blue">SchemeSaathi</h1>
            </Link>
            
            {/* Navigation - desktop */}
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gov-blue font-medium">Home</Link>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gov-blue font-medium">
                  Schemes <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link to="/schemes/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Education</Link>
                    <Link to="/schemes/health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Health</Link>
                    <Link to="/schemes/agriculture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Agriculture</Link>
                    <Link to="/schemes/employment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Employment</Link>
                  </div>
                </div>
              </div>
              <Link to="/news" className="text-gray-700 hover:text-gov-blue font-medium">News</Link>
              <Link to="/resources" className="text-gray-700 hover:text-gov-blue font-medium">Resources</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gov-blue font-medium">Contact</Link>
            </nav>
          </div>
          
          {/* Search and mobile menu buttons */}
          <div className="flex items-center">
            <button className="p-2 text-gray-600 hover:text-gov-blue">
              <Search className="h-5 w-5" />
            </button>
            <Button variant="outline" className="ml-4 hidden md:block official-btn">
              Eligibility Checker
            </Button>
            
            {/* Mobile menu button */}
            <button 
              className="ml-4 md:hidden p-2 rounded-md text-gray-600 hover:text-gov-blue"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gov-blue rounded-md">
              Home
            </Link>
            <div className="block px-3 py-2 text-gray-700">
              Schemes
              <div className="ml-4 mt-2 space-y-1">
                <Link to="/schemes/education" className="block py-1 text-gray-600 hover:text-gov-blue">
                  Education
                </Link>
                <Link to="/schemes/health" className="block py-1 text-gray-600 hover:text-gov-blue">
                  Health
                </Link>
                <Link to="/schemes/agriculture" className="block py-1 text-gray-600 hover:text-gov-blue">
                  Agriculture
                </Link>
                <Link to="/schemes/employment" className="block py-1 text-gray-600 hover:text-gov-blue">
                  Employment
                </Link>
              </div>
            </div>
            <Link to="/news" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gov-blue rounded-md">
              News
            </Link>
            <Link to="/resources" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gov-blue rounded-md">
              Resources
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gov-blue rounded-md">
              Contact
            </Link>
            <Button variant="default" className="w-full mt-3 official-btn">
              Eligibility Checker
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
