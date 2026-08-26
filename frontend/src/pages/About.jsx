import React from 'react';
import SEO from '../components/common/SEO.jsx';
import { Link } from 'react-router-dom';

const governance = [];

const boardMembers = [
  { name: 'ABDELMONAIM FAOUZI', role: 'Président de la CACS', image: 'https://www.cacsafrica.org/assets/images/media/photofaouzi.jpg' },
  { name: 'Abdelouahab Ennasri', role: 'Vice-Président', image: 'https://www.cacsafrica.org/assets/images/users/Aziz%20Alaoui.jpeg' },
  { name: 'Moulay Lahcen Alyoussefi', role: 'Vice-Président', image: 'https://www.cacsafrica.org/assets/images/users/Mohammed%20Barhich.jpeg' },
  { name: 'Ousmane Cissé', role: 'Secrétaire Général', image: 'https://www.cacsafrica.org/assets/images/users/Youssef%20Koun.jpeg' },
  { name: 'Juliette Vane', role: 'Conseillère Principale', image: 'https://www.cacsafrica.org/assets/images/users/Alia%20Benomar.jpeg' },
  { name: 'Mohamed Ali El Kettani', role: 'Trésorier', image: 'https://www.cacsafrica.org/assets/images/users/Mohamed%20Amine%20Gaouji.jpeg' }
];

const About = () => {
  return (
    <>
      <SEO
        title="À Propos"
        description="Découvrez la vision et la mission de la Chambre Africaine de Commerce et de Services (CACS). Notre équipe de direction et notre engagement pour le développement des échanges en Afrique."
        keywords="CACS Africa, À Propos, Vision, Mission, Gouvernance, Président, Conseil d'administration, Afrique, Maroc"
      />
      <div className="bg-gray-50 min-h-screen pb-16" id="main-content">
      {/* Banner */}
      <div className="bg-cacs-blue text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-cacs-gold uppercase tracking-widest">À Propos</span>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase mt-2 mb-4">À PROPOS DE NOUS</h1>
          <p className="text-sm text-gray-200 font-light">
            Découvrez la vision et la mission de la Chambre Africaine de Commerce et de Services
          </p>
        </div>
      </div>

      {/* Mot du Président */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="text-center bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <img
              src="https://www.cacsafrica.org/assets/images/media/photofaouzi.jpg"
              alt="Abdelmonaim Faouzi"
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-cacs-emerald shadow-md"
            />
            <h3 className="font-bold text-cacs-emerald text-lg">ABDELMONAIM FAOUZI</h3>
            <p className="text-xs font-semibold text-cacs-blue uppercase">Président de la CACS</p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-extrabold text-cacs-blue uppercase border-b border-gray-100 pb-3">
              MOT DU PRÉSIDENT
            </h2>
            <div className="text-xs text-gray-700 leading-relaxed space-y-4 font-light text-justify">
              <p>
                La Chambre Africaine de Commerce et de Services est une plateforme de création de valeur dont l'objectif est de faciliter l'implantation des entreprises du continent, notamment celles de la sous-région ouest-africaine, et de fertiliser leurs intérêts dans le terreau exceptionnellement fécond des Provinces du sud du Maroc.
              </p>
              <p>
                Conçue pour servir de véhicule qui matérialise les dynamiques économiques portées par les territoires et ancrer le positionnement des régions du Sud en tant que trait d'union entre l'Afrique et le reste du monde, la Chambre Africaine de Commerce et de Services a pour vocation de tisser des liens d'affaires entre ses membres et d'ériger des ponts commerciaux entre le Maroc et leurs différents pays d'origine.
              </p>
              <p>
                ‘’Porte du Maroc’’ sur sa profondeur africaine, les régions de Dakhla - Oued Eddahab et Laâyoune - Sakia El Hamra disposent de puissants atouts, tels qu'un positionnement géographique charnière, un cadre environnemental exceptionnel, un capital humain jeune et à fort potentiel, des milliers de kilomètres de littoral et le premier bassin halieutique du Maroc.
              </p>
              <p>
                Se basant sur ces atouts, le Royaume a impulsé des plans de développement d'envergure visant à faire de ces régions un hub logistique, portuaire et aéroportuaire de référence et à les doter d'un rayonnement international à l'horizon 2030.
              </p>
              <p className="font-medium text-cacs-emerald italic">
                En tant que président de la CACS et au nom du conseil d'administration, nous sommes heureux de participer à cette dynamique porteuse d'espoir et de prospérité pour notre continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membres du Conseil d'Administration */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title">
            <h4>Gouvernance</h4>
            <h2>Membres du Conseil d'Administration</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md transition">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-cacs-blue"
                />
                <h4 className="font-bold text-cacs-blue text-xs leading-tight mb-1">{member.name}</h4>
                <p className="text-[10px] text-gray-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub Maroc-Afrique */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-cacs-pink uppercase tracking-widest">Hub Économique</span>
          <h2 className="text-3xl font-extrabold text-cacs-blue uppercase mt-1 mb-12">
            HUB DES AFFAIRES MAROC AFRIQUE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 text-center">
              <div className="text-4xl font-extrabold text-cacs-pink mb-2">+24</div>
              <div className="text-xs font-bold text-cacs-blue uppercase">Représentations diplomatiques</div>
              <p className="text-[11px] text-gray-600 mt-2">Accréditées dans le Sud du Maroc</p>
            </div>
            <div className="p-8 bg-green-50/50 rounded-2xl border border-green-100 text-center">
              <div className="text-4xl font-extrabold text-cacs-emerald mb-2">+7</div>
              <div className="text-xs font-bold text-cacs-blue uppercase">Milliers de Sud-Sud</div>
              <p className="text-[11px] text-gray-600 mt-2">Formés dans nos structures</p>
            </div>
            <div className="p-8 bg-pink-50/50 rounded-2xl border border-pink-100 text-center">
              <div className="text-4xl font-extrabold text-cacs-blue mb-2">100%</div>
              <div className="text-xs font-bold text-cacs-blue uppercase">Normes internationales</div>
              <p className="text-[11px] text-gray-600 mt-2">Standards de services certifiés</p>
            </div>
            <div className="p-8 bg-yellow-50/50 rounded-2xl border border-yellow-100 text-center">
              <div className="text-4xl font-extrabold text-cacs-orange mb-2">24/7</div>
              <div className="text-xs font-bold text-cacs-blue uppercase">Accompagnement réactif</div>
              <p className="text-[11px] text-gray-600 mt-2">Pour l'ensemble de vos projets</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
