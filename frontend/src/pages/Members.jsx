import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import SEO from '../components/common/SEO.jsx';
import {
  Search,
  Building2,
  MapPin,
  Globe,
  Mail,
} from 'lucide-react';

const mockMembers = [
  {
    id: 1,
    companyName: 'Société de Transport & Logistique du Sud',
    sector: 'Transport & Logistique',
    country: 'Maroc',
    city: 'Dakhla',
    contactName: 'Karim Bennani',
    contactEmail: 'contact@stls.ma',
    website: 'www.stls.ma',
    type: 'Grande Entreprise',
    description:
      "Spécialiste du transport frigorifique et du transit transfrontalier vers l'Afrique de l'Ouest.",
  },
  {
    id: 2,
    companyName: 'Office Holding Africa',
    sector: 'Finance & Investissement',
    country: 'Sénégal',
    city: 'Dakar',
    contactName: 'Amadou Diallo',
    contactEmail: 'adiallo@officeholding.sn',
    website: 'www.officeholding.sn',
    type: 'Grande Entreprise',
    description:
      "Fonds d'investissement dédié aux infrastructures de développement en zone CEDEAO.",
  },
  {
    id: 3,
    companyName: 'YOOL Digital Services',
    sector: 'Technologies & IT',
    country: 'Maroc',
    city: 'Casablanca',
    contactName: 'Sarra Mansouri',
    contactEmail: 'info@yool.ma',
    website: 'www.yool.ma',
    type: 'Startup',
    description:
      'Éditeur de solutions de numérisation et de plateformes bancaires pour le marché africain.',
  },
  {
    id: 4,
    companyName: 'Maghreb Agro Industries',
    sector: 'Agroalimentaire',
    country: "Côte d'Ivoire",
    city: 'Abidjan',
    contactName: 'Kouassi Yao',
    contactEmail: 'ky@maghrebagro.ci',
    website: 'www.maghrebagro.ci',
    type: 'PME',
    description:
      'Transformation et exportation de produits agricoles de haute valeur ajoutée.',
  },
];

const Members = () => {
  const [members, setMembers] = useState(mockMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('Tous');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchMembers = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

        const response = await axios.get(`${apiUrl}/members`);

        const data = response?.data?.data;

        if (isMounted && Array.isArray(data) && data.length > 0) {
          setMembers(data);
        }
      } catch (error) {
        console.warn(
          'Impossible de charger les adhérents depuis l’API. Utilisation des données locales.',
          error
        );
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchMembers();

    return () => {
      isMounted = false;
    };
  }, []);

  const sectors = useMemo(() => {
    const uniqueSectors = [
      ...new Set(
        members
          .map((member) => member?.sector)
          .filter(Boolean)
      ),
    ];

    return ['Tous', ...uniqueSectors];
  }, [members]);

  const filteredMembers = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return members.filter((member) => {
      const companyName = String(
        member?.companyName || ''
      ).toLowerCase();

      const sector = String(
        member?.sector || ''
      ).toLowerCase();

      const country = String(
        member?.country || ''
      ).toLowerCase();

      const city = String(
        member?.city || ''
      ).toLowerCase();

      const matchesSearch =
        !normalizedSearch ||
        companyName.includes(normalizedSearch) ||
        sector.includes(normalizedSearch) ||
        country.includes(normalizedSearch) ||
        city.includes(normalizedSearch);

      const matchesSector =
        selectedSector === 'Tous' ||
        !selectedSector ||
        member?.sector === selectedSector;

      return matchesSearch && matchesSector;
    });
  }, [members, searchTerm, selectedSector]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSector('Tous');
  };

  return (
    <>
      <SEO
        title="Nos Adhérents"
        description="Découvrez le réseau des entreprises membres de la Chambre Africaine de Commerce et de Services."
        keywords="CACS Africa, adhérents, membres, entreprises, réseau, Afrique, Maroc"
      />

      <main
        id="main-content"
        className="min-h-screen bg-gray-50 pb-16"
      >
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="bg-cacs-blue px-4 py-16 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cacs-gold">
              Réseau CACS Africa
            </span>

            <h1 className="mt-3 mb-4 text-3xl font-extrabold uppercase md:text-5xl">
              NOS ADHÉRENTS
            </h1>

            <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-gray-200 md:text-base">
              Découvrez le réseau des entreprises membres de la Chambre
              Africaine de Commerce et de Services.
            </p>
          </div>
        </section>

        {/* =========================================================
            CONTENT
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-4 pt-10">
          {/* =======================================================
              SEARCH + FILTERS
          ======================================================== */}
          <div className="mb-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* SEARCH */}
              <div className="relative w-full lg:max-w-md">
                <Search
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <label
                  htmlFor="members-search"
                  className="sr-only"
                >
                  Rechercher parmi les adhérents
                </label>

                <input
                  id="members-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Rechercher une entreprise, pays, secteur..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition focus:border-cacs-blue focus:bg-white focus:ring-2 focus:ring-cacs-blue/20"
                  autoComplete="off"
                />
              </div>

              {/* FILTERS */}
              <div
                className="flex flex-wrap gap-2"
                aria-label="Filtrer les adhérents par secteur"
              >
                {sectors.map((sector) => {
                  const isActive =
                    selectedSector === sector;

                  return (
                    <button
                      key={sector}
                      type="button"
                      onClick={() =>
                        setSelectedSector(sector)
                      }
                      aria-pressed={isActive}
                      className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cacs-blue focus-visible:ring-offset-2 ${
                        isActive
                          ? 'bg-cacs-blue text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {sector}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =======================================================
              RESULT COUNT
          ======================================================== */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-cacs-blue">
                {filteredMembers.length}{' '}
                {filteredMembers.length > 1
                  ? 'adhérents'
                  : 'adhérent'}
              </p>

              {(searchTerm ||
                selectedSector !== 'Tous') && (
                <p className="mt-1 text-xs text-gray-500">
                  Résultats correspondant à votre recherche
                </p>
              )}
            </div>

            {(searchTerm ||
              selectedSector !== 'Tous') && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-semibold text-cacs-blue underline underline-offset-2 hover:text-cacs-emerald"
              >
                Réinitialiser
              </button>
            )}
          </div>

          {/* =======================================================
              LOADING
          ======================================================== */}
          {isLoading && (
            <div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              aria-label="Chargement des adhérents"
              aria-busy="true"
            >
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="animate-pulse rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-gray-200" />
                    <div className="h-6 w-24 rounded-full bg-gray-200" />
                  </div>

                  <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />

                  <div className="mb-4 h-4 w-1/2 rounded bg-gray-200" />

                  <div className="mb-2 h-3 w-full rounded bg-gray-200" />

                  <div className="mb-6 h-3 w-5/6 rounded bg-gray-200" />

                  <div className="border-t border-gray-100 pt-4">
                    <div className="mb-2 h-3 w-2/3 rounded bg-gray-200" />
                    <div className="h-3 w-4/5 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* =======================================================
              MEMBERS GRID
          ======================================================== */}
          {!isLoading &&
            filteredMembers.length > 0 && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredMembers.map((member) => (
                  <article
                    key={member.id}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* CARD MAIN */}
                    <div>
                      {/* CARD HEADER */}
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-cacs-blue"
                          aria-hidden="true"
                        >
                          <Building2
                            size={24}
                            strokeWidth={1.8}
                          />
                        </div>

                        {member.type && (
                          <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-cacs-emerald">
                            {member.type}
                          </span>
                        )}
                      </div>

                      {/* COMPANY NAME */}
                      <h2 className="mb-1 text-base font-bold leading-snug text-cacs-blue">
                        {member.companyName ||
                          'Entreprise'}
                      </h2>

                      {/* SECTOR */}
                      {member.sector && (
                        <p className="mb-3 text-xs font-medium text-cacs-emerald">
                          {member.sector}
                        </p>
                      )}

                      {/* DESCRIPTION */}
                      {member.description && (
                        <p className="mb-5 line-clamp-3 text-xs font-light leading-relaxed text-gray-600">
                          {member.description}
                        </p>
                      )}
                    </div>

                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================== */}
                    <div className="space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-500">
                      {/* LOCATION */}
                      {(member.city ||
                        member.country) && (
                        <div className="flex items-start gap-2">
                          <MapPin
                            size={14}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-cacs-emerald"
                          />

                          <span>
                            {[
                              member.city,
                              member.country,
                            ]
                              .filter(Boolean)
                              .join(', ')}
                          </span>
                        </div>
                      )}

                      {/* EMAIL */}
                      {member.contactEmail && (
                        <div className="flex items-start gap-2">
                          <Mail
                            size={14}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-cacs-blue"
                          />

                          <a
                            href={`mailto:${member.contactEmail}`}
                            className="break-all text-gray-600 transition-colors hover:text-cacs-blue hover:underline"
                          >
                            {member.contactEmail}
                          </a>
                        </div>
                      )}

                      {/* WEBSITE */}
                      {member.website && (
                        <div className="flex items-start gap-2">
                          <Globe
                            size={14}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-cacs-emerald"
                          />

                          <a
                            href={
                              member.website.startsWith(
                                'http://'
                              ) ||
                              member.website.startsWith(
                                'https://'
                              )
                                ? member.website
                                : `https://${member.website}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all text-cacs-blue hover:underline"
                          >
                            {member.website}
                          </a>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}

          {/* =======================================================
              EMPTY STATE
          ======================================================== */}
          {!isLoading &&
            filteredMembers.length === 0 && (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <Search
                    size={24}
                    aria-hidden="true"
                  />
                </div>

                <h2 className="text-lg font-bold text-cacs-blue">
                  Aucun adhérent trouvé
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                  Aucun résultat ne correspond aux
                  critères de recherche sélectionnés.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded-xl bg-cacs-blue px-5 py-2.5 text-xs font-bold text-white transition hover:bg-cacs-blue/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cacs-blue focus-visible:ring-offset-2"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
        </section>
      </main>
    </>
  );
};

export default Members;