/**
 * AI Intent Classification Service
 * Classifies contact requests into categories with fallback to rule-based logic
 */

export type IntentCategory = 'information' | 'membership' | 'partnership' | 'event' | 'press' | 'other';

export interface ClassificationResult {
  category: IntentCategory;
  confidence: number;
  method: 'ai' | 'rule-based';
}

export class AIService {
  private apiKey: string | null = null;

  constructor() {
    this.apiKey = process.env.AI_API_KEY || null;
  }

  /**
   * Classify a contact request using AI or fallback to rule-based logic
   */
  async classifyContactRequest(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<ClassificationResult> {
    // If AI API key is available, try AI classification
    if (this.apiKey) {
      try {
        const aiResult = await this.classifyWithAI(data);
        if (aiResult.confidence > 0.7) {
          return aiResult;
        }
        // If confidence is low, fall back to rule-based
      } catch (error) {
        console.warn('AI classification failed, falling back to rule-based:', error);
      }
    }

    // Fallback to rule-based classification
    return this.classifyWithRules(data);
  }

  /**
   * Classify using AI API (placeholder for actual implementation)
   */
  private async classifyWithAI(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<ClassificationResult> {
    // TODO: Implement actual AI API call
    // This is a placeholder that simulates AI classification
    // In production, this would call an AI service like OpenAI, Anthropic, etc.
    
    const text = `${data.subject} ${data.message}`.toLowerCase();
    
    // Simulated AI classification with confidence
    if (text.includes('adhésion') || text.includes('membre') || text.includes('membership')) {
      return { category: 'membership', confidence: 0.85, method: 'ai' };
    }
    if (text.includes('partenariat') || text.includes('collaboration') || text.includes('partnership')) {
      return { category: 'partnership', confidence: 0.82, method: 'ai' };
    }
    if (text.includes('événement') || text.includes('conférence') || text.includes('forum')) {
      return { category: 'event', confidence: 0.78, method: 'ai' };
    }
    if (text.includes('presse') || text.includes('média') || text.includes('journal')) {
      return { category: 'press', confidence: 0.75, method: 'ai' };
    }
    
    return { category: 'information', confidence: 0.65, method: 'ai' };
  }

  /**
   * Classify using rule-based logic (fallback)
   */
  private classifyWithRules(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): ClassificationResult {
    const text = `${data.subject} ${data.message}`.toLowerCase();
    const subject = data.subject.toLowerCase();

    // Rule-based classification
    if (
      subject.includes('adhésion') ||
      subject.includes('membre') ||
      text.includes('adhérer') ||
      text.includes('devenir membre')
    ) {
      return { category: 'membership', confidence: 0.9, method: 'rule-based' };
    }

    if (
      subject.includes('partenariat') ||
      subject.includes('collaboration') ||
      text.includes('partenariat') ||
      text.includes('collaborer')
    ) {
      return { category: 'partnership', confidence: 0.85, method: 'rule-based' };
    }

    if (
      subject.includes('événement') ||
      subject.includes('conférence') ||
      text.includes('événement') ||
      text.includes('forum')
    ) {
      return { category: 'event', confidence: 0.8, method: 'rule-based' };
    }

    if (
      subject.includes('presse') ||
      subject.includes('média') ||
      text.includes('journal') ||
      text.includes('article')
    ) {
      return { category: 'press', confidence: 0.85, method: 'rule-based' };
    }

    // Default to information
    return { category: 'information', confidence: 0.7, method: 'rule-based' };
  }

  /**
   * Get suggested response template based on classification
   */
  getSuggestedResponse(category: IntentCategory): string {
    const responses: Record<IntentCategory, string> = {
      information: 'Thank you for your inquiry. Our team will review your question and respond within 2 business days.',
      membership: 'Thank you for your interest in joining CACS. A membership representative will contact you within 48 hours to discuss your application.',
      partnership: 'Thank you for your partnership proposal. Our business development team will review your request and get back to you shortly.',
      event: 'Thank you for your interest in our events. Please check our events page for registration details or contact us for specific inquiries.',
      press: 'Thank you for your media inquiry. Our communications team will respond to your request promptly.',
      other: 'Thank you for your message. Our team will review your request and respond as soon as possible.'
    };

    return responses[category];
  }
}

// Singleton instance
export const aiService = new AIService();
