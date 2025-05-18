import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { apiRequest } from '@/lib/queryClient';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' })
});

type FormData = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-card">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10">
          <i className="fa-solid fa-music text-8xl text-primary"></i>
        </div>
        <div className="absolute bottom-10 right-10">
          <i className="fa-solid fa-guitar text-8xl text-primary"></i>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <SectionHeading 
            title="Entre em Contato"
            subtitle="Estamos ansiosos para fazer parte do seu evento especial. Preencha o formulário abaixo e entraremos em contato em até 24 horas."
          />
          
          {/* Contact form */}
          <motion.div 
            className="bg-background border border-primary/30 rounded-sm overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact info */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-card to-background relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10">
                  <i className="fa-solid fa-music absolute text-8xl text-primary" style={{top: '10%', left: '20%'}}></i>
                  <i className="fa-solid fa-guitar absolute text-9xl text-primary" style={{top: '60%', left: '60%'}}></i>
                  <i className="fas fa-violin absolute text-7xl text-primary" style={{top: '40%', left: '80%'}}></i>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1"><i className="fas fa-map-marker-alt"></i></div>
                    <div>
                      <h4 className="font-medium text-foreground">Localização</h4>
                      <p className="text-gray-300">Porto Alegre, RS - Brasil</p>
                      <p className="text-gray-300">Disponíveis para viagens</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1"><i className="fas fa-envelope"></i></div>
                    <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <p className="text-gray-300">contato@ismaelegabriele.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1"><i className="fas fa-phone"></i></div>
                    <div>
                      <h4 className="font-medium text-foreground">Telefone</h4>
                      <p className="text-gray-300">(51) 99999-9999</p>
                    </div>
                  </div>
                </div>
                
                {/* Social media */}
                <div className="mt-12">
                  <h4 className="font-medium text-foreground mb-4">Siga-nos</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background rounded-full transition-all duration-300">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background rounded-full transition-all duration-300">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background rounded-full transition-all duration-300">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background rounded-full transition-all duration-300">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div className="p-8 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground mb-2 font-medium">Seu Nome</label>
                    <Input 
                      id="name"
                      {...register('name')} 
                      className="w-full bg-muted border border-primary/30 focus:border-primary text-foreground p-3 rounded-sm transition-all duration-300"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-foreground mb-2 font-medium">Seu E-mail</label>
                    <Input 
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full bg-muted border border-primary/30 focus:border-primary text-foreground p-3 rounded-sm transition-all duration-300"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-foreground mb-2 font-medium">Sua Mensagem</label>
                    <Textarea 
                      id="message"
                      rows={5}
                      {...register('message')}
                      className="w-full bg-muted border border-primary/30 focus:border-primary text-foreground p-3 rounded-sm transition-all duration-300"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/80 text-background font-bold py-3 px-6 rounded-sm transition-all duration-300"
                    >
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
