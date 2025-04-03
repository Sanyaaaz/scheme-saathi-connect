
import React from 'react';
import { Calendar, ChevronRight, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: "Government Expands PM Kisan Scheme to Cover More Farmers",
    excerpt: "The Ministry of Agriculture has announced an expansion of the PM Kisan Scheme to include more categories of farmers, benefiting an additional 3 million families.",
    date: "2025-03-28",
    readTime: "4 min read",
    category: "Agriculture",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "New Education Scholarship Announced for Girl Students",
    excerpt: "The Ministry of Education has launched a new scholarship program aimed at supporting girl students pursuing higher education in STEM fields.",
    date: "2025-03-25",
    readTime: "3 min read",
    category: "Education",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Health Insurance Coverage Increased Under Ayushman Bharat",
    excerpt: "The government has increased the coverage amount under the Ayushman Bharat health insurance scheme from ₹5 lakhs to ₹7 lakhs per family per year.",
    date: "2025-03-21",
    readTime: "5 min read",
    category: "Healthcare",
    image: "/placeholder.svg"
  }
];

export default function LatestNews() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Latest News & Updates</h2>
          <Button variant="outline" className="outlined-btn flex items-center" asChild>
            <Link to="/news">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-3 left-3 bg-gov-blue text-white text-xs px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                <Button variant="link" className="p-0 text-gov-blue hover:text-gov-blue-light flex items-center" asChild>
                  <Link to="/news">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
