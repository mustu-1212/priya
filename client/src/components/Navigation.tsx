import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-dm-serif text-2xl font-bold text-charcoal">
            Priya Dhurve
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('editorials')}
              className="text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
            >
              Editorials
            </button>
            <button 
              onClick={() => scrollToSection('polaroids')}
              className="text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
            >
              Polaroids
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden text-charcoal hover:text-dusty-rose"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-3 space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('editorials')}
                className="block text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
              >
                Editorials
              </button>
              <button 
                onClick={() => scrollToSection('polaroids')}
                className="block text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
              >
                Polaroids
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-sm font-medium hover:text-dusty-rose transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
