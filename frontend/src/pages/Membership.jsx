import React, { useState } from 'react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';

const Membership = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    sector: 'Transport & Logistique',
    contactName: '',
    email: '',
    phone: '',
    country: 'Maroc',
    type: 'PME',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/membership', formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="bg-cacs-blue text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-cacs-gold uppercase tracking-widest">Rejoindre le Réseau</span>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase mt-2 mb-4">DEMANDE D'ADHÉSION</h1>
          <p className="text-sm text-gray-200 font-light">
            Devenez membre de la Chambre Africaine de Commerce et de Services et accédez à des opportunités d'affaires uniques.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        {submitted ? (
          <div className="bg-white p-12 rounded-3xl text-center shadow-xl border border-gray-100 space-y-4">
            <CheckCircle2 size={64} className="text-cacs-emerald mx-auto" />
            <h2 className="text-2xl font-bold text-cacs-blue">Votre demande a été soumise avec succès !</h2>
            <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
              Un responsable de la CACS prendra contact avec vous dans les 48h pour finaliser votre adhésion.
            </p>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-xl font-bold text-cacs-blue uppercase mb-6 border-b border-gray-100 pb-3">
              Formulaire d'Adhésion
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Nom de l'entreprise *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Société SARL"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Secteur d'activité *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="form-input"
                  >
                    <option value="Transport & Logistique">Transport & Logistique</option>
                    <option value="Agroalimentaire & Pêche">Agroalimentaire & Pêche</option>
                    <option value="Finance & Investissement">Finance & Investissement</option>
                    <option value="Technologies & IT">Technologies & IT</option>
                    <option value="Énergies Renouvelables">Énergies Renouvelables</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Nom du représentant *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Prénom Nom"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Email professionnel *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="directeur@entreprise.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Téléphone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+212 6 00 00 00 00"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Pays d'origine *</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Ex: Maroc, Sénégal, Côte d'Ivoire..."
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Message / Attentes particulières</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Expliquez brièvement vos objectifs de développement en Afrique..."
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-3.5 font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2">
                <Send size={18} />
                Envoyer ma demande d'adhésion
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Membership;
