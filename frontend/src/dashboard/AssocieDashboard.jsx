import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Building, TrendingUp, Users, BarChart, Globe } from 'lucide-react';

const AssocieDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-cacs-blue to-cacs-blue-dark text-white p-8 rounded-3xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-bold text-cacs-yellow uppercase tracking-widest">Espace Membre Associé & Partenaire</span>
            <h1 className="text-2xl font-bold mt-1">Espace Partenaire : {user?.company || 'Société Partenaire'}</h1>
            <p className="text-xs text-gray-200 mt-1">Représenté par {user?.name || 'Associé'} • Privilèges Partenaire Privilégié</p>
          </div>
          <span className="bg-cacs-pink text-white text-xs font-bold px-4 py-2 rounded-full uppercase">
            Partenaire Certifié CACS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-cacs-blue flex items-center justify-center">
              <Users size={20} />
            </div>
            <h3 className="font-bold text-sm text-cacs-blue">Opportunités B2B Privilégiées</h3>
            <p className="text-xs text-gray-500">5 demandes de partenariats directes reçues ce mois-ci.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-cacs-green flex items-center justify-center">
              <BarChart size={20} />
            </div>
            <h3 className="font-bold text-sm text-cacs-blue">Visibilité Annuaire</h3>
            <p className="text-xs text-gray-500">Profil mis en avant en première page de l'annuaire des membres.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-50 text-cacs-orange flex items-center justify-center">
              <Globe size={20} />
            </div>
            <h3 className="font-bold text-sm text-cacs-blue">Projets Sous-Régionaux</h3>
            <p className="text-xs text-gray-500">Accès exclusif au catalogue des projets d'investissement au Sahel & CEDEAO.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssocieDashboard;
