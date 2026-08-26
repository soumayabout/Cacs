import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SEO from '../components/common/SEO.jsx';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const mockEvents = [
  {
    id: 1,
    title: "Webinaire : Performance et Harmonie – L'humain comme levier stratégique pour l'entreprise",
    description: "Une conférence internationale en ligne dédiée au développement du capital humain et au management des compétences en Afrique.",
    date: "2026-03-24",
    location: "En ligne / Webinaire Zoom",
    category: "Webinaire",
    image: "https://www.cacsafrica.org/assets/images/media/ASLEMCar.jpg"
  },
  {
    id: 2,
    title: "Visite de la délégation Guinéenne au siège de la CACS à Dakhla",
    description: "Une coopération en marche pour dynamiser les échanges commerciaux entre le Maroc et la République de Guinée.",
    date: "2026-02-15",
    location: "Dakhla, Maroc",
    category: "Rencontre B2B",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "LA CACS PARTICIPE À LA TABLE RONDE DU BURUNDI",
    description: "Renforcement des liens économiques et présentation des opportunités d'investissement dans les régions du Sud.",
    date: "2026-01-20",
    location: "Bujumbura, Burundi",
    category: "Table Ronde",
    image: "https://www.cacsafrica.org/assets/images/media/jj.png"
  },
  {
    id: 4,
    title: "Africa Business Days - Édition Dakhla 2026",
    description: "Le rendez-vous incontournable des décideurs économiques africains et internationaux.",
    date: "2026-06-10",
    location: "Dakhla, Maroc",
    category: "Forum",
    image: "https://www.cacsafrica.org/assets/images/media/m2.webp"
  }
];

const Events = () => {
  const [events, setEvents] = useState(mockEvents);
  const [filter, setFilter] = useState('Tous');

  useEffect(() => {
    axios.get('http://localhost:4000/api/events')
      .then(res => {
        if (res.data && res.data.data && res.data.data.length > 0) setEvents(res.data.data);
      })
      .catch(() => {});
  }, []);

  const categories = ['Tous', 'Webinaire', 'Rencontre B2B', 'Table Ronde', 'Forum'];

  const filteredEvents = filter === 'Tous'
    ? events
    : events.filter(e => e.category === filter);

  return (
    <>
      <SEO
        title="Nos Événements"
        description="Découvrez les événements CACS Africa : forums, rencontres d'affaires B2B, webinaires et conférences stratégiques pour développer vos opportunités en Afrique."
        keywords="CACS Africa, Événements, Forum, B2B, Webinaire, Conférence, Rencontres d'affaires, Afrique, Maroc"
      />
      <div className="bg-gray-50 min-h-screen pb-16" id="main-content">
      {/* Banner */}
      <div className="bg-cacs-blue text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-cacs-gold uppercase tracking-widest">Événements</span>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase mt-2 mb-4">NOS ÉVÈNEMENTS</h1>
          <p className="text-sm text-gray-200 font-light">
            Découvrez nos forums, rencontres d'affaires B2B, webinaires et conférences stratégiques.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-cacs-pink text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row hover:shadow-lg transition">
              <img
                src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"}
                alt={event.title}
                className="w-full md:w-56 h-48 md:h-auto object-cover shrink-0"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-50 text-cacs-blue text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-cacs-blue leading-snug mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-4 font-light">
                    {event.description}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-500">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-cacs-emerald" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-cacs-pink" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* <button className="btn-secondary text-xs px-4 py-2">
                    S'inscrire
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Events;
