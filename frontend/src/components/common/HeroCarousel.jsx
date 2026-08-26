import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Le Président de la CACS, Faouzi Abdelmonaim, renforce les relations d'affaires entre le Maroc et le Burundi",
    subtitle: "Visite de travail à la Chancellerie du Burundi à Rabat",
    badge: "Coopération Régionale",
    image: "https://www.cacsafrica.org/assets/images/events/Bannier%20CACS%20Africa%20Business%20Days-02.jpg",
    link: "/events"
  },
  {
    id: 2,
    title: "LA CACS PARTICIPE À LA TABLE RONDE DU BURUNDI ET RENFORCE SA PRÉSENCE EN AFRIQUE DE L'EST",
    subtitle: "Un nouveau chapitre de coopération bilatérale et commerciale",
    badge: "Table Ronde",
    image: "https://www.cacsafrica.org/assets/images/media/oo.png",
    link: "/events"
  },
  {
    id: 3,
    title: "PARTENARIAT : SIGNATURE DE CONVENTION CFCIM X CACS",
    subtitle: "Dakhla - Hub stratégique des affaires Maroc - Afrique",
    badge: "Partenariat Stratégique",
    image: "https://www.cacsafrica.org/assets/images/media/ii.jpg",
    link: "/about"
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[520px] bg-cacs-navy overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Overlay Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cacs-navy via-cacs-blue/80 to-transparent" />
          </div>

          {/* Slide Content */}
          <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 text-white z-20">
            <span className="inline-block bg-cacs-pink text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 w-max">
              {slide.badge}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight mb-4 drop-shadow-md">
              {slide.title}
            </h1>
            <p className="text-sm md:text-lg text-gray-200 max-w-2xl mb-8 font-light">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={slide.link} className="btn-primary text-sm px-7 py-3 font-bold uppercase tracking-wider shadow-lg">
                En savoir plus
              </Link>
              <Link to="/join" className="btn-secondary text-sm px-7 py-3 font-bold uppercase tracking-wider shadow-lg">
                Demande d'adhésion
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-cacs-blue/80 text-white flex items-center justify-center hover:bg-cacs-pink transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-cacs-gold"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-cacs-blue/80 text-white flex items-center justify-center hover:bg-cacs-pink transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-cacs-gold"
        aria-label="Diapositive suivante"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2" role="tablist" aria-label="Indicateurs de diapositives">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-cacs-gold' : 'w-2.5 bg-white/60'
            }`}
            aria-label={`Aller à la diapositive ${i + 1}`}
            aria-selected={i === current}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
