import { Request, Response } from 'express';

export class NewsController {
  async getAllNews(req: Request, res: Response) {
    try {
      // TODO: Fetch from database when DB connection is ready
      // const news = await db.news.findAll();
      
      const mockNews = [
        {
          id: 1,
          slug: 'cacs-participe-table-ronde-burundi',
          title: "LA CACS PARTICIPE À LA TABLE RONDE DU BURUNDI",
          excerpt: "La Chambre Africaine de Commerce et de Services a pris part à la Table Ronde organisée à Bujumbura.",
          content: "Full content here...",
          date: "2026-01-20",
          category: "Coopération",
          image: "https://www.cacsafrica.org/assets/images/events/cf.jpg",
          author: "Équipe CACS"
        }
      ];
      
      res.json({
        success: true,
        data: mockNews
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }

  async getNewsBySlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      // TODO: Fetch from database
      res.json({
        success: true,
        data: { slug, title: 'News article' }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }
}
