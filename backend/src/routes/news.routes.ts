import { Router } from 'express';
import { NewsController } from '../controllers/news.controller.js';

const router = Router();
const newsController = new NewsController();

router.get('/', newsController.getAllNews);
router.get('/:slug', newsController.getNewsBySlug);

export default router;
