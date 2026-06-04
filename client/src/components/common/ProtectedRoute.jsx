export default function ProtectedRoute({ children, isAdmin }) {
  const token = localStorage.getItem('token')
  
  if (!token) {
    return <div>Accès refusé. Veuillez vous connecter.</div>
  }

  return children
}
