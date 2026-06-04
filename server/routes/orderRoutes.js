import express from 'express'
import {
  getAllOrders,
  getUserOrders,
  getOrderById,
  createOrder,
  updateOrderStatus
} from '../controllers/orderController.js'
import { authenticateToken, authorizeAdmin } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/', authenticateToken, authorizeAdmin, getAllOrders)
router.get('/user/orders', authenticateToken, getUserOrders)
router.get('/:id', authenticateToken, getOrderById)
router.post('/', authenticateToken, createOrder)
router.put('/:id/status', authenticateToken, authorizeAdmin, updateOrderStatus)

export default router
