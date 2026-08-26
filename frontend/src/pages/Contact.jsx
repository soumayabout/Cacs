import React, { useState } from 'react';
import axios from 'axios';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/contact', formData);
      setSubmitted(true);
      setError(false);
    } catch (err) {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16" id="main-content">
      {/* Banner */}
      <div className="bg-cacs-blue text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-cacs-gold uppercase tracking-widest">Contact</span>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase mt-2 mb-4">NOUS CONTACTER</h1>
          <p className="text-sm text-gray-200 font-light">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6" aria-label="Informations de contact">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-cacs-blue flex items-center justify-center shrink-0" aria-hidden="true">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-cacs-blue text-sm mb-1">Téléphone</h3>
                  <p className="text-xs text-gray-600">+212 5 28 89 00 00</p>
                  <p className="text-xs text-gray-600">+212 6 00 00 00 00</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-cacs-pink flex items-center justify-center shrink-0" aria-hidden="true">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-cacs-blue text-sm mb-1">Email</h3>
                  <p className="text-xs text-gray-600">contact@cacsafrica.org</p>
                  <p className="text-xs text-gray-600">info@cacsafrica.org</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-cacs-emerald flex items-center justify-center shrink-0" aria-hidden="true">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-cacs-blue text-sm mb-1">Sièges</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Avenue Oued Eddahab, Dakhla, Maroc<br />
                    Laâyoune, Sakia El Hamra, Maroc
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cacs-blue p-6 rounded-2xl text-white">
              <h3 className="font-bold text-sm mb-2">Heures d'ouverture</h3>
              <p className="text-xs text-gray-200 mb-1">Lundi - Vendredi: 8h00 - 18h00</p>
              <p className="text-xs text-gray-200">Samedi: 9h00 - 13h00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white p-12 rounded-3xl text-center shadow-xl border border-gray-100 space-y-4">
                <CheckCircle2 size={64} className="text-cacs-emerald mx-auto" />
                <h2 className="text-2xl font-bold text-cacs-blue">Message envoyé avec succès !</h2>
                <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                  Nous vous remercions pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-xl font-bold text-cacs-blue uppercase mb-6 border-b border-gray-100 pb-3">
                  Formulaire de Contact
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label" htmlFor="contact-name">Nom complet *</label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        className="form-input"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="contact-company">Entreprise</label>
                      <input
                        type="text"
                        id="contact-company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nom de votre entreprise"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Email professionnel *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Téléphone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+212 6 00 00 00 00"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Pays</label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="Maroc, Sénégal, Côte d'Ivoire..."
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Sujet *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="form-input"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="Information">Demande d'information</option>
                        <option value="Adhesion">Demande d'adhésion</option>
                        <option value="Partenariat">Proposition de partenariat</option>
                        <option value="Evenement">Question sur un événement</option>
                        <option value="Presse">Presse & Média</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Message *</label>
                    <textarea
                      rows="5"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre demande ou votre question..."
                      className="form-input"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle size={16} />
                      <span>Une erreur est survenue. Veuillez réessayer.</span>
                    </div>
                  )}

                  <button type="submit" className="btn-primary w-full py-3.5 font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2">
                    <Send size={18} />
                    Envoyer mon message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
