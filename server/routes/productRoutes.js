import express from 'express'
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js'
import { authenticateToken, authorizeAdmin } from '../middlewares/authMiddleware.js'
import { upload } from '../middlewares/uploadMiddleware.js'

const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', authenticateToken, authorizeAdmin, upload.single('image'), createProduct)
router.put('/:id', authenticateToken, authorizeAdmin, updateProduct)
router.delete('/:id', authenticateToken, authorizeAdmin, deleteProduct)

export default router
