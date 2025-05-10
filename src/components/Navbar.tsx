
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LinguasLogo from './LinguasLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <LinguasLogo />
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </Button>
        </div>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-lm-blue hover:text-lm-red font-medium transition">Início</a>
          <a href="#quem-somos" className="text-lm-blue hover:text-lm-red font-medium transition">Quem Somos</a>
          <a href="#cursos" className="text-lm-blue hover:text-lm-red font-medium transition">Cursos</a>
          <a href="#depoimentos" className="text-lm-blue hover:text-lm-red font-medium transition">Depoimentos</a>
          <a href="#contato" className="text-lm-blue hover:text-lm-red font-medium transition">Contato</a>
          <Button className="bg-lm-red hover:bg-red-700 text-white">
            Agendar Aula Grátis
          </Button>
        </nav>
      </div>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <a href="#inicio" className="text-lm-blue hover:text-lm-red font-medium transition" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="#quem-somos" className="text-lm-blue hover:text-lm-red font-medium transition" onClick={() => setMobileMenuOpen(false)}>Quem Somos</a>
            <a href="#cursos" className="text-lm-blue hover:text-lm-red font-medium transition" onClick={() => setMobileMenuOpen(false)}>Cursos</a>
            <a href="#depoimentos" className="text-lm-blue hover:text-lm-red font-medium transition" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
            <a href="#contato" className="text-lm-blue hover:text-lm-red font-medium transition" onClick={() => setMobileMenuOpen(false)}>Contato</a>
            <Button className="bg-lm-red hover:bg-red-700 text-white w-full">
              Agendar Aula Grátis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
