import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, index }) => {
  return (
    <motion.div 
      className="card-hover bg-background border border-primary/30 rounded-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-3 text-primary">{title}</h3>
        <p className="text-gray-300/80">{description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Violão e Guitarra",
      description: "Harmonia que conecta e transforma cada momento.",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      title: "Bateria",
      description: "Ritmos vibrantes para dar vida à sua celebração.",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      title: "Violino",
      description: "A delicadeza do violino torna cada momento inesquecível.",
      image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-card relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 right-10">
          <i className="fa-solid fa-music text-8xl text-primary"></i>
        </div>
        <div className="absolute bottom-10 left-10">
          <i className="fa-solid fa-guitar text-8xl text-primary"></i>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeading 
          title="Nossos Serviços"
          subtitle="Oferecemos uma experiência musical refinada e personalizada para cada momento do seu evento."
        />
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline"
            className="px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 font-medium rounded-sm"
            onClick={() => scrollToSection('contact')}
          >
            Solicitar Informações
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
