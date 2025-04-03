
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import PopularSchemes from '@/components/PopularSchemes';
import LatestNews from '@/components/LatestNews';
import StatsBanner from '@/components/StatsBanner';
import SchemeChat from '@/components/SchemeChat';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SchemeSaathi - Find Government Schemes You're Eligible For";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <StatsBanner />
        <PopularSchemes />
        <LatestNews />
        <SchemeChat />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
