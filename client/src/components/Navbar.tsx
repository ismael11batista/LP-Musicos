import React, { useState, useEffect } from 'react';
import { scrollToSection } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background shadow-md' : 'bg-background/90 backdrop-blur-sm'
    } border-b border-primary/30`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('hero');
            }}
          >
            <span className="text-primary text-2xl md:text-3xl font-display font-bold">Ismael & Gabriele</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="nav-link text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('hero');
              }}
            >
              Início
            </a>
            <a 
              href="#services" 
              className="nav-link text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('services');
              }}
            >
              Serviços
            </a>
            <a 
              href="#about" 
              className="nav-link text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('about');
              }}
            >
              Sobre Nós
            </a>
            <Button 
              variant="outline" 
              className="bg-transparent hover:bg-primary text-primary hover:text-background border border-primary rounded-sm transition-all duration-300 font-medium"
              onClick={() => handleNavigation('contact')}
            >
              Contato
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              className="text-primary hover:text-primary/80 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#home"
              className="text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('hero');
              }}
            >
              Início
            </a>
            <a 
              href="#services"
              className="text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('services');
              }}
            >
              Serviços
            </a>
            <a 
              href="#about"
              className="text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('about');
              }}
            >
              Sobre Nós
            </a>
            <Button 
              variant="outline"
              className="bg-transparent hover:bg-primary text-primary hover:text-background border border-primary rounded-sm transition-all duration-300 font-medium w-full"
              onClick={() => handleNavigation('contact')}
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
