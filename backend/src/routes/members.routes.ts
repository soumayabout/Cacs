import { Router } from 'express';
import { MembersController } from '../controllers/members.controller.js';

const router = Router();
const membersController = new MembersController();

router.get('/', membersController.getAllMembers);
router.get('/:id', membersController.getMemberById);

export default router;
