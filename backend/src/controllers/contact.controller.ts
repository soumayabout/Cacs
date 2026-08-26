import { Request, Response } from 'express';
import { contactSchema, membershipSchema, newsletterSchema } from '../validators/contact.validator.js';
import { aiService } from '../services/ai.service.js';

export class ContactController {
  async submitContact(req: Request, res: Response) {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Classify the intent using AI service
      const classification = await aiService.classifyContactRequest(validatedData);
      
      // TODO: Save to database when DB connection is ready
      // await db.contact_requests.create({ 
      //   ...validatedData,
      //   intent_category: classification.category,
      //   confidence: classification.confidence,
      //   classification_method: classification.method
      // });
      
      res.json({
        success: true,
        message: 'Contact request submitted successfully',
        data: {
          id: Math.floor(Math.random() * 1000),
          ...validatedData,
          classification
        }
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  async submitMembership(req: Request, res: Response) {
    try {
      const validatedData = membershipSchema.parse(req.body);
      
      // TODO: Save to database when DB connection is ready
      // await db.membership_requests.create({ ...validatedData });
      
      res.json({
        success: true,
        message: 'Membership request submitted successfully'
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: error.errors
        });
      }
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }

  async subscribeNewsletter(req: Request, res: Response) {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      
      // TODO: Save to database when DB connection is ready
      // await db.newsletter_subscribers.create({ email: validatedData.email });
      
      res.json({
        success: true,
        message: 'Newsletter subscription successful'
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: error.errors
        });
      }
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }
}
