import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  event: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, event }) => {
  return (
    <div className="testimonial-card bg-background border border-primary/30 p-8 rounded-sm h-full">
      <div className="mb-6">
        <div className="flex mb-2">
          {[...Array(5)].map((_, index) => (
            <i key={index} className="fas fa-star text-primary"></i>
          ))}
        </div>
      </div>
      <blockquote className="mb-6 text-gray-300 italic">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div>
          <p className="font-display text-primary font-medium">{name}</p>
          <p className="text-gray-400/60 text-sm">{event}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Tô passando para agradecer tu e o teu mano! Foi incrível! Só elogios pra vocês… todos adoraram. Vocês moram no nosso coração…somos fãs de vocês. Muito obrigada pela dedicação em tornar nosso dia especial ❤️",
      name: "Bruna Paim",
      event: "Casamento - Porto Alegre"
    },
    {
      quote: "Só para agradecer mais uma vez pela oportunidade de ouvir estes anjos! A performance de vocês elevou nosso evento a outro nível.",
      name: "Maristela Spricigo",
      event: "Evento Corporativo"
    },
    {
      quote: "Nossa, que show! Vocês arrasaram. Ainda estou cantarolando as músicas. Muito obrigado por tornar nosso dia tão especial.",
      name: "Ana Carolina Voigt",
      event: "Aniversário - Florianópolis"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Handle responsive slider based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(1); // Mobile
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateSliderPosition = () => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth / slidesPerView;
      trackRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  };

  useEffect(() => {
    updateSliderPosition();
  }, [currentIndex, slidesPerView]);

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex < testimonials.length - slidesPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeading 
          title="O Que Nossos Clientes Dizem"
          subtitle="A satisfação de nossos clientes é o nosso maior reconhecimento."
        />
        
        {/* Testimonials slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              ref={trackRef}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4`}
                >
                  <Testimonial 
                    quote={testimonial.quote}
                    name={testimonial.name}
                    event={testimonial.event}
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Slider controls */}
          <div className="flex justify-center mt-10 space-x-4">
            <Button
              variant="outline"
              className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background rounded-full transition-all duration-300"
              onClick={goToPrevSlide}
              disabled={currentIndex === 0}
            >
              <i className="fas fa-chevron-left"></i>
            </Button>
            <Button
              variant="outline"
              className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background rounded-full transition-all duration-300"
              onClick={goToNextSlide}
              disabled={currentIndex >= testimonials.length - slidesPerView}
            >
              <i className="fas fa-chevron-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
