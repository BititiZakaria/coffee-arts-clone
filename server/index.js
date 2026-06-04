import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js'

// Import routes
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import workshopRoutes from './routes/workshopRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
connectDB()

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/workshops', workshopRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/blog', blogRoutes)
app.use('/api/contact', contactRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// Error middleware
app.use(errorMiddleware)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`)
})

export default app
