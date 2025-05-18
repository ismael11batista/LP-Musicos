import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ismael & Gabriele | Músicos para Seu Evento</title>
        <meta name="description" content="Transforme seu casamento, festa ou evento com uma trilha sonora única e inesquecível com Ismael & Gabriele." />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Services />
      <About />
      <VideoSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
