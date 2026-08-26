import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Globe, CheckCircle2, Award, Users } from 'lucide-react';

const AfricaBusinessDays = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="bg-cacs-blue text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-cacs-yellow uppercase tracking-widest">Événement Phare</span>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase mt-2 mb-4">AFRICA BUSINESS DAYS</h1>
          <p className="text-sm text-gray-200 font-light">
            La plateforme majeure d'affaires et de rencontres B2B au cœur de la région Dakhla-Oued Eddahab.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-cacs-pink uppercase tracking-widest">Concept & Vision</span>
            <h2 className="text-3xl font-extrabold text-cacs-blue uppercase">
              LE RENDEZ-VOUS ÉCONOMIQUE INCONTOURNABLE
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed font-light text-justify">
              Les <strong>Africa Business Days</strong> s'imposent comme la plateforme privilégiée d'échange et d'investissement entre les opérateurs économiques africains et internationaux. Organisé sous l'égide de la Chambre Africaine de Commerce et de Services (CACS), cet événement réunit décideurs politiques, chefs d'entreprises, investisseurs et experts sectoriels.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed font-light text-justify">
              Grâce au positionnement géostratégique unique des provinces du Sud du Maroc, la ville de Dakhla offre une vitrine d'excellence pour catalyser l'intégration économique inter-africaine.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                <Users className="text-cacs-blue shrink-0" size={24} />
                <div>
                  <div className="font-bold text-sm text-cacs-blue">+500</div>
                  <div className="text-[10px] text-gray-500">Participants B2B</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                <Globe className="text-cacs-green shrink-0" size={24} />
                <div>
                  <div className="font-bold text-sm text-cacs-green">+15</div>
                  <div className="text-[10px] text-gray-500">Pays représentés</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
            <img
              src="https://www.cacsafrica.org/assets/images/media/ii.jpg"
              alt="Africa Business Days"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title">
            <h4>Programme</h4>
            <h2>Temps Forts de l'Édition</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-cacs-pink flex items-center justify-center font-bold mb-4">01</div>
              <h3 className="font-bold text-cacs-blue text-base mb-2">Sessions B2B Qualifiées</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Des rendez-vous d'affaires individuels organisés sur-mesure pour maximiser les opportunités de partenariat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-cacs-blue flex items-center justify-center font-bold mb-4">02</div>
              <h3 className="font-bold text-cacs-blue text-base mb-2">Panels & Conférences</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Des débats de haut niveau portant sur la logistique, l'agro-industrie, l'économie bleue et les énergies renouvelables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-cacs-green flex items-center justify-center font-bold mb-4">03</div>
              <h3 className="font-bold text-cacs-blue text-base mb-2">Visites de Projets Phares</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Découverte du port Dakhla Atlantique et des grands chantiers structurants de la région.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/join" className="btn-primary shadow-lg px-8 py-3">
              Demander votre invitation / Adhérer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfricaBusinessDays;
