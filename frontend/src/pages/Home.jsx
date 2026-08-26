import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/common/HeroCarousel.jsx';
import SEO from '../components/common/SEO.jsx';
import { Globe, Building2, TrendingUp, Users, ShieldCheck, Award, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <>
      <SEO
        title="Accueil"
        description="CACS Africa - Chambre Africaine de Commerce et de Services. Plateforme institutionnelle dédiée au développement des échanges, des partenariats et des opportunités d'affaires en Afrique."
        keywords="CACS Africa, Chambre Africaine, Commerce, Services, Afrique, Partenariat, Business, Maroc, Dakhla, Laâyoune, Accueil"
      />
      <div className="bg-gray-50 min-h-screen" id="main-content">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* 2. Actualités Flash / Headlines */}
      <section className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Actu 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
              <img
                src="https://www.cacsafrica.org/assets/images/events/cf.jpg"
                alt="Table ronde"
                className="w-full md:w-48 h-36 object-cover rounded-xl shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-cacs-pink uppercase tracking-wider">Événement Majeur</span>
                <h3 className="text-base font-bold text-cacs-blue mt-1 mb-2 leading-snug">
                  LA CACS PARTICIPE À LA TABLE RONDE DU BURUNDI ET RENFORCE SA PRÉSENCE EN AFRIQUE DE L'EST
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3 mb-3">
                  La Chambre Africaine de Commerce et de Services (CACS) a pris part à la Table Ronde organisée à Bujumbura, marquant une étape clé dans le renforcement de la coopération bilatérale.
                </p>
                <Link to="/events" className="text-xs font-bold text-cacs-emerald flex items-center gap-1 hover:gap-2 transition-all">
                  Lire la suite <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Actu 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
              <img
                src="https://www.cacsafrica.org/assets/images/events/2.jpg"
                alt="Rencontre d'échanges"
                className="w-full md:w-48 h-36 object-cover rounded-xl shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-cacs-emerald uppercase tracking-wider">Diplomatie Économique</span>
                <h3 className="text-base font-bold text-cacs-blue mt-1 mb-2 leading-snug">
                  RENCONTRE D'ÉCHANGES : L'ESPACE DES PAYS DU SAHEL À L'OCÉAN ATLANTIQUE
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3 mb-3">
                  Perspectives et opportunités de l'initiative Atlantique Royale pour le désenclavement et l'intégration de la sous-région africaine.
                </p>
                <Link to="/events" className="text-xs font-bold text-cacs-emerald flex items-center gap-1 hover:gap-2 transition-all">
                  Lire la suite <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Qui Sommes-Nous */}
      <section className="py-16 bg-white" id="qui_sommes_nous">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title">
            <h4>À Propos</h4>
            <h2>Qui sommes-nous ?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                La <strong className="text-cacs-blue font-semibold">Chambre Africaine de Commerce et de Services (CACS)</strong> est une plateforme de création de valeur dont l'objectif est de faciliter l'implantation des entreprises du continent, notamment celles de la sous-région ouest-africaine, et de fertiliser leurs intérêts dans le terreau exceptionnellement fécond des Provinces du Sud du Maroc (Dakhla & Laâyoune).
              </p>
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                Conçue pour servir de véhicule qui matérialise les dynamiques économiques portées par les territoires et ancrer le positionnement des régions du Sud en tant que trait d'union entre l'Afrique et le reste du monde.
              </p>
              <div className="pt-2">
                <Link to="/about" className="btn-secondary shadow-md">
                  En savoir plus sur la CACS
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-tr from-cacs-navy to-cacs-blue p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <Globe size={300} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cacs-gold">Vocation Stratégique</h3>
                <p className="text-sm leading-relaxed mb-6 font-light">
                  "Tisser des liens d'affaires entre nos membres et ériger des ponts commerciaux entre le Maroc et leurs différents pays d'origine."
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                  <div>
                    <div className="text-2xl font-black text-cacs-gold">+24</div>
                    <div className="text-xs text-gray-200">Représentations diplomatiques</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-cacs-emerald">+7</div>
                    <div className="text-xs text-gray-200">Milliers de Sud-Sud à nos côtés</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Appuis au Tissu de l'Entreprise / Nos Piliers */}
      <section className="py-16 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title">
            <h4>Engagement</h4>
            <h2>Appuis au tissu de l'entreprise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-cacs-blue transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-cacs-blue flex items-center justify-center mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="font-bold text-cacs-blue text-base mb-2">FÉDÉRER</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rassembler les acteurs économiques africains et marocains pour créer des synergies d'investissement durables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-cacs-pink transition-all">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-cacs-pink flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-cacs-blue text-base mb-2">FACILITER</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Simplifier l'installation, les démarches administratives et le networking des entreprises en Afrique.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-cacs-green transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-cacs-green flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-cacs-blue text-base mb-2">RENFORCER</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Développer les compétences des cadres et chefs d'entreprises à travers des formations ciblées.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-cacs-orange transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-cacs-orange flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-cacs-blue text-base mb-2">DÉVELOPPER</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Booster la compétitivité internationale et le passage à l'échelle des entreprises membres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nos Services */}
      <section className="py-16 bg-white" id="nos_services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title">
            <h4>Nos Prestations</h4>
            <h2>Qu'est-ce que nous offrons ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card p-8 border border-gray-100 text-center hover:border-cacs-pink">
              <div className="w-16 h-16 rounded-full bg-pink-100 text-cacs-pink flex items-center justify-center mx-auto mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-lg font-bold text-cacs-blue mb-3">Mise en Relation Directe</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Mise en relation d'affaires sur-mesure pour trouver vos futurs partenaires, investisseurs et clients stratégiques.
              </p>
              <Link to="/services" className="text-xs font-bold text-cacs-pink inline-flex items-center gap-1 hover:gap-2 transition-all">
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="card p-8 border border-gray-100 text-center hover:border-cacs-blue">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-cacs-blue flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-lg font-bold text-cacs-blue mb-3">Plaidoyer & Lobbying</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Défense des intérêts économiques des membres auprès des instances décisionnelles publiques et privées.
              </p>
              <Link to="/services" className="text-xs font-bold text-cacs-blue inline-flex items-center gap-1 hover:gap-2 transition-all">
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="card p-8 border border-gray-100 text-center hover:border-cacs-green">
              <div className="w-16 h-16 rounded-full bg-green-100 text-cacs-emerald flex items-center justify-center mx-auto mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-lg font-bold text-cacs-blue mb-3">Accompagnement Sur Mesure</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Accompagnement juridique, fiscal et logistique lors de l'implantation de vos filiales dans les provinces du Sud.
              </p>
              <Link to="/services" className="text-xs font-bold text-cacs-emerald inline-flex items-center gap-1 hover:gap-2 transition-all">
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partenariats & Conventions */}
      <section className="py-16 bg-cacs-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-cacs-gold uppercase tracking-widest">Temps Forts</span>
              <h2 className="text-3xl font-extrabold text-white mt-2 mb-6">
                PARTENARIAT : SIGNATURE DE CONVENTION CFCIM X CACS
              </h2>
              <p className="text-sm text-gray-200 leading-relaxed mb-6 font-light">
                La Chambre Française de Commerce et d'Industrie du Maroc (CFCIM) et la Chambre Africaine de Commerce et de Services (CACS) ont scellé une alliance stratégique pour stimuler les opportunités d'affaires à Dakhla et dans l'ensemble du continent.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs text-gray-200">
                  <CheckCircle2 size={16} className="text-cacs-emerald shrink-0" />
                  <span>Facilitation des échanges commerciaux inter-africains</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-200">
                  <CheckCircle2 size={16} className="text-cacs-emerald shrink-0" />
                  <span>Accompagnement conjoint des entreprises adhérentes</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-200">
                  <CheckCircle2 size={16} className="text-cacs-emerald shrink-0" />
                  <span>Organisation des Africa Business Days</span>
                </div>
              </div>
              <Link to="/join" className="btn-primary shadow-lg">
                Rejoignez le Réseau CACS
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://www.cacsafrica.org/assets/images/media/signature.jpg"
                alt="Signature de convention"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Logos Adhérents / Confiance */}
<section className="relative overflow-hidden bg-gray-50 py-16">
  <div className="mx-auto max-w-7xl px-4 text-center">
    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-cacs-pink">
      Nos Adhérents
    </span>

    <h2 className="mb-3 text-2xl font-bold text-cacs-blue md:text-3xl">
      LES SOCIÉTÉS QUI NOUS ONT FAIT CONFIANCE
    </h2>

    <p className="mx-auto mb-10 max-w-2xl text-sm text-gray-500">
      Un réseau d'entreprises engagées pour développer les échanges
      commerciaux et les partenariats en Afrique.
    </p>
  </div>

  {/* Carousel infini */}
  <div className="relative w-full overflow-hidden">
    {/* Dégradés sur les côtés */}
    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent md:w-40" />
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent md:w-40" />

    <div className="flex w-max animate-[logo-scroll_28s_linear_infinite] hover:[animation-play-state:paused]">
      {[
        {
          name: 'Société de Transport',
          short: 'ST',
        },
        {
          name: 'Office Holding',
          short: 'OH',
        },
        {
          name: 'Africa Invest Group',
          short: 'AI',
        },
        {
          name: 'YOOL Services',
          short: 'YS',
        },
        {
          name: 'Maghreb Commercial',
          short: 'MC',
        },
        {
          name: 'Africa Business',
          short: 'AB',
        },
        {
          name: 'CACS Partners',
          short: 'CP',
        },
      ].map((company, index) => (
        <div
          key={`logo-${index}`}
          className="mx-3 flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cacs-blue hover:shadow-lg md:h-32 md:w-60"
        >
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cacs-blue text-sm font-extrabold text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
              {company.short}
            </div>

            {/* Nom */}
            <div className="text-left">
              <p className="text-sm font-bold leading-tight text-cacs-blue">
                {company.name}
              </p>

              <span className="mt-1 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
                Adhérent CACS
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* DUPLICATION POUR LA BOUCLE INFINIE */}
      {[
        {
          name: 'Société de Transport',
          short: 'ST',
        },
        {
          name: 'Office Holding',
          short: 'OH',
        },
        {
          name: 'Africa Invest Group',
          short: 'AI',
        },
        {
          name: 'YOOL Services',
          short: 'YS',
        },
        {
          name: 'Maghreb Commercial',
          short: 'MC',
        },
        {
          name: 'Africa Business',
          short: 'AB',
        },
        {
          name: 'CACS Partners',
          short: 'CP',
        },
      ].map((company, index) => (
        <div
          key={`logo-copy-${index}`}
          aria-hidden="true"
          className="mx-3 flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cacs-blue hover:shadow-lg md:h-32 md:w-60"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cacs-blue text-sm font-extrabold text-white shadow-sm">
              {company.short}
            </div>

            <div className="text-left">
              <p className="text-sm font-bold leading-tight text-cacs-blue">
                {company.name}
              </p>

              <span className="mt-1 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
                Adhérent CACS
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      </div>
    </>
  );
};

export default Home;
