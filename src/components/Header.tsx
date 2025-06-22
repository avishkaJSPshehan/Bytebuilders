import React, { useState, useEffect } from 'react';
import { Menu, X, Code, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* <div className="bg-gradient-to-br from-purple-600 to-magenta-600 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div> */}
            <img src="Images/Logo/icon.png" alt="Description" width="100" className='mt-4' />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-magenta-600 bg-clip-text text-transparent">
              ButeBuilders
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'SAAS', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-magenta-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Talk to Us</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Services', 'SAAS', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-magenta-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;