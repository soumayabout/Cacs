import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
  Calendar,
  ArrowRight,
  Newspaper,
  RefreshCw,
} from 'lucide-react';
import SEO from '../components/common/SEO.jsx';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80';

const mockNews = [
  {
    id: 1,
    slug: 'cacs-participe-table-ronde-burundi',
    title:
      "LA CACS PARTICIPE À LA TABLE RONDE DU BURUNDI ET RENFORCE SA PRÉSENCE EN AFRIQUE DE L'EST",
    excerpt:
      "La Chambre Africaine de Commerce et de Services a pris part à la Table Ronde organisée à Bujumbura, marquant une étape clé dans le renforcement de la coopération bilatérale.",
    content:
      "La Chambre Africaine de Commerce et de Services (CACS) a pris part à la Table Ronde organisée à Bujumbura, marquant une étape clé dans le renforcement de la coopération bilatérale. Cette participation s'inscrit dans la stratégie de la CACS d'étendre son réseau et de faciliter les échanges commerciaux entre le Maroc et les pays d'Afrique de l'Est.",
    date: '2026-01-20',
    category: 'Coopération',
    image: 'https://www.cacsafrica.org/assets/images/events/cf.jpg',
    author: 'Équipe CACS',
  },
  {
    id: 2,
    slug: 'signature-convention-cfcim-cacs',
    title: 'PARTENARIAT : SIGNATURE DE CONVENTION CFCIM X CACS',
    excerpt:
      "La Chambre Française de Commerce et d'Industrie du Maroc et la CACS ont scellé une alliance stratégique pour stimuler les opportunités d'affaires à Dakhla.",
    content:
      "La Chambre Française de Commerce et d'Industrie du Maroc (CFCIM) et la Chambre Africaine de Commerce et de Services (CACS) ont scellé une alliance stratégique pour stimuler les opportunités d'affaires à Dakhla et dans l'ensemble du continent. Ce partenariat vise à faciliter les échanges commerciaux inter-africains et à accompagner conjointement les entreprises adhérentes.",
    date: '2026-01-15',
    category: 'Partenariat',
    image: 'https://www.cacsafrica.org/assets/images/media/signature.jpg',
    author: 'Équipe CACS',
  },
  {
    id: 3,
    slug: 'rencontre-espace-pays-sahel',
    title:
      "RENCONTRE D'ÉCHANGES : L'ESPACE DES PAYS DU SAHEL À L'OCÉAN ATLANTIQUE",
    excerpt:
      "Perspectives et opportunités de l'initiative Atlantique Royale pour le désenclavement et l'intégration de la sous-région africaine.",
    content:
      "Une rencontre d'échanges a été organisée pour discuter des perspectives et opportunités de l'initiative Atlantique Royale pour le désenclavement et l'intégration de la sous-région africaine. Les participants ont exploré les possibilités de coopération économique et les investissements potentiels dans la région.",
    date: '2026-01-10',
    category: 'Événement',
    image: 'https://www.cacsafrica.org/assets/images/events/2.jpg',
    author: 'Équipe CACS',
  },
  {
    id: 4,
    slug: 'webinaire-performance-humain',
    title:
      "WEBINAIRE : PERFORMANCE ET HARMONIE – L'HUMAIN COMME LEVIER STRATÉGIQUE",
    excerpt:
      "Une conférence internationale en ligne dédiée au développement du capital humain et au management des compétences en Afrique.",
    content:
      "Ce webinaire a réuni des experts internationaux pour discuter du développement du capital humain et du management des compétences en Afrique. Les interventions ont porté sur les meilleures pratiques en matière de formation, de leadership et de développement organisationnel.",
    date: '2026-01-05',
    category: 'Webinaire',
    image: 'https://www.cacsafrica.org/assets/images/media/ASLEMCar.jpg',
    author: 'Équipe CACS',
  },
];

const categories = [
  'Tous',
  'Coopération',
  'Partenariat',
  'Événement',
  'Webinaire',
];

const News = () => {
  const [news, setNews] = useState(mockNews);
  const [filter, setFilter] = useState('Tous');
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setApiError(false);

        const apiUrl =
          import.meta.env.VITE_API_URL ||
          'http://localhost:4000/api';

        const response = await axios.get(`${apiUrl}/news`, {
          timeout: 8000,
        });

        const data = response?.data?.data;

        if (mounted && Array.isArray(data) && data.length > 0) {
          setNews(data);
        }
      } catch (error) {
        console.warn(
          'API actualités indisponible. Utilisation des données locales.',
          error
        );

        if (mounted) {
          setApiError(true);
          setNews(mockNews);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchNews();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredNews = useMemo(() => {
    if (filter === 'Tous') {
      return news;
    }

    return news.filter(
      (article) => article?.category === filter
    );
  }, [news, filter]);

  const formatDate = (date) => {
    if (!date) {
      return 'Date non disponible';
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return 'Date non disponible';
    }

    return parsedDate.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <>
      <SEO
        title="Actualités"
        description="Découvrez les dernières actualités de la Chambre Africaine de Commerce et de Services."
        keywords="CACS Africa, actualités, Afrique, commerce, entreprises, partenariats"
      />

      <main
        id="main-content"
        className="min-h-screen bg-gray-50 pb-16"
      >
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="bg-cacs-blue px-4 py-16 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cacs-gold">
              Actualités
            </span>

            <h1 className="mt-3 text-3xl font-extrabold uppercase md:text-5xl">
              NOS ACTUALITÉS
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-200 md:text-base">
              Suivez les dernières nouvelles de la Chambre Africaine
              de Commerce et de Services.
            </p>
          </div>
        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-4 pt-10">

          {/* API WARNING */}
          {apiError && (
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <RefreshCw size={16} />

              <span>
                Les actualités affichées proviennent actuellement
                des données locales. Le serveur d'actualités est
                indisponible.
              </span>
            </div>
          )}

          {/* FILTERS */}
          <div
            className="mb-10 flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filtres des actualités"
          >
            {categories.map((category) => {
              const active = filter === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cacs-blue focus-visible:ring-offset-2 ${
                    active
                      ? 'bg-cacs-blue text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* RESULT COUNT */}
          {!isLoading && (
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-cacs-blue">
                {filteredNews.length}{' '}
                {filteredNews.length > 1
                  ? 'actualités'
                  : 'actualité'}
              </p>
            </div>
          )}

          {/* =====================================================
              LOADING
          ====================================================== */}
          {isLoading && (
            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
              aria-busy="true"
              aria-label="Chargement des actualités"
            >
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="animate-pulse overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <div className="h-56 bg-gray-200" />

                  <div className="p-6">
                    <div className="mb-4 h-4 w-32 rounded bg-gray-200" />

                    <div className="mb-3 h-5 w-5/6 rounded bg-gray-200" />

                    <div className="mb-2 h-3 w-full rounded bg-gray-200" />

                    <div className="mb-5 h-3 w-4/5 rounded bg-gray-200" />

                    <div className="h-3 w-24 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* =====================================================
              NEWS GRID
          ====================================================== */}
          {!isLoading && filteredNews.length > 0 && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {filteredNews.map((article) => (
                <article
                  key={article.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={article.image || FALLBACK_IMAGE}
                      alt={article.title || 'Actualité CACS'}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {article.category && (
                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-cacs-blue shadow-sm">
                        {article.category}
                      </span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    {/* META */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar
                          size={13}
                          aria-hidden="true"
                        />

                        {formatDate(article.date)}
                      </span>

                      {article.author && (
                        <span className="text-xs text-gray-400">
                          • {article.author}
                        </span>
                      )}
                    </div>

                    {/* TITLE */}
                    <h2 className="mb-3 text-lg font-bold leading-snug text-cacs-blue">
                      {article.title || 'Actualité CACS'}
                    </h2>

                    {/* EXCERPT */}
                    <p className="mb-6 line-clamp-3 text-sm font-light leading-relaxed text-gray-600">
                      {article.excerpt ||
                        article.content ||
                        'Découvrez cette actualité de la CACS.'}
                    </p>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="flex items-center gap-2 text-xs font-medium text-gray-500">
                        <Newspaper
                          size={14}
                          className="text-cacs-emerald"
                          aria-hidden="true"
                        />

                        CACS Africa
                      </span>

                      <button
                        type="button"
                        className="flex items-center gap-1 text-xs font-bold text-cacs-emerald transition-all duration-200 hover:gap-2 hover:text-cacs-blue"
                      >
                        Lire la suite
                        <ArrowRight
                          size={14}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* =====================================================
              EMPTY STATE
          ====================================================== */}
          {!isLoading && filteredNews.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                <Newspaper size={24} />
              </div>

              <h2 className="text-lg font-bold text-cacs-blue">
                Aucune actualité trouvée
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                Aucune actualité ne correspond à cette catégorie.
              </p>

              <button
                type="button"
                onClick={() => setFilter('Tous')}
                className="mt-5 rounded-xl bg-cacs-blue px-5 py-2.5 text-xs font-bold text-white transition hover:opacity-90"
              >
                Voir toutes les actualités
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default News;