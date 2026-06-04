import express from 'express'
import {
  getAllMessages,
  sendMessage,
  markAsRead,
  deleteMessage
} from '../controllers/contactController.js'
import { authenticateToken, authorizeAdmin } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/', sendMessage)
router.get('/', authenticateToken, authorizeAdmin, getAllMessages)
router.put('/:id/read', authenticateToken, authorizeAdmin, markAsRead)
router.delete('/:id', authenticateToken, authorizeAdmin, deleteMessage)

export default router
