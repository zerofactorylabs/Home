import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Lock, ExternalLink } from 'lucide-react';
import { Link } from '../components/Link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const navigationItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? 'bg-primary-dark/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="#" className="flex items-center space-x-2">
          <div className="relative">
            <Shield className="h-8 w-8 text-secondary" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
          </div>
          <span className="text-xl font-bold">
            <span className="text-text-primary">Zeroday</span>
            <span className="text-secondary"> Operations</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="text-text-tertiary hover:text-secondary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <button className="btn-outline flex items-center">
            <span>Client Portal</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary hover:text-secondary transition-colors"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-primary-dark/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navigationItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="text-2xl text-text-tertiary hover:text-secondary transition-colors"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              {item.name}
            </Link>
          ))}
          <button className="btn-outline mt-8 flex items-center">
            <Lock className="mr-2 h-5 w-5" />
            <span>Client Portal</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;