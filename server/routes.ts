import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // In a real app, you might want to store this in a database
      // or send it via email. For now, we'll just log it.
      console.log('Contact form submission:', validatedData);
      
      // Return success
      return res.status(200).json({ 
        success: true, 
        message: 'Message received. We will get back to you soon!' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: 'Server error, please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
