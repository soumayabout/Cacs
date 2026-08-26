import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Lock, Mail, AlertCircle } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await login(email, password);
      if (user.role === 'admin') navigate('/admin');
      else if (user.role === 'associe') navigate('/associes');
      else navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Échec de la connexion. Vérifiez vos identifiants.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-cacs-gold shadow-md p-1 overflow-hidden">
            <img 
              src="/logo.jpeg" 
              alt="Logo CACS" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>  
          <h2 className="text-2xl font-bold text-cacs-blue uppercase">Connexion</h2>
          <p className="text-xs text-gray-500 mt-1">Accédez à votre espace adhérent ou administration</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs mb-6 flex items-center gap-2 border border-red-100">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="form-label">Email professionnel</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@entreprise.com"
                className="form-input pl-10"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Mot de passe</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="form-input pl-10"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-3 font-bold uppercase tracking-wider shadow-lg"
          >
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          Pas encore de compte ?{' '}
          <Link to="/register" className="text-cacs-blue font-bold hover:underline">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
