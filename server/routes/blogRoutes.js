import express from 'express'
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../controllers/blogController.js'
import { authenticateToken, authorizeAdmin } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', authenticateToken, authorizeAdmin, createPost)
router.put('/:id', authenticateToken, authorizeAdmin, updatePost)
router.delete('/:id', authenticateToken, authorizeAdmin, deletePost)

export default router
