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
import AdminDashboard from './pages/AdminDashboard.jsx'
import NotFound from './pages/NotFound.jsx'

// Route protégée : redirige vers /login si non connecté
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()
  const lang = window.location.pathname.split('/')[1] || 'fr'
  if (loading) return null
  if (!isAuthenticated) return <Navigate to={`/${lang}/login`} replace />
  return children
}

// Route Admin : redirige vers / si pas admin
const AdminRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth()
  const lang = window.location.pathname.split('/')[1] || 'fr'
  if (loading) return null
  if (!isAdmin) return <Navigate to={`/${lang}`} replace />
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
          <Route path="/login" element={<NotFound />} />
          <Route path="/register" element={<NotFound />} />
          <Route path="/account" element={
            <ProtectedRoute><Account /></ProtectedRoute>
          } />
          <Route path="/admin" element={
            <AdminRoute><AdminDashboard /></AdminRoute>
          } />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="*" element={<NotFound />} />
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
        <Route path="*" element={
          <LanguageProvider>
            <NotFound />
          </LanguageProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
