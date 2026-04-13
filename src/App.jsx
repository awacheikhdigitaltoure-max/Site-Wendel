import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './context/AuthContext'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PromotionModal from './components/PromotionModal.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

// Pages
import Home from './pages/Home.jsx'
import Destinations from './pages/Destinations.jsx'
import Experiences from './pages/Experiences.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Account from './pages/Account.jsx'
import DestinationDetail from './pages/DestinationDetail.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

// Route protégée : redirige vers /login si non connecté
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()
  const lang = window.location.pathname.split('/')[1] || 'fr'
  if (loading) return null
  if (!isAuthenticated) return <Navigate to={`/${lang}/login`} replace />
  return children
}

function AppLayout() {
  return (
    <div className="app">
      <ScrollToTop />
      <PromotionModal />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={
            <ProtectedRoute><Account /></ProtectedRoute>
          } />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang/*" element={
          <LanguageProvider>
            <AuthProvider>
              <AppLayout />
            </AuthProvider>
          </LanguageProvider>
        } />
        <Route path="*" element={<Navigate to="/fr" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
