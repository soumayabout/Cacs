import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { User, FileText, Calendar, Building, Bell } from 'lucide-react';

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-bold text-cacs-green uppercase tracking-wider">Espace Adhérent Standard</span>
            <h1 className="text-2xl font-bold text-cacs-blue mt-1">Bienvenue, {user?.name || 'Membre CACS'} !</h1>
            <p className="text-xs text-gray-500 mt-1">{user?.company || 'Entreprise adhérente'} • {user?.country || 'Maroc'}</p>
          </div>
          <button className="btn-secondary text-xs">Modifier mon profil</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-cacs-blue flex items-center justify-center">
              <Calendar size={20} />
            </div>
            <h3 className="font-bold text-sm text-cacs-blue">Mes Événements</h3>
            <p className="text-xs text-gray-500">Inscrit à 2 événements à venir (Webinaire & ABD 2026).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-cacs-green flex items-center justify-center">
              <FileText size={20} />
            </div>
            <h3 className="font-bold text-sm text-cacs-blue">Mes Documents</h3>
            <p className="text-xs text-gray-500">Attestation d'adhésion et rapports sectoriels disponibles.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-cacs-pink flex items-center justify-center">
              <Bell size={20} />
            </div>
            <h3 className="font-bold text-sm text-cacs-blue">Notifications</h3>
            <p className="text-xs text-gray-500">Nouvelle opportunité d'affaires en Guinée disponible.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
