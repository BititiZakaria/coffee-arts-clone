import Product from '../models/Product.js'
import cloudinary from '../config/cloudinary.js'

export const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query
    const query = category ? { category } : {}
    const products = await Product.find(query)
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ error: 'Produit non trouvé' })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body

    let image = null
    if (req.file && req.file.buffer) {
      // Use data URI upload to Cloudinary to avoid extra native deps
      const dataUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`
      const result = await cloudinary.uploader.upload(dataUri, { folder: 'coffee-arts/products' })
      image = result.secure_url
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      image
    })

    await product.save()
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, category, stock },
      { new: true }
    )
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: 'Produit supprimé' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
