import React, { useState } from 'react';
import { Users, Calendar, Building, ShieldCheck, Plus, Trash2, Edit, CheckCircle } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-cacs-blue-dark text-white p-6 shrink-0">
        <div className="font-extrabold text-xl text-cacs-yellow mb-8 uppercase tracking-wide">
          Admin Dashboard
        </div>
        <nav className="space-y-2 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeTab === 'overview' ? 'bg-cacs-blue text-white shadow-md' : 'text-gray-300 hover:bg-blue-900'
            }`}
          >
            Vue d'ensemble
          </button>
          <button
            onClick={() => setActiveTab('members')}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeTab === 'members' ? 'bg-cacs-blue text-white shadow-md' : 'text-gray-300 hover:bg-blue-900'
            }`}
          >
            Gestion des Adhérents
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeTab === 'events' ? 'bg-cacs-blue text-white shadow-md' : 'text-gray-300 hover:bg-blue-900'
            }`}
          >
            Gestion des Événements
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              activeTab === 'requests' ? 'bg-cacs-blue text-white shadow-md' : 'text-gray-300 hover:bg-blue-900'
            }`}
          >
            Demandes d'Adhésion
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <h1 className="text-2xl font-bold text-cacs-blue uppercase">Tableau de bord Administration</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-xs font-semibold text-gray-500 uppercase">Adhérents Actifs</div>
                <div className="text-3xl font-extrabold text-cacs-blue mt-2">48</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-xs font-semibold text-gray-500 uppercase">Événements Organisés</div>
                <div className="text-3xl font-extrabold text-cacs-green mt-2">12</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-xs font-semibold text-gray-500 uppercase">Demandes en attente</div>
                <div className="text-3xl font-extrabold text-cacs-pink mt-2">5</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-xs font-semibold text-gray-500 uppercase">Utilisateurs inscrits</div>
                <div className="text-3xl font-extrabold text-cacs-orange mt-2">124</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-cacs-blue uppercase">Gestion des Adhérents</h1>
              <button className="btn-secondary text-xs flex items-center gap-2">
                <Plus size={16} /> Ajouter un adhérent
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-bold uppercase">
                  <tr>
                    <th className="p-4">Entreprise</th>
                    <th className="p-4">Secteur</th>
                    <th className="p-4">Pays</th>
                    <th className="p-4">Statut</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-blue-50/50">
                    <td className="p-4 font-bold text-cacs-blue">Société de Transport du Sud</td>
                    <td className="p-4">Transport & Logistique</td>
                    <td className="p-4">Maroc</td>
                    <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Actif</span></td>
                    <td className="p-4 text-right space-x-2">
                      <button className="text-blue-600 hover:text-blue-800"><Edit size={16} /></button>
                      <button className="text-red-600 hover:text-red-800"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-cacs-blue uppercase">Gestion des Événements</h1>
              <button className="btn-primary text-xs flex items-center gap-2">
                <Plus size={16} /> Créer un événement
              </button>
            </div>
            <p className="text-xs text-gray-500">Gérez les webinaires, forums et rencontres B2B.</p>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-cacs-blue uppercase">Demandes d'Adhésion en Attente</h1>
            <p className="text-xs text-gray-500">Validez ou refusez les demandes soumises via le portail.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
