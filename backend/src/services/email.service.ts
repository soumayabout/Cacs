/**
 * Email Service Abstraction
 * Provides a unified interface for sending emails with support for multiple providers
 */

export interface EmailOptions {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  from?: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType?: string;
  }>;
}

export interface EmailProvider {
  send(options: EmailOptions): Promise<void>;
}

/**
 * Nodemailer-based email provider
 */
class NodemailerProvider implements EmailProvider {
  private transporter: any;
  private from: string;

  constructor() {
    // TODO: Initialize nodemailer transporter with actual configuration
    // This is a placeholder - in production, configure with actual SMTP settings
    this.from = process.env.EMAIL_FROM || 'noreply@cacsafrica.org';
  }

  async send(options: EmailOptions): Promise<void> {
    // TODO: Implement actual email sending with nodemailer
    // This is a placeholder that logs the email instead of sending
    console.log('[Email Service] Would send email:', {
      to: options.to,
      subject: options.subject,
      from: options.from || this.from,
      hasHtml: !!options.html,
      hasText: !!options.text,
      hasAttachments: !!options.attachments?.length
    });
  }
}

/**
 * Email Service
 * Manages email sending with provider abstraction
 */
export class EmailService {
  private provider: EmailProvider;

  constructor() {
    // Use Nodemailer provider by default
    this.provider = new NodemailerProvider();
  }

  /**
   * Send an email
   */
  async send(options: EmailOptions): Promise<void> {
    try {
      await this.provider.send(options);
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Email sending failed');
    }
  }

  /**
   * Send contact confirmation email
   */
  async sendContactConfirmation(data: {
    name: string;
    email: string;
    subject: string;
  }): Promise<void> {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0B1F3A; padding: 20px; text-align: center;">
          <h1 style="color: #FFD700; margin: 0;">CACS Africa</h1>
          <p style="color: #ffffff; margin: 5px 0 0;">Chambre Africaine de Commerce et de Services</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #0B1F3A; margin-top: 0;">Confirmation de votre demande</h2>
          <p>Bonjour ${data.name},</p>
          <p>Nous avons bien reçu votre demande de contact concernant : <strong>${data.subject}</strong></p>
          <p>Notre équipe traitera votre demande dans les plus brefs délais.</p>
          <p>Cordialement,</p>
          <p><strong>L'équipe CACS Africa</strong></p>
        </div>
        <div style="background: #0B1F3A; padding: 15px; text-align: center; color: #ffffff; font-size: 12px;">
          <p style="margin: 0;">Dakhla & Laâyoune, Maroc | contact@cacsafrica.org</p>
        </div>
      </div>
    `;

    await this.send({
      to: data.email,
      subject: 'Confirmation de votre demande - CACS Africa',
      html,
      text: `Bonjour ${data.name},\n\nNous avons bien reçu votre demande de contact concernant : ${data.subject}\n\nNotre équipe traitera votre demande dans les plus brefs délais.\n\nCordialement,\nL'équipe CACS Africa`
    });
  }

  /**
   * Send membership confirmation email
   */
  async sendMembershipConfirmation(data: {
    companyName: string;
    contactName: string;
    email: string;
  }): Promise<void> {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0B1F3A; padding: 20px; text-align: center;">
          <h1 style="color: #FFD700; margin: 0;">CACS Africa</h1>
          <p style="color: #ffffff; margin: 5px 0 0;">Chambre Africaine de Commerce et de Services</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #0B1F3A; margin-top: 0;">Demande d'adhésion reçue</h2>
          <p>Bonjour ${data.contactName},</p>
          <p>Nous avons bien reçu la demande d'adhésion de <strong>${data.companyName}</strong>.</p>
          <p>Un responsable de la CACS prendra contact avec vous dans les 48h pour finaliser votre adhésion.</p>
          <p>Cordialement,</p>
          <p><strong>L'équipe CACS Africa</strong></p>
        </div>
        <div style="background: #0B1F3A; padding: 15px; text-align: center; color: #ffffff; font-size: 12px;">
          <p style="margin: 0;">Dakhla & Laâyoune, Maroc | contact@cacsafrica.org</p>
        </div>
      </div>
    `;

    await this.send({
      to: data.email,
      subject: 'Demande d\'adhésion reçue - CACS Africa',
      html,
      text: `Bonjour ${data.contactName},\n\nNous avons bien reçu la demande d'adhésion de ${data.companyName}.\n\nUn responsable de la CACS prendra contact avec vous dans les 48h pour finaliser votre adhésion.\n\nCordialement,\nL'équipe CACS Africa`
    });
  }

  /**
   * Send newsletter subscription confirmation
   */
  async sendNewsletterConfirmation(email: string): Promise<void> {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0B1F3A; padding: 20px; text-align: center;">
          <h1 style="color: #FFD700; margin: 0;">CACS Africa</h1>
          <p style="color: #ffffff; margin: 5px 0 0;">Chambre Africaine de Commerce et de Services</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #0B1F3A; margin-top: 0;">Inscription à la newsletter</h2>
          <p>Bonjour,</p>
          <p>Vous êtes maintenant inscrit à notre newsletter.</p>
          <p>Vous recevrez régulièrement les dernières opportunités et événements d'affaires en Afrique.</p>
          <p>Cordialement,</p>
          <p><strong>L'équipe CACS Africa</strong></p>
        </div>
        <div style="background: #0B1F3A; padding: 15px; text-align: center; color: #ffffff; font-size: 12px;">
          <p style="margin: 0;">Dakhla & Laâyoune, Maroc | contact@cacsafrica.org</p>
        </div>
      </div>
    `;

    await this.send({
      to: email,
      subject: 'Inscription à la newsletter - CACS Africa',
      html,
      text: 'Bonjour,\n\nVous êtes maintenant inscrit à notre newsletter.\n\nVous recevrez régulièrement les dernières opportunités et événements d\'affaires en Afrique.\n\nCordialement,\nL\'équipe CACS Africa'
    });
  }

  /**
   * Send notification to admin about new contact request
   */
  async sendAdminNotification(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@cacsafrica.org';

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0B1F3A; padding: 20px; text-align: center;">
          <h1 style="color: #FFD700; margin: 0;">CACS Africa</h1>
          <p style="color: #ffffff; margin: 5px 0 0;">Nouvelle demande de contact</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #0B1F3A; margin-top: 0;">Détails de la demande</h2>
          <p><strong>Nom :</strong> ${data.name}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Sujet :</strong> ${data.subject}</p>
          <p><strong>Message :</strong></p>
          <p style="background: #ffffff; padding: 15px; border-left: 3px solid #0B1F3A;">${data.message}</p>
        </div>
      </div>
    `;

    await this.send({
      to: adminEmail,
      subject: `Nouvelle demande de contact: ${data.subject}`,
      html,
      text: `Nouvelle demande de contact\n\nNom: ${data.name}\nEmail: ${data.email}\nSujet: ${data.subject}\n\nMessage:\n${data.message}`
    });
  }
}

// Singleton instance
export const emailService = new EmailService();
