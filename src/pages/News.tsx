
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, Clock, Tag } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// News data structure
interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  source?: string;
}

// All news items
const allNewsItems: NewsItem[] = [
  {
    id: 1,
    title: "Government Expands PM Kisan Scheme to Cover More Farmers",
    excerpt: "The Ministry of Agriculture has announced an expansion of the PM Kisan Scheme to include more categories of farmers, benefiting an additional 3 million families.",
    content: "The Ministry of Agriculture and Farmers Welfare has announced a significant expansion of the PM Kisan Scheme, which will now cover additional categories of farmers including tenant farmers and sharecroppers. This expansion is expected to benefit approximately 3 million more farming families across India, bringing the total beneficiaries to over 14 million. The scheme provides income support of ₹6,000 per year to eligible farmer families, paid in three equal installments of ₹2,000 each.",
    date: "2025-03-28",
    readTime: "4 min read",
    category: "Agriculture",
    image: "/placeholder.svg",
    source: "Ministry of Agriculture and Farmers Welfare"
  },
  {
    id: 2,
    title: "New Education Scholarship Announced for Girl Students",
    excerpt: "The Ministry of Education has launched a new scholarship program aimed at supporting girl students pursuing higher education in STEM fields.",
    content: "The Ministry of Education has introduced a comprehensive scholarship program called 'Vidya Lakshmi' specifically targeting female students pursuing higher education in Science, Technology, Engineering, and Mathematics (STEM) fields. The scholarship covers tuition fees, accommodation costs, and provides a monthly stipend. The government has allocated ₹500 crore for this initiative, aiming to support 50,000 girl students annually. Applications will open next month, with priority given to students from economically weaker sections.",
    date: "2025-03-25",
    readTime: "3 min read",
    category: "Education",
    image: "/placeholder.svg",
    source: "Ministry of Education"
  },
  {
    id: 3,
    title: "Health Insurance Coverage Increased Under Ayushman Bharat",
    excerpt: "The government has increased the coverage amount under the Ayushman Bharat health insurance scheme from ₹5 lakhs to ₹7 lakhs per family per year.",
    content: "In a major boost to healthcare accessibility, the government has announced an enhancement of the coverage amount under the Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) from ₹5 lakhs to ₹7 lakhs per family per year. This increase aims to better address the rising healthcare costs and provide more comprehensive coverage to beneficiaries. Additionally, the scheme will now cover more medical procedures and treatments, including several advanced surgeries that were previously excluded.",
    date: "2025-03-21",
    readTime: "5 min read",
    category: "Healthcare",
    image: "/placeholder.svg",
    source: "Ministry of Health and Family Welfare"
  },
  {
    id: 4,
    title: "Digital India Program Extends to Rural Areas with New Initiative",
    excerpt: "The Ministry of Electronics and IT launches 'Digital Village' program to bring high-speed internet and digital literacy to 100,000 rural areas by 2026.",
    content: "The Ministry of Electronics and Information Technology has announced an ambitious expansion of the Digital India program with the launch of 'Digital Village', an initiative aimed at bringing high-speed internet connectivity and digital literacy to 100,000 rural areas by 2026. The program includes setting up Common Service Centers (CSCs) that will offer various e-governance services, digital literacy training, and access to essential online services. The government has allocated ₹15,000 crore for this initiative, which is expected to create thousands of jobs and significantly boost rural digital inclusion.",
    date: "2025-03-18",
    readTime: "6 min read",
    category: "Technology",
    image: "/placeholder.svg",
    source: "Ministry of Electronics and Information Technology"
  },
  {
    id: 5,
    title: "Skill India Mission Introduces New Courses in Emerging Technologies",
    excerpt: "New vocational training modules in AI, cybersecurity, and renewable energy have been added to the Skill India program to prepare youth for future job markets.",
    content: "The Ministry of Skill Development and Entrepreneurship has introduced new vocational training modules in emerging technologies such as Artificial Intelligence, Machine Learning, Cybersecurity, and Renewable Energy under the Skill India Mission. These courses aim to equip the youth with skills required for future job markets and have been developed in collaboration with leading industry partners. The government expects to train over 1 million young professionals in these new technologies over the next three years, significantly enhancing their employability in high-growth sectors.",
    date: "2025-03-15",
    readTime: "4 min read",
    category: "Employment",
    image: "/placeholder.svg",
    source: "Ministry of Skill Development and Entrepreneurship"
  },
  {
    id: 6,
    title: "MGNREGA Wages Increased by 10% Across All States",
    excerpt: "The government has approved a significant wage increase for workers under the MGNREGA scheme, benefiting millions of rural households.",
    content: "The Ministry of Rural Development has announced a 10% increase in wages for workers under the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) scheme across all states. This wage revision, which will come into effect from April 1st, is expected to benefit over 100 million rural workers who depend on this scheme for livelihood support. The increase varies by state, with some states seeing a rise of up to ₹30 per day. The government has also allocated an additional ₹10,000 crore to support the implementation of this wage increase.",
    date: "2025-03-12",
    readTime: "3 min read",
    category: "Rural Development",
    image: "/placeholder.svg",
    source: "Ministry of Rural Development"
  },
  {
    id: 7,
    title: "Housing for All Scheme Reaches 80% Target Completion",
    excerpt: "The Pradhan Mantri Awas Yojana has completed 80% of its target, providing affordable housing to over 8 million urban and rural families.",
    content: "The Ministry of Housing and Urban Affairs has announced that the Pradhan Mantri Awas Yojana (PMAY) has achieved 80% of its target, successfully providing affordable housing to more than 8 million urban and rural families across India. The government has released an additional ₹25,000 crore to ensure the completion of the remaining houses by 2026. Special focus is being placed on accelerating construction in states that are lagging behind, with dedicated monitoring mechanisms being put in place.",
    date: "2025-03-10",
    readTime: "5 min read",
    category: "Housing",
    image: "/placeholder.svg",
    source: "Ministry of Housing and Urban Affairs"
  },
  {
    id: 8,
    title: "Government Launches New Portal for Pension Scheme Registration",
    excerpt: "A unified portal has been introduced to streamline registration and claims process for all government pension schemes, making it easier for senior citizens.",
    content: "The Ministry of Labour and Employment has launched a unified portal called 'Pension Sewa' that integrates all government pension schemes, making it easier for senior citizens to register, track applications, and file claims online. The portal offers a single-window access to schemes such as Atal Pension Yojana, National Pension System, and Pradhan Mantri Shram Yogi Maan-dhan Yojana. The user-friendly interface is available in 12 languages and includes voice-guided assistance for those unfamiliar with digital platforms, significantly reducing the processing time for pension claims.",
    date: "2025-03-08",
    readTime: "4 min read",
    category: "Social Security",
    image: "/placeholder.svg",
    source: "Ministry of Labour and Employment"
  }
];

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(allNewsItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();
  
  const newsPerPage = 6;
  
  // Filter news based on search query and selected category
  useEffect(() => {
    let results = allNewsItems;
    
    if (searchQuery) {
      results = results.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      results = results.filter(item => item.category === selectedCategory);
    }
    
    setFilteredNews(results);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Searching",
        description: `Showing results for "${searchQuery}"`,
      });
    }
  };

  // Get unique categories
  const categories = Array.from(new Set(allNewsItems.map(item => item.category)));

  // Filter news for current page
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gov-blue-dark text-white py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Government Scheme News & Updates</h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Stay informed about the latest government schemes, policy changes, and initiatives designed 
              to benefit citizens across India.
            </p>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Form */}
              <form onSubmit={handleSearch} className="flex w-full md:w-1/2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search for news and updates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2"
                  />
                </div>
                <Button type="submit" className="ml-2 bg-gov-blue hover:bg-gov-blue-dark">
                  Search
                </Button>
              </form>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-gov-blue hover:bg-gov-blue-dark" : ""}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gov-blue hover:bg-gov-blue-dark" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* News Grid */}
        <section className="py-12">
          <div className="container-custom">
            {filteredNews.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-800">No news found matching your search</h3>
                <p className="text-gray-600 mt-2">Try adjusting your search terms or filters</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentNews.map((news) => (
                    <Card key={news.id} className="news-card overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gray-200 relative">
                        <img 
                          src={news.image} 
                          alt={news.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute top-3 left-3 bg-gov-blue text-white text-xs px-2 py-1 rounded">
                          {news.category}
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span>{news.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>{news.readTime}</span>
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-gray-800">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {news.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <Button variant="link" className="p-0 text-gov-blue hover:text-gov-blue-light">
                            Read More
                          </Button>
                          {news.source && (
                            <div className="flex items-center">
                              <Tag className="h-3.5 w-3.5 mr-1 text-gray-500" />
                              <span className="text-xs text-gray-500">{news.source}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination className="mt-12">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages immediately adjacent to current
                        if (page === 1 || page === totalPages || 
                            (page >= currentPage - 1 && page <= currentPage + 1)) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink 
                                isActive={page === currentPage}
                                onClick={() => setCurrentPage(page)}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (page === 2 || page === totalPages - 1) {
                          return <PaginationEllipsis key={page} />;
                        }
                        return null;
                      })}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
