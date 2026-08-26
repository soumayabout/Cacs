import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { User, Mail, Lock, Building, Globe, Phone, AlertCircle } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('Maroc');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await register({ name, email, password, company, country, role });
      if (user.role === 'admin') navigate('/admin');
      else if (user.role === 'associe') navigate('/associes');
      else navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Échec de la création de compte.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-cacs-gold shadow-md p-1 overflow-hidden">
            <img 
              src="/logo.jpeg" 
              alt="Logo CACS" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <h2 className="text-2xl font-bold text-cacs-blue uppercase">Créer un compte</h2>
          <p className="text-xs text-gray-500 mt-1">Rejoignez le réseau des entreprises africaines</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs mb-6 flex items-center gap-2 border border-red-100">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Nom complet</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Prénom Nom"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Email professionnel</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@entreprise.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Nom de l'entreprise</label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Ma Société SARL"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Pays d'origine</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="form-input"
              >
                <option value="Maroc">Maroc</option>
                <option value="Sénégal">Sénégal</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Guinée">Guinée</option>
                <option value="Burundi">Burundi</option>
                <option value="Mali">Mali</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>

          <div>
            <label className="form-label">Type de compte</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-input"
            >
              <option value="user">Utilisateur / Adhérent Standard</option>
              <option value="associe">Membre Associé / Partenaire</option>
            </select>
          </div>

          <div>
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="form-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-3 font-bold uppercase tracking-wider shadow-lg mt-2"
          >
            {loading ? 'Inscription...' : 'S\'inscrire'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          Vous avez déjà un compte ?{' '}
          <Link to="/login" className="text-cacs-blue font-bold hover:underline">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
