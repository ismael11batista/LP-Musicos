import React, { useEffect } from 'react';
import { MusicNote } from '@/components/ui/music-note';
import { scrollToSection } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  useEffect(() => {
    // Trigger fade animations when component mounts
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(element => {
      element.classList.add('animate-in');
    });
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Musical notes background animations */}
      <div className="absolute inset-0 pointer-events-none">
        <MusicNote symbol="♪" size="text-5xl" top="15%" left="10%" delay={0} />
        <MusicNote symbol="♫" size="text-7xl" top="45%" left="5%" delay={1} />
        <MusicNote symbol="♩" size="text-6xl" top="25%" left="80%" delay={2} />
        <MusicNote symbol="♭" size="text-5xl" top="65%" left="85%" delay={3} />
        <MusicNote symbol="𝄞" size="text-8xl" top="75%" left="20%" delay={2.5} />
      </div>
      
      {/* Hero background */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80" 
          alt="Elegant concert venue" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow">
            <span className="block mb-2">Músicos para</span>
            <span className="gradient-text">Seu Evento</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Transforme seu casamento, festa ou evento com uma trilha sonora única e inesquecível.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            className="btn-gold inline-block bg-primary hover:bg-primary/80 text-background font-medium text-lg px-8 py-6 rounded-sm transition-all duration-300 shadow-lg"
            onClick={() => scrollToSection('contact')}
          >
            Quero um Orçamento
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button 
          onClick={() => scrollToSection('services')}
          className="text-primary hover:text-primary/80 transition-colors duration-300"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
