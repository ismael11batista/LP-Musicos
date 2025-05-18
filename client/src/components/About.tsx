import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="gold-border inline-block pb-2">Sobre Nós</span>
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Somos Ismael e Gabriele, irmãos que cresceram respirando música.
              </p>
              
              <p>
                Ismael começou aos 6 anos, aprendendo bateria, violão, guitarra e teclado. Sua versatilidade dá um toque especial a cada apresentação.
              </p>
              
              <p>
                Já Gabriele é uma virtuose do violino, com mais de 8 anos de experiência, incluindo apresentações na Camerata di Venezia.
              </p>
              
              <p className="text-primary font-medium">
                Nossa missão é transformar o seu evento em algo único e inesquecível, criando uma trilha sonora que toque o coração e crie memórias para toda a vida.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-display font-bold text-primary">10+</p>
                <p className="text-gray-300 text-sm">Anos de Experiência</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-display font-bold text-primary">150+</p>
                <p className="text-gray-300 text-sm">Eventos Realizados</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-display font-bold text-primary">98%</p>
                <p className="text-gray-300 text-sm">Clientes Satisfeitos</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* About image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-sm overflow-hidden border border-primary/30 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1470019693664-1d202d2c0907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=900&q=80" 
                alt="Ismael e Gabriele tocando juntos" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l-2 border-b-2 border-primary opacity-70"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary opacity-70"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
