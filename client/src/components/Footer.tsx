import React from 'react';
import { scrollToSection } from '@/lib/utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t border-primary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and brief description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-primary text-2xl font-display font-bold">Ismael & Gabriele</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              Música de excelência para casamentos, eventos corporativos, aniversários e celebrações especiais.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-display font-bold text-primary mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div>
            <h4 className="text-lg font-display font-bold text-primary mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-primary"></i>
                <span className="text-gray-300">contato@ismaelegabriele.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-primary"></i>
                <span className="text-gray-300">(51) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span className="text-gray-300">Porto Alegre, RS - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/30 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400/60 text-sm">
            &copy; {currentYear} Ismael & Gabriele. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400/60 hover:text-primary transition-colors duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400/60 hover:text-primary transition-colors duration-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-gray-400/60 hover:text-primary transition-colors duration-300">
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a href="#" className="text-gray-400/60 hover:text-primary transition-colors duration-300">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
