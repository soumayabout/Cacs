import React from 'react';
import {
  Target,
  Compass,
  Award,
  Shield,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const missions = [
  {
    number: '01',
    label: 'Pilier 1',
    title: "Promouvoir l'Investissement Sud-Sud",
    description:
      "Faciliter l’implantation et le développement des entreprises africaines dans les provinces du Sud du Maroc et créer une véritable passerelle vers le reste du continent.",
    items: [
      'Accompagnement sur les marchés transfrontaliers',
      'Veille économique et opportunités sectorielles',
      'Identification de partenaires stratégiques',
    ],
    icon: Target,
    theme: 'blue',
  },
  {
    number: '02',
    label: 'Pilier 2',
    title: 'Connecter les Décideurs Économiques',
    description:
      'Créer des espaces de rencontre entre entrepreneurs, investisseurs, institutions et décideurs afin de favoriser les partenariats et les échanges économiques.',
    items: [
      'Networking et rencontres B2B personnalisées',
      "Forums thématiques d'affaires",
      'Mise en relation investisseurs / porteurs de projets',
    ],
    icon: Compass,
    theme: 'green',
  },
  {
    number: '03',
    label: 'Pilier 3',
    title: 'Accompagner la Croissance des Entreprises',
    description:
      "Proposer aux entreprises un accompagnement adapté à leurs ambitions de développement, d'internationalisation et d'accès aux nouveaux marchés africains.",
    items: [
      'Conseil et orientation stratégique',
      'Accès à des opportunités commerciales',
      'Accompagnement à l’internationalisation',
    ],
    icon: Award,
    theme: 'pink',
  },
  {
    number: '04',
    label: 'Pilier 4',
    title: 'Renforcer la Coopération Africaine',
    description:
      "Contribuer à la construction d'un écosystème économique africain plus intégré en développant les échanges, la coopération institutionnelle et les partenariats Sud-Sud.",
    items: [
      'Développement de partenariats institutionnels',
      'Coopération économique interafricaine',
      'Promotion des échanges commerciaux',
    ],
    icon: Shield,
    theme: 'gold',
  },
];

const themeClasses = {
  blue: {
    badge: 'text-cacs-blue',
    box: 'bg-blue-50 border-blue-100',
    icon: 'text-cacs-blue',
  },
  green: {
    badge: 'text-cacs-green',
    box: 'bg-green-50 border-green-100',
    icon: 'text-cacs-green',
  },
  pink: {
    badge: 'text-cacs-pink',
    box: 'bg-pink-50 border-pink-100',
    icon: 'text-cacs-pink',
  },
  gold: {
    badge: 'text-cacs-yellow',
    box: 'bg-yellow-50 border-yellow-100',
    icon: 'text-cacs-yellow',
  },
};

const Missions = () => {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-white pb-20"
    >
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-cacs-blue px-4 py-20 text-center text-white md:py-24">
        {/* Decorative elements */}
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-cacs-yellow">
            Rôle & Orientations
          </span>

          <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            NOS MISSIONS
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cacs-yellow" />

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-gray-200 md:text-base">
            Découvrez les quatre piliers stratégiques de la CACS pour
            accélérer la croissance, l’investissement et la coopération
            économique en Afrique.
          </p>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 text-center md:pt-20">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-cacs-pink">
          Notre engagement
        </span>

        <h2 className="mt-3 text-2xl font-extrabold uppercase text-cacs-blue md:text-3xl">
          Un réseau au service du développement africain
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm font-light leading-7 text-gray-600">
          La Chambre Africaine de Commerce et de Services agit comme une
          plateforme de connexion entre les entreprises, investisseurs,
          institutions et décideurs économiques afin de favoriser une
          croissance durable et inclusive.
        </p>
      </section>

      {/* =========================================================
          4 MISSIONS
      ========================================================== */}
      <section className="mx-auto mt-16 max-w-7xl space-y-16 px-4 md:mt-20">
        {missions.map((mission, index) => {
          const Icon = mission.icon;
          const theme = themeClasses[mission.theme];

          const reversed = index % 2 !== 0;

          return (
            <article
              key={mission.number}
              className={`group grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                reversed ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* TEXT */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.2em] ${theme.badge}`}
                  >
                    {mission.label}
                  </span>

                  <span className="h-px w-10 bg-gray-200" />

                  <span className="text-xs font-bold text-gray-400">
                    {mission.number}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold uppercase leading-tight text-cacs-blue transition-colors duration-300 group-hover:text-cacs-green md:text-3xl">
                  {mission.title}
                </h2>

                <p className="text-sm font-light leading-7 text-gray-600">
                  {mission.description}
                </p>

                <ul className="space-y-3 pt-2">
                  {mission.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle
                        size={17}
                        className={`mt-0.5 shrink-0 ${theme.icon}`}
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <div
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide ${theme.badge}`}
                  >
                    Notre engagement
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>

              {/* ICON / VISUAL */}
              <div
                className={`relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[2rem] border p-10 ${theme.box} transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl`}
              >
                {/* Decorative circles */}
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-current opacity-10"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-current opacity-10"
                />

                <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-white shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                  <Icon
                    size={72}
                    strokeWidth={1.5}
                    className={`${theme.icon} transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>

                <span
                  className={`absolute bottom-6 right-7 text-5xl font-black opacity-10 ${theme.icon}`}
                >
                  {mission.number}
                </span>
              </div>
            </article>
          );
        })}
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="mx-auto mt-20 max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-cacs-blue px-6 py-12 text-center text-white md:px-12">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10"
          />

          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cacs-yellow">
              Rejoignez notre réseau
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold uppercase md:text-3xl">
              Construisons ensemble les opportunités de demain
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-gray-200">
              Entreprises, investisseurs et partenaires institutionnels :
              développons ensemble les échanges économiques en Afrique.
            </p>

            <a
              href="/join"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold uppercase tracking-wide text-cacs-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Devenir adhérent
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Missions;