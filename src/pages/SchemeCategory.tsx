
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Scheme data structure
interface Scheme {
  id: number;
  title: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  deadline: string | null;
  category: string;
  ministry: string;
  link: string;
}

// Sample scheme data for various categories
const schemesData: Scheme[] = [
  // Education Schemes
  {
    id: 1,
    title: "National Scholarship Portal",
    description: "Central platform for various scholarship schemes provided by central and state governments for students.",
    eligibility: ["Students from economically weaker sections", "Merit-based criteria varies by scholarship"],
    benefits: ["Financial assistance for education", "Direct transfer to student bank accounts"],
    deadline: "October 31, 2025",
    category: "education",
    ministry: "Ministry of Education",
    link: "https://scholarships.gov.in/"
  },
  {
    id: 2,
    title: "Vidyalakshmi Portal",
    description: "Platform for students seeking educational loans for higher education in India and abroad.",
    eligibility: ["Students seeking higher education loans", "Admission to recognized institutions"],
    benefits: ["Single window for education loans from multiple banks", "Access to government subsidy schemes"],
    deadline: null,
    category: "education",
    ministry: "Ministry of Education",
    link: "https://www.vidyalakshmi.co.in/"
  },
  // Health Schemes
  {
    id: 3,
    title: "Ayushman Bharat PM-JAY",
    description: "Health insurance scheme providing coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
    eligibility: ["Families identified based on SECC database", "Covers up to 5 members per family"],
    benefits: ["Cashless hospitalization", "Coverage for pre and post hospitalization expenses"],
    deadline: null,
    category: "health",
    ministry: "Ministry of Health and Family Welfare",
    link: "https://pmjay.gov.in/"
  },
  {
    id: 4,
    title: "Pradhan Mantri Surakshit Matritva Abhiyan",
    description: "Provides free health check-ups to pregnant women in their 2nd/3rd trimesters at government facilities.",
    eligibility: ["Pregnant women in 2nd/3rd trimester", "All pregnant women regardless of income"],
    benefits: ["Free antenatal check-ups", "Treatment and follow-up by specialists"],
    deadline: null,
    category: "health",
    ministry: "Ministry of Health and Family Welfare",
    link: "https://pmsma.nhp.gov.in/"
  },
  // Agriculture Schemes
  {
    id: 5,
    title: "PM Kisan Samman Nidhi",
    description: "Income support scheme providing farmers with up to ₹6,000 per year in three equal installments.",
    eligibility: ["Small and marginal farmer families with cultivable land", "Subject to exclusion criteria for higher income groups"],
    benefits: ["Direct financial assistance", "Funds transferred directly to bank accounts"],
    deadline: null,
    category: "agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    link: "https://pmkisan.gov.in/"
  },
  {
    id: 6,
    title: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop insurance scheme to provide financial support to farmers suffering crop loss or damage due to natural calamities.",
    eligibility: ["All farmers including sharecroppers and tenant farmers", "Must grow notified crops"],
    benefits: ["Coverage for standing crops", "Low premium rates for farmers"],
    deadline: "Varies by crop season",
    category: "agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    link: "https://pmfby.gov.in/"
  },
  // Employment Schemes
  {
    id: 7,
    title: "Pradhan Mantri Mudra Yojana",
    description: "Provides loans up to ₹10 lakhs to non-corporate, non-farm small/micro enterprises.",
    eligibility: ["Small/micro business owners", "Non-corporate, non-farm enterprises"],
    benefits: ["Collateral-free loans", "Three categories: Shishu, Kishore and Tarun"],
    deadline: null,
    category: "employment",
    ministry: "Ministry of Finance",
    link: "https://www.mudra.org.in/"
  },
  {
    id: 8,
    title: "PMKVY (Pradhan Mantri Kaushal Vikas Yojana)",
    description: "Skill development initiative scheme to enable youth to take up industry-relevant skill training.",
    eligibility: ["Youth seeking skill development training", "Indian citizen, minimum education varies by course"],
    benefits: ["Free skill training", "Industry-recognized certification", "Placement assistance"],
    deadline: null,
    category: "employment",
    ministry: "Ministry of Skill Development & Entrepreneurship",
    link: "https://www.pmkvyofficial.org/"
  }
];

export default function SchemeCategory() {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMinistry, setFilterMinistry] = useState<string | null>(null);
  const [schemes, setSchemes] = useState<Scheme[]>([]);

  useEffect(() => {
    // Filter schemes based on category from URL parameter
    if (category) {
      const filteredSchemes = schemesData.filter(
        scheme => scheme.category === category.toLowerCase()
      );
      setSchemes(filteredSchemes);
    }
  }, [category]);

  // Filter schemes based on search term and ministry filter
  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinistry = filterMinistry ? scheme.ministry === filterMinistry : true;
    
    return matchesSearch && matchesMinistry;
  });

  // Get unique ministries for filter dropdown
  const ministries = Array.from(new Set(schemes.map(scheme => scheme.ministry)));

  // Generate page title based on category
  const getCategoryTitle = () => {
    if (!category) return "All Schemes";
    
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    return `${formattedCategory} Schemes`;
  };

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{getCategoryTitle()}</h1>
        <p className="text-gray-600 max-w-3xl">
          Explore {category?.toLowerCase()} schemes offered by the government to support citizens. 
          Find details about eligibility, benefits, and application processes.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder={`Search ${category?.toLowerCase() || ''} schemes...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="w-full md:w-64">
          <Select value={filterMinistry || ""} onValueChange={(value) => setFilterMinistry(value || null)}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Ministry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Ministries</SelectItem>
              {ministries.map((ministry) => (
                <SelectItem key={ministry} value={ministry}>{ministry}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Schemes List */}
      {filteredSchemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => (
            <Card key={scheme.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{scheme.title}</h3>
                    {scheme.deadline && (
                      <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full">
                        Deadline: {scheme.deadline}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Eligibility:</h4>
                    <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                      {scheme.eligibility.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Benefits:</h4>
                    <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                      {scheme.benefits.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    Ministry: {scheme.ministry}
                  </div>
                  
                  <Button variant="default" className="official-btn" asChild>
                    <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                      Visit Official Website
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No schemes found matching your search criteria.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchTerm("");
              setFilterMinistry(null);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
