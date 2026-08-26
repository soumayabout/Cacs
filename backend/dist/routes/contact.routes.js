import { Router } from 'express';
import { ContactController } from '../controllers/contact.controller.js';
const router = Router();
const contactController = new ContactController();
router.post('/contact', contactController.submitContact);
router.post('/membership', contactController.submitMembership);
router.post('/newsletter', contactController.subscribeNewsletter);
export default router;
//# sourceMappingURL=contact.routes.js.map