import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { Package, Users, Calendar, CheckCircle, XCircle, Clock, Loader2, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import './AdminDashboard.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AdminDashboard = () => {
  const { language } = useLanguage();
  const { token } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({ total: 0, users: 0, pending: 0 });
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchAdminData = async () => {
    try {
      setLoading(true);
      // Fetch bookings
      const bRes = await fetch(`${API_URL}/bookings`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const bData = await bRes.json();
      
      // Fetch users count (approximate from auth endpoint if available or just use bookings for now)
      const uRes = await fetch(`${API_URL}/auth/users`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const uData = await uRes.json();

      if (bData.success) {
        setBookings(bData.bookings);
        setStats({
          total: bData.count,
          users: uData.count || 0,
          pending: bData.bookings.filter(b => b.status === 'pending').length
        });
      }
    } catch (error) {
      console.error('Erreur dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, [token]);

  const handleUpdateStatus = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`${API_URL}/bookings/${id}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setBookings(bookings.map(b => b._id === id ? { ...b, status: newStatus } : b));
      }
    } catch (error) {
      console.error('Update fail:', error);
    } finally {
      setUpdatingId(null);
    }
  };

  const t = {
    fr: {
      title: "Tableau de Bord Administrateur",
      stats: {
        bookings: "Réservations",
        users: "Utilisateurs",
        pending: "En attente"
      },
      table: {
        guest: "Client",
        dest: "Destination",
        date: "Date",
        status: "Statut",
        actions: "Actions"
      },
      status: {
        pending: "En attente",
        confirmed: "Confirmé",
        cancelled: "Annulé"
      }
    },
    en: {
      title: "Administrator Dashboard",
      stats: {
        bookings: "Bookings",
        users: "Users",
        pending: "Pending"
      },
      table: {
        guest: "Guest",
        dest: "Destination",
        date: "Date",
        status: "Status",
        actions: "Actions"
      },
      status: {
        pending: "Pending",
        confirmed: "Confirmed",
        cancelled: "Cancelled"
      }
    }
  }[language];

  if (loading) {
    return (
      <div className="admin-loading">
        <Loader2 size={48} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="page admin-page pb-60">
      <div className="admin-header-bg" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <Reveal>
          <div className="admin-header pt-40 mb-12">
            <h1 className="text-gradient text-4xl font-bold">{t.title}</h1>
            <p className="opacity-60">Gestion globale de l'écosystème Wëndelu</p>
          </div>
        </Reveal>

        {/* Stats Grid */}
        <div className="admin-stats-grid mb-12">
          <Reveal delay={0.1}>
            <div className="stat-card glass-card">
              <div className="stat-icon"><Package size={24} /></div>
              <div className="stat-value">{stats.total}</div>
              <div className="stat-label">{t.stats.bookings}</div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="stat-card glass-card">
              <div className="stat-icon orange"><Users size={24} /></div>
              <div className="stat-value">{stats.users}</div>
              <div className="stat-label">{t.stats.users}</div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="stat-card glass-card">
              <div className="stat-icon green"><Clock size={24} /></div>
              <div className="stat-value">{stats.pending}</div>
              <div className="stat-label">{t.stats.pending}</div>
            </div>
          </Reveal>
        </div>

        {/* Bookings Table */}
        <Reveal delay={0.4}>
          <div className="admin-table-container glass-card overflow-hidden">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h3 className="font-bold text-xl">{t.stats.bookings} Récentes</h3>
              <button onClick={fetchAdminData} className="btn-refresh glass-card"><ArrowRight size={16} /></button>
            </div>
            <div className="overflow-x-auto">
              <table className="admin-table w-full">
                <thead>
                  <tr>
                    <th>{t.table.guest}</th>
                    <th>{t.table.dest}</th>
                    <th>{t.table.date}</th>
                    <th>{t.table.status}</th>
                    <th className="text-right">{t.table.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(b => (
                    <tr key={b._id}>
                      <td>
                        <div className="flex flex-col">
                          <span className="font-medium text-white">{b.guestName}</span>
                          <span className="text-xs opacity-50">{b.guestEmail}</span>
                        </div>
                      </td>
                      <td>{b.destination}</td>
                      <td>
                        <div className="flex items-center gap-2 opacity-70">
                          <Calendar size={14} />
                          {new Date(b.departureDate).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                        </div>
                      </td>
                      <td>
                        <span className={`status-badge ${b.status}`}>
                          {t.status[b.status]}
                        </span>
                      </td>
                      <td className="text-right">
                        <div className="flex justify-end gap-2">
                          <button 
                            className="action-btn check" 
                            title="Confirmer"
                            onClick={() => handleUpdateStatus(b._id, 'confirmed')}
                            disabled={updatingId === b._id}
                          >
                            <CheckCircle size={18} />
                          </button>
                          <button 
                            className="action-btn x" 
                            title="Annuler"
                            onClick={() => handleUpdateStatus(b._id, 'cancelled')}
                            disabled={updatingId === b._id}
                          >
                            <XCircle size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AdminDashboard;
