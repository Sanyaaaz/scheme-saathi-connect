
import React from 'react';
import { ExternalLink, ArrowRight, Award, Briefcase, GraduationCap, Heart, Home, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SchemeProps {
  title: string;
  description: string;
  eligibility: string[];
  link: string;
  icon: React.ReactNode;
}

const SchemeCard: React.FC<SchemeProps> = ({ title, description, eligibility, link, icon }) => {
  return (
    <div className="scheme-card border-l-4 group">
      <div className="flex items-start">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-gov-blue flex-shrink-0">
          {icon}
        </div>
        <div className="ml-4 flex-1">
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
          
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700">Eligibility Criteria:</h4>
            <ul className="mt-1 space-y-1">
              {eligibility.map((item, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="w-1 h-1 bg-gov-blue rounded-full mt-2 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm flex items-center text-gov-blue hover:text-gov-blue-light"
            >
              Official Website <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </a>
            
            <Button variant="outline" size="sm" className="text-xs outlined-btn">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopularSchemes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Popular Government Schemes</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore these widely accessed government initiatives designed to provide support across various sectors
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white shadow-sm">
              <TabsTrigger value="all">All Schemes</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="employment">Employment</TabsTrigger>
              <TabsTrigger value="housing">Housing</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SchemeCard 
                title="PM Kisan Samman Nidhi"
                description="Income support scheme providing farmers with up to ₹6,000 per year in three equal installments."
                eligibility={[
                  "Small and marginal farmer families with cultivable land",
                  "Subject to exclusion criteria for higher income groups"
                ]}
                link="https://pmkisan.gov.in/"
                icon={<Award className="h-5 w-5" />}
              />
              
              <SchemeCard 
                title="Pradhan Mantri Ujjwala Yojana"
                description="Provides LPG connections to women from Below Poverty Line households."
                eligibility={[
                  "Women from BPL household",
                  "No existing LPG connection in the household"
                ]}
                link="https://pmuy.gov.in/"
                icon={<Home className="h-5 w-5" />}
              />
              
              <SchemeCard 
                title="PM-JAY (Ayushman Bharat)"
                description="Health insurance scheme providing coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization."
                eligibility={[
                  "Families identified based on SECC database",
                  "Covers up to 5 members per family"
                ]}
                link="https://pmjay.gov.in/"
                icon={<Heart className="h-5 w-5" />}
              />
              
              <SchemeCard 
                title="Pradhan Mantri Mudra Yojana"
                description="Provides loans up to ₹10 lakhs to non-corporate, non-farm small/micro enterprises."
                eligibility={[
                  "Small/micro business owners",
                  "Non-corporate, non-farm enterprises"
                ]}
                link="https://www.mudra.org.in/"
                icon={<Briefcase className="h-5 w-5" />}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SchemeCard 
                title="Post Matric Scholarship"
                description="Financial assistance for students belonging to Scheduled Castes to pursue post-matriculation courses."
                eligibility={[
                  "SC students with family income below ₹2.5 lakhs per annum",
                  "Enrolled in post-matriculation courses"
                ]}
                link="https://scholarships.gov.in/"
                icon={<GraduationCap className="h-5 w-5" />}
              />
              
              <SchemeCard 
                title="Pradhan Mantri Vidya Lakshmi Yojana"
                description="Portal for students seeking educational loans for higher education in India and abroad."
                eligibility={[
                  "Students seeking education loans for higher studies",
                  "Admission to recognized institutions"
                ]}
                link="https://www.vidyalakshmi.co.in/"
                icon={<GraduationCap className="h-5 w-5" />}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="health" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SchemeCard 
                title="PM-JAY (Ayushman Bharat)"
                description="Health insurance scheme providing coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization."
                eligibility={[
                  "Families identified based on SECC database",
                  "Covers up to 5 members per family"
                ]}
                link="https://pmjay.gov.in/"
                icon={<Heart className="h-5 w-5" />}
              />
              
              <SchemeCard 
                title="Pradhan Mantri Surakshit Matritva Abhiyan"
                description="Provides free health check-ups to pregnant women in their 2nd/3rd trimesters at government facilities."
                eligibility={[
                  "Pregnant women in 2nd/3rd trimester",
                  "All pregnant women regardless of income"
                ]}
                link="https://pmsma.nhp.gov.in/"
                icon={<Users className="h-5 w-5" />}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="employment" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SchemeCard 
                title="Pradhan Mantri Mudra Yojana"
                description="Provides loans up to ₹10 lakhs to non-corporate, non-farm small/micro enterprises."
                eligibility={[
                  "Small/micro business owners",
                  "Non-corporate, non-farm enterprises"
                ]}
                link="https://www.mudra.org.in/"
                icon={<Briefcase className="h-5 w-5" />}
              />
              
              <SchemeCard 
                title="PMKVY (Pradhan Mantri Kaushal Vikas Yojana)"
                description="Skill development initiative scheme to enable youth to take up industry-relevant skill training."
                eligibility={[
                  "Youth seeking skill development training",
                  "Indian citizen, minimum education varies by course"
                ]}
                link="https://www.pmkvyofficial.org/"
                icon={<GraduationCap className="h-5 w-5" />}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="housing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SchemeCard 
                title="Pradhan Mantri Awas Yojana - Urban"
                description="Housing for all initiative providing affordable housing for urban poor."
                eligibility={[
                  "Urban residents with annual income up to ₹18 lakhs",
                  "Does not own a pucca house in their name or family member's name"
                ]}
                link="https://pmaymis.gov.in/"
                icon={<Home className="h-5 w-5" />}
              />
              
              <SchemeCard 
                title="Pradhan Mantri Awas Yojana - Gramin"
                description="Aims to provide housing for the rural poor in India."
                eligibility={[
                  "Rural households living in kutcha/dilapidated houses",
                  "Identified based on SECC data"
                ]}
                link="https://pmayg.nic.in/"
                icon={<Home className="h-5 w-5" />}
              />
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-10 text-center">
          <Button variant="default" className="official-btn">
            View All Schemes <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
