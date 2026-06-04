import express from 'express'
import {
  getAllBookings,
  getUserBookings,
  createBooking,
  cancelBooking
} from '../controllers/bookingController.js'
import { authenticateToken, authorizeAdmin } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/', authenticateToken, authorizeAdmin, getAllBookings)
router.get('/user/bookings', authenticateToken, getUserBookings)
router.post('/', authenticateToken, createBooking)
router.put('/:id/cancel', authenticateToken, cancelBooking)

export default router
