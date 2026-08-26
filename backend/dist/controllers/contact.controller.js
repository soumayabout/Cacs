import { contactSchema, membershipSchema, newsletterSchema } from '../validators/contact.validator.js';
export class ContactController {
    async submitContact(req, res) {
        try {
            const validatedData = contactSchema.parse(req.body);
            // TODO: Save to database when DB connection is ready
            // await db.contact_requests.create({ ...validatedData });
            res.json({
                success: true,
                message: 'Contact request submitted successfully'
            });
        }
        catch (error) {
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
    async submitMembership(req, res) {
        try {
            const validatedData = membershipSchema.parse(req.body);
            // TODO: Save to database when DB connection is ready
            // await db.membership_requests.create({ ...validatedData });
            res.json({
                success: true,
                message: 'Membership request submitted successfully'
            });
        }
        catch (error) {
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
    async subscribeNewsletter(req, res) {
        try {
            const validatedData = newsletterSchema.parse(req.body);
            // TODO: Save to database when DB connection is ready
            // await db.newsletter_subscribers.create({ email: validatedData.email });
            res.json({
                success: true,
                message: 'Newsletter subscription successful'
            });
        }
        catch (error) {
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
//# sourceMappingURL=contact.controller.js.map