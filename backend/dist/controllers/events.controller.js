export class EventsController {
    async getAllEvents(req, res) {
        try {
            // TODO: Fetch from database when DB connection is ready
            // const events = await db.events.findAll();
            const mockEvents = [
                {
                    id: 1,
                    title: "Africa Business Days 2026",
                    description: "Forum international d'affaires B2B dédié aux opportunités économiques en Afrique.",
                    date: "2026-03-15",
                    location: "Dakhla, Maroc",
                    category: "Conférence",
                    image: "https://www.cacsafrica.org/assets/images/events/abd.jpg"
                },
                {
                    id: 2,
                    title: "Webinaire : Performance et Harmonie",
                    description: "Conférence en ligne sur le développement du capital humain en Afrique.",
                    date: "2026-02-20",
                    location: "En ligne",
                    category: "Webinaire",
                    image: "https://www.cacsafrica.org/assets/images/media/ASLEMCar.jpg"
                }
            ];
            res.json({
                success: true,
                data: mockEvents
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    }
    async getEventById(req, res) {
        try {
            const { id } = req.params;
            // TODO: Fetch from database
            res.json({
                success: true,
                data: { id, title: 'Event details' }
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    }
}
//# sourceMappingURL=events.controller.js.map