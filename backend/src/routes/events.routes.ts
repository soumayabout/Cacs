import { Router } from 'express';
import { EventsController } from '../controllers/events.controller.js';

const router = Router();
const eventsController = new EventsController();

router.get('/', eventsController.getAllEvents);
router.get('/:id', eventsController.getEventById);

export default router;
