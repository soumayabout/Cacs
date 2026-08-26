import { z } from 'zod';
export const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    company: z.string().optional(),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    country: z.string().optional(),
    subject: z.enum(['Information', 'Adhesion', 'Partenariat', 'Evenement', 'Presse', 'Autre'], {
        errorMap: () => ({ message: 'Invalid subject' })
    }),
    message: z.string().min(10, 'Message must be at least 10 characters')
});
export const membershipSchema = z.object({
    companyName: z.string().min(2, 'Company name must be at least 2 characters'),
    sector: z.enum(['Transport & Logistique', 'Agroalimentaire & Pêche', 'Finance & Investissement', 'Technologies & IT', 'Énergies Renouvelables', 'Autre'], {
        errorMap: () => ({ message: 'Invalid sector' })
    }),
    contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone must be at least 10 characters'),
    country: z.string().min(2, 'Country must be at least 2 characters'),
    website: z.string().url().optional().or(z.literal('')),
    message: z.string().optional()
});
export const newsletterSchema = z.object({
    email: z.string().email('Invalid email address')
});
//# sourceMappingURL=contact.validator.js.map