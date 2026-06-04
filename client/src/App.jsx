import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Workshops from './pages/Workshops'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Events from './pages/Events'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Profile from './pages/Account/Profile'
import AdminDashboard from './pages/Admin/Dashboard'
import ManageProducts from './pages/Admin/ManageProducts'
import ManageWorkshops from './pages/Admin/ManageWorkshops'
import ManageBlog from './pages/Admin/ManageBlog'
import AdminOrders from './pages/Admin/AdminOrders'
import AdminBookings from './pages/Admin/AdminBookings'
import ProtectedRoute from './components/common/ProtectedRoute'
import './App.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account/profile" element={<Profile />} />

            <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin>{<AdminDashboard />}</ProtectedRoute>} />
            <Route path="/admin/products" element={<ProtectedRoute isAdmin>{<ManageProducts />}</ProtectedRoute>} />
            <Route path="/admin/workshops" element={<ProtectedRoute isAdmin>{<ManageWorkshops />}</ProtectedRoute>} />
            <Route path="/admin/blog" element={<ProtectedRoute isAdmin>{<ManageBlog />}</ProtectedRoute>} />
            <Route path="/admin/orders" element={<ProtectedRoute isAdmin>{<AdminOrders />}</ProtectedRoute>} />
            <Route path="/admin/bookings" element={<ProtectedRoute isAdmin>{<AdminBookings />}</ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
