import React from 'react';
import SEO from '../components/common/SEO.jsx';
import { ShieldCheck, Users, Briefcase, FileText, Globe } from 'lucide-react';

const Services = () => {
  return (
    <>
      <SEO
        title="Nos Services"
        description="Découvrez les services de la Chambre Africaine de Commerce et de Services : mise en relation B2B, accompagnement implantation, plaidoyer et représentation pour faciliter vos affaires en Afrique."
        keywords="CACS Africa, Services, Mise en relation, B2B, Accompagnement, Implantation, Plaidoyer, Lobbying, Afrique, Maroc"
      />
      <div className="bg-gray-50 min-h-screen pb-16" id="main-content">
      {/* Banner */}
      <div className="bg-cacs-blue text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-cacs-gold uppercase tracking-widest">Services</span>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase mt-2 mb-4">NOS SERVICES</h1>
          <p className="text-sm text-gray-200 font-light">
            Une palette complète de services à destination des entreprises membres
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-cacs-blue flex items-center justify-center">
            <Users size={24} />
          </div>
          <h3 className="font-bold text-lg text-cacs-blue">Mise en Relation D'affaires</h3>
          <p className="text-xs text-gray-600 font-light leading-relaxed">
            Mise en relation directe avec les acteurs clés, partenaires commerciaux et investisseurs potentiels dans toute l'Afrique.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-pink-100 text-cacs-pink flex items-center justify-center">
            <Briefcase size={24} />
          </div>
          <h3 className="font-bold text-lg text-cacs-blue">Accompagnement Implantation</h3>
          <p className="text-xs text-gray-600 font-light leading-relaxed">
            Support stratégique et logistique complet pour la création de filiales et l'installation dans les provinces du Sud du Maroc.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-green-100 text-cacs-emerald flex items-center justify-center">
            <ShieldCheck size={24} />
          </div>
          <h3 className="font-bold text-lg text-cacs-blue">Plaidoyer & Représentation</h3>
          <p className="text-xs text-gray-600 font-light leading-relaxed">
            Porte-parole et défense des intérêts des entreprises membres auprès des instances décisionnelles privées et publiques.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;
