
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gov-blue to-gov-blue-dark text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMmgydjFoLTJ2LTF6bS0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptMTYtMTBoMXYxaC0xdi0xem0tOCAwaDF2MWgtMXYtMXptNCAwaDF2MWgtMXYtMXptLTggMGgxdjFoLTF2LTF6bS00IDRoMXYxaC0xdi0xem0wLTRoMXYxaC0xVjEyem0yMCAwdjFoMXYxaC0xdjEyaDF2MWgtMXYxaC0xdjFoLTF2MWgtMXYxaC0xdjFoLTF2MWgtMXYxaC0xdjFoLTF2MWgtMXYxaC0xdjFoLTF2MUg5djFoLTF2MUg3djFINnYtMUg1di0xSDR2LTFIM3YtMUgydi0xSDF2LTFIMFYwaDF2MWgydjFoMXYxaDF2MWgydjFoMXYxaDF2MWgydjFoMXYxaDF2MWgydjFoMXYxaDF2MWgydjFoMXYxaDF2MWgydjFoMXYxaDF2MWgydjFoMXYxaDF2MWgydjFoMXYxSDE1di0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xaC0xdi0xSDR2LTFIM3YtMUgydi0xSDFWMmgxdjFoMXYxaDF2MWgxdjFoMXYxaDF2MWgxdjFoMXYxaDF2MWgxdjFoMXYxaDF2MWgxdjFoMXYxaDF2MWgxdjFoMXYxaDF2MWgxdjFoMXYxaDF2MWgxdi0xaDF2LTFoMXYtMWgxdi0xaDF2LTFoMXYtMWgxdi0xaDF2LTFoMXYtMWgxdi0xaDF2LTFoMXYtMWgxdi0xaDF2LTFoMXYtMWgxdi0xaDF2LTFoMXYtMWgxdi0xaDF2LTFaIi8+PC9nPjwvZz48L3N2Zz4=')]" />
      
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="p-1 bg-white bg-opacity-10 inline-block rounded-full mb-4">
              <span className="bg-white text-gov-blue px-4 py-1 rounded-full text-sm font-semibold">
                Empowering Citizens
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Discover Government Schemes <span className="text-gov-gold">You're Eligible For</span>
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-lg">
              SchemeSaathi connects you with the right government benefits and schemes based on your profile. Get personalized recommendations in minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gov-gold hover:bg-gov-gold-dark text-gov-blue-dark font-semibold px-6 py-6 text-lg rounded-md transition-colors flex items-center">
                Find Eligible Schemes <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-6 py-[calc(1.5rem-2px)] text-lg rounded-md font-medium transition-colors">
                Browse All Schemes
              </Button>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-gov-gold rounded-lg opacity-30 animate-pulse-slow"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-400 rounded-lg opacity-20 animate-pulse-slow"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gov-blue flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <h3 className="ml-3 text-gray-800 font-semibold">SchemeSaathi Finder</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-sm font-medium text-gray-600">Profile</p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div>
                        <span className="text-gray-500">Gender:</span>
                        <span className="ml-2 font-medium">Male</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Age:</span>
                        <span className="ml-2 font-medium">24 yrs</span>
                      </div>
                      <div>
                        <span className="text-gray-500">State:</span>
                        <span className="ml-2 font-medium">Karnataka</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Occupation:</span>
                        <span className="ml-2 font-medium">Student</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Eligible Schemes:</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="bg-green-50 p-2 rounded text-sm flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        PM Vidya Lakshmi Scheme
                      </li>
                      <li className="bg-green-50 p-2 rounded text-sm flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        National Scholarship Portal
                      </li>
                      <li className="bg-green-50 p-2 rounded text-sm flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Skill India Mission
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button size="sm" className="bg-gov-blue hover:bg-gov-blue-dark text-white px-4 py-1">View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
