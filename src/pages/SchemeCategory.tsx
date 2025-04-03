
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSchemesByCategory, Scheme, getAllMinistries } from '@/data/schemes';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Search, Filter } from 'lucide-react';

const SchemeCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMinistry, setSelectedMinistry] = useState('');
  const ministries = getAllMinistries();
  
  useEffect(() => {
    if (category) {
      const fetchedSchemes = getSchemesByCategory(category);
      setSchemes(fetchedSchemes);
      setFilteredSchemes(fetchedSchemes);
    }
    
    window.scrollTo(0, 0);
    document.title = `${category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All'} Schemes - SchemeSaathi`;
  }, [category]);
  
  useEffect(() => {
    let result = schemes;
    
    if (searchTerm) {
      result = result.filter(scheme => 
        scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        scheme.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedMinistry) {
      result = result.filter(scheme => scheme.ministry === selectedMinistry);
    }
    
    setFilteredSchemes(result);
  }, [searchTerm, selectedMinistry, schemes]);
  
  const handleMinistryChange = (value: string) => {
    setSelectedMinistry(value === 'all-ministries' ? '' : value);
  };
  
  const getCategoryTitle = () => {
    if (!category) return 'All Schemes';
    return `${category.charAt(0).toUpperCase() + category.slice(1)} Schemes`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gov-blue text-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">{getCategoryTitle()}</h1>
            <p className="text-lg opacity-90">
              Explore government schemes designed to support {category} initiatives and development.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder={`Search ${category} schemes...`}
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <Select onValueChange={handleMinistryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Ministry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-ministries">All Ministries</SelectItem>
                  {ministries.map((ministry) => (
                    <SelectItem key={ministry} value={ministry}>
                      {ministry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Schemes Grid */}
          {filteredSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchemes.map((scheme) => (
                <Card key={scheme.id} className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{scheme.title}</CardTitle>
                    <CardDescription>{scheme.ministry}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4">{scheme.description}</p>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong className="block text-gray-700">Eligibility:</strong>
                        <span>{scheme.eligibility}</span>
                      </div>
                      <div>
                        <strong className="block text-gray-700">Benefits:</strong>
                        <span>{scheme.benefits}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Updated: {scheme.lastUpdated}
                    </div>
                    <Button asChild>
                      <a href={scheme.applicationLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Apply <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Filter className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No schemes found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchemeCategory;
