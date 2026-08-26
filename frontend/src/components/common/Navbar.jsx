import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  Menu,
  X,
  Globe,
  User as UserIcon,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const currentLang = (i18n.language || 'fr').split('-')[0].toUpperCase();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const getDashboardPath = () => {
    if (user?.role === 'admin') {
      return '/admin';
    }

    if (user?.role === 'associe') {
      return '/associes';
    }

    return '/dashboard';
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* =========================================================
          ACCESSIBILITY
      ========================================================== */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 z-[100] rounded bg-cacs-gold px-4 py-2 font-bold text-cacs-navy"
      >
        Aller au contenu principal
      </a>

      {/* =========================================================
          TOP BAR
      ========================================================== */}
      <div className="hidden bg-cacs-navy px-4 py-1.5 text-xs text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Contact information */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-90">
              <Phone size={13} aria-hidden="true" />
              +212 5 28 89 00 00
            </span>

            <span className="flex items-center gap-1.5 opacity-90">
              <Mail size={13} aria-hidden="true" />
              contact@cacsafrica.org
            </span>

            <span className="opacity-75">
              Dakhla & Laâyoune, Maroc
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Language */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen((previous) => !previous)}
                className="flex items-center gap-1 transition hover:text-cacs-yellow focus:outline-none focus:ring-2 focus:ring-cacs-gold"
                aria-haspopup="menu"
                aria-expanded={langMenuOpen}
              >
                <Globe size={13} aria-hidden="true" />
                <span>{currentLang}</span>
                <ChevronDown size={12} aria-hidden="true" />
              </button>

              {langMenuOpen && (
                <div
                  className="absolute right-0 top-full z-[100] mt-2 w-28 overflow-hidden rounded-lg bg-white py-1 text-xs text-gray-800 shadow-xl ring-1 ring-black/5"
                  role="menu"
                >
                  <button
                    type="button"
                    onClick={() => changeLanguage('fr')}
                    className="w-full px-3 py-2 text-left font-medium transition hover:bg-blue-50"
                    role="menuitem"
                  >
                    Français
                  </button>

                  <button
                    type="button"
                    onClick={() => changeLanguage('en')}
                    className="w-full px-3 py-2 text-left transition hover:bg-blue-50"
                    role="menuitem"
                  >
                    English
                  </button>

                  <button
                    type="button"
                    onClick={() => changeLanguage('ar')}
                    className="w-full px-3 py-2 text-left transition hover:bg-blue-50"
                    role="menuitem"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            {/* =====================================================
                AUTHENTICATED USER ONLY
                Connexion / Inscription SUPPRIMÉS
            ====================================================== */}
            {user && (
              <div className="flex items-center gap-4">
                <Link
                  to={getDashboardPath()}
                  className="flex items-center gap-1.5 transition hover:text-cacs-yellow"
                >
                  <UserIcon size={13} aria-hidden="true" />
                  <span>
                    Mon Espace
                    {user.name ? ` (${user.name})` : ''}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 transition hover:text-red-300"
                >
                  <LogOut size={13} aria-hidden="true" />
                  <span>Déconnexion</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVBAR
      ========================================================== */}
      <nav className="bg-cacs-blue px-4 py-3 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="CACS Africa - Accueil"
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-cacs-gold bg-white p-1 shadow-inner">
              <img
                src="/logo.jpeg"
                alt="Logo CACS Africa"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div>
              <div className="text-lg font-bold uppercase leading-tight tracking-wide">
                CACS AFRICA
              </div>

              <div className="text-[10px] font-semibold tracking-wider text-cacs-emerald">
                CHAMBRE AFRICAINE DE COMMERCE ET DE SERVICES
              </div>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label="Navigation principale"
          >
            <Link
              to="/"
              className="nav-link rounded px-2 py-1 font-semibold focus:outline-none focus:ring-2 focus:ring-cacs-gold"
            >
              Accueil
            </Link>

            <Link
              to="/about"
              className="nav-link rounded px-2 py-1 font-semibold focus:outline-none focus:ring-2 focus:ring-cacs-gold"
            >
              À Propos
            </Link>

            <Link
              to="/missions"
              className="nav-link rounded px-2 py-1 font-semibold focus:outline-none focus:ring-2 focus:ring-cacs-gold"
            >
              Nos Missions
            </Link>

            <Link
              to="/services"
              className="nav-link rounded px-2 py-1 font-semibold focus:outline-none focus:ring-2 focus:ring-cacs-gold"
            >
              Nos Services
            </Link>

            <Link
              to="/events"
              className="nav-link rounded px-2 py-1 font-semibold focus:outline-none focus:ring-2 focus:ring-cacs-gold"
            >
              Nos Évènements
            </Link>

            <Link
              to="/members"
              className="nav-link rounded px-2 py-1 font-semibold focus:outline-none focus:ring-2 focus:ring-cacs-gold"
            >
              Nos Adhérents
            </Link>

            <Link
              to="/news"
              className="nav-link rounded px-2 py-1 font-semibold focus:outline-none focus:ring-2 focus:ring-cacs-gold"
            >
              Actualités
            </Link>

            <Link
              to="/abd"
              className="nav-link rounded px-2 py-1 font-semibold focus:outline-none focus:ring-2 focus:ring-cacs-gold"
            >
              Africa Business Days
            </Link>
          </nav>

          {/* =====================================================
              MEMBERSHIP CTA
          ====================================================== */}
          <div className="hidden items-center lg:flex">
            <Link
              to="/join"
              className="btn-primary shadow-lg shadow-pink-900/30"
            >
              Demande d'adhésion
            </Link>
          </div>

          {/* =====================================================
              MOBILE BUTTON
          ====================================================== */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className="rounded-lg p-2 text-white transition hover:text-cacs-yellow focus:outline-none focus:ring-2 focus:ring-cacs-gold"
              aria-label={
                mobileMenuOpen
                  ? 'Fermer le menu'
                  : 'Ouvrir le menu'
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}
            </button>
          </div>
        </div>

        {/* =========================================================
            MOBILE MENU
        ========================================================== */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="mt-3 rounded-b-xl border-t border-blue-800 bg-cacs-navy p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-blue-900 py-3 font-medium text-white transition hover:text-cacs-gold"
              >
                Accueil
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-blue-900 py-3 font-medium text-white transition hover:text-cacs-gold"
              >
                À Propos
              </Link>

              <Link
                to="/missions"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-blue-900 py-3 font-medium text-white transition hover:text-cacs-gold"
              >
                Nos Missions
              </Link>

              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-blue-900 py-3 font-medium text-white transition hover:text-cacs-gold"
              >
                Nos Services
              </Link>

              <Link
                to="/events"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-blue-900 py-3 font-medium text-white transition hover:text-cacs-gold"
              >
                Nos Évènements
              </Link>

              <Link
                to="/members"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-blue-900 py-3 font-medium text-white transition hover:text-cacs-gold"
              >
                Nos Adhérents
              </Link>

              <Link
                to="/news"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-blue-900 py-3 font-medium text-white transition hover:text-cacs-gold"
              >
                Actualités
              </Link>

              <Link
                to="/abd"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-blue-900 py-3 font-medium text-white transition hover:text-cacs-gold"
              >
                Africa Business Days
              </Link>

              {/* User menu uniquement si connecté */}
              {user && (
                <div className="mt-2 border-t border-blue-800 pt-3">
                  <Link
                    to={getDashboardPath()}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 font-medium text-cacs-gold"
                  >
                    <span className="inline-flex items-center gap-2">
                      <UserIcon size={16} />
                      Mon Espace
                      {user.name ? ` (${user.name})` : ''}
                    </span>
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="block w-full py-2 text-left font-medium text-red-400"
                  >
                    <span className="inline-flex items-center gap-2">
                      <LogOut size={16} />
                      Déconnexion
                    </span>
                  </button>
                </div>
              )}

              {/* CTA */}
              <Link
                to="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-4 text-center"
              >
                Demande d'adhésion
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;