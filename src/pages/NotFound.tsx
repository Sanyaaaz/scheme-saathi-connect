
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Page Not Found | SchemeSaathi";
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto text-center">
            <div className="text-gov-blue text-8xl font-bold mb-6">404</div>
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Page Not Found</h1>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button asChild className="official-btn">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
