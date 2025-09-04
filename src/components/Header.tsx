import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-sticky' : 'bg-background/60 backdrop-blur-sm'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-green hover:opacity-80 transition-opacity">
              ally-mobility
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/product" 
              className={`transition-colors duration-200 ${
                location.pathname === '/product' 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Product
            </Link>
            <Link 
              to="/customers" 
              className={`transition-colors duration-200 ${
                location.pathname === '/customers' 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Customers
            </Link>
            <Link 
              to="/about-us" 
              className={`transition-colors duration-200 ${
                location.pathname === '/about-us' 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              About us
            </Link>
            <Button variant="outline" onClick={() => location.pathname === '/' ? scrollToSection('contact') : window.location.href = '/#contact'} className="btn-secondary-outline">
              Contact us
            </Button>
            
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>;
};
export default Header;