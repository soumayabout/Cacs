import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cacs-navy text-white pt-16 pb-8 border-t-4 border-cacs-emerald">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Col 1: About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 border-2 border-cacs-gold shadow-inner overflow-hidden">
                <img 
                  src="/logo.jpeg" 
                  alt="Logo CACS" 
                  className="w-full h-full object-cover rounded-full" 
                />
            </div>
            <div>
              <div className="font-bold text-base uppercase leading-tight">CACS AFRICA</div>
              <div className="text-[9px] text-cacs-emerald font-semibold">LA CHAMBRE AFRICAINE DE COMMERCE ET DE SERVICES</div>
            </div>
          </div>
          <p className="text-gray-300 text-xs leading-relaxed mb-6">
            La Chambre Africaine de Commerce et de Services a pour vocation de tisser des liens d'affaires entre nos membres et d'ériger des ponts commerciaux entre le Maroc et leurs différents pays d'origine.
          </p>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center text-white hover:bg-cacs-pink transition">
              <Facebook size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center text-white hover:bg-cacs-pink transition">
              <Linkedin size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center text-white hover:bg-cacs-pink transition">
              <Twitter size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center text-white hover:bg-cacs-pink transition">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-cacs-gold border-b border-blue-900 pb-2">Navigation</h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li><Link to="/" className="hover:text-cacs-gold transition flex items-center gap-1.5"><ArrowRight size={12} className="text-cacs-emerald" /> Accueil</Link></li>
            <li><Link to="/about" className="hover:text-cacs-gold transition flex items-center gap-1.5"><ArrowRight size={12} className="text-cacs-emerald" /> À propos de nous</Link></li>
            <li><Link to="/missions" className="hover:text-cacs-gold transition flex items-center gap-1.5"><ArrowRight size={12} className="text-cacs-emerald" /> Nos Missions</Link></li>
            <li><Link to="/services" className="hover:text-cacs-gold transition flex items-center gap-1.5"><ArrowRight size={12} className="text-cacs-emerald" /> Nos Services</Link></li>
            <li><Link to="/events" className="hover:text-cacs-gold transition flex items-center gap-1.5"><ArrowRight size={12} className="text-cacs-emerald" /> Nos Évènements</Link></li>
            <li><Link to="/members" className="hover:text-cacs-gold transition flex items-center gap-1.5"><ArrowRight size={12} className="text-cacs-emerald" /> Nos Adhérents</Link></li>
            <li><Link to="/abd" className="hover:text-cacs-gold transition flex items-center gap-1.5"><ArrowRight size={12} className="text-cacs-emerald" /> Africa Business Days</Link></li>
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-cacs-gold border-b border-blue-900 pb-2">Contact & Sièges</h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-cacs-pink shrink-0 mt-0.5" />
              <span>Avenue Oued Eddahab, Dakhla, Maroc / Laâyoune, Sakia El Hamra</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-cacs-emerald shrink-0" />
              <span>+212 5 28 89 00 00 / +212 6 00 00 00 00</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-cacs-gold shrink-0" />
              <span>contact@cacsafrica.org</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-cacs-gold border-b border-blue-900 pb-2">Newsletter</h4>
          <p className="text-xs text-gray-300 mb-4 leading-relaxed">
            Inscrivez-vous à notre newsletter pour recevoir les dernières opportunités et événements d'affaires en Afrique.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="bg-blue-950 text-white text-xs border border-blue-800 rounded px-3 py-2.5 focus:outline-none focus:border-cacs-emerald"
            />
            <button type="submit" className="btn-secondary text-xs w-full py-2.5 text-center font-bold uppercase tracking-wider">
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-blue-900/60 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <div>
          © {new Date().getFullYear()} CACS AFRICA – La Chambre Africaine de Commerce et de Services. Tous droits réservés.
        </div>
        <div className="flex gap-4">
          <Link to="/join" className="hover:text-cacs-gold">Demande d'adhésion</Link>
          <span>•</span>
          <Link to="/login" className="hover:text-cacs-gold">Espace Membre</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
