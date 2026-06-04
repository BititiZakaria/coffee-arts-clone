import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function ProtectedRoute({ children, isAdmin }) {
  const { isAuthenticated, isAdmin: userIsAdmin, loading } = useAuth()

  if (loading) return null

  if (!isAuthenticated) return <Navigate to="/login" replace />

  if (isAdmin && !userIsAdmin) return <div>Accès réservé aux administrateurs.</div>

  return children
}
