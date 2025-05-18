import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-card relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeading 
          title="Veja nossa Música em Ação"
          subtitle="Permita-se experienciar um pouco da nossa performance."
        />
        
        {/* Video */}
        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
            <div className="absolute inset-0 border-2 border-primary/50 rounded-sm overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/Z5fZBdtgHSY?rel=0" 
                title="Ninguém Explica Deus - Cover" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-16 h-16 md:w-24 md:h-24 border-l-2 border-b-2 border-primary opacity-70"></div>
          <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-16 h-16 md:w-24 md:h-24 border-t-2 border-r-2 border-primary opacity-70"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
