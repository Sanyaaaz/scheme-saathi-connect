
import React from 'react';
import { UserCheck, Search, CheckSquare, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    icon: <UserCheck className="h-8 w-8 text-gov-blue" />,
    title: "Create Your Profile",
    description: "Enter basic details like age, gender, state, and occupation to help us find relevant schemes."
  },
  {
    id: 2,
    icon: <Search className="h-8 w-8 text-gov-blue" />,
    title: "Get Matched With Schemes",
    description: "Our intelligent system identifies government schemes you may be eligible for based on your profile."
  },
  {
    id: 3,
    icon: <CheckSquare className="h-8 w-8 text-gov-blue" />,
    title: "Apply With Confidence",
    description: "Access detailed information, eligibility criteria, and direct links to official application portals."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How SchemeSaathi Works</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Find government schemes you're eligible for in just three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              {step.id < steps.length && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0 -ml-4">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                </div>
              )}
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm relative z-10 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="default" className="official-btn">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
