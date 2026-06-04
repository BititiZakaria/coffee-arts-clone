import express from 'express'
import {
  getAllWorkshops,
  getWorkshopById,
  createWorkshop,
  updateWorkshop,
  deleteWorkshop
} from '../controllers/workshopController.js'
import { authenticateToken, authorizeAdmin } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/', getAllWorkshops)
router.get('/:id', getWorkshopById)
router.post('/', authenticateToken, authorizeAdmin, createWorkshop)
router.put('/:id', authenticateToken, authorizeAdmin, updateWorkshop)
router.delete('/:id', authenticateToken, authorizeAdmin, deleteWorkshop)

export default router
