import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Missions from './pages/Missions.jsx';
import Services from './pages/Services.jsx';
import Events from './pages/Events.jsx';
import Members from './pages/Members.jsx';
import AfricaBusinessDays from './pages/AfricaBusinessDays.jsx';
import Membership from './pages/Membership.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Contact from './pages/Contact.jsx';
import News from './pages/News.jsx';
import AdminDashboard from './dashboard/AdminDashboard.jsx';
import UserDashboard from './dashboard/UserDashboard.jsx';
import AssocieDashboard from './dashboard/AssocieDashboard.jsx';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/missions" element={<Missions />} />
                <Route path="/services" element={<Services />} />
                <Route path="/events" element={<Events />} />
                <Route path="/members" element={<Members />} />
                <Route path="/abd" element={<AfricaBusinessDays />} />
                <Route path="/join" element={<Membership />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                
                {/* Dashboards */}
                <Route
                  path="/admin/*"
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/*"
                  element={
                    <ProtectedRoute allowedRoles={['user', 'admin', 'associe']}>
                      <UserDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/associes/*"
                  element={
                    <ProtectedRoute allowedRoles={['associe', 'admin']}>
                      <AssocieDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
