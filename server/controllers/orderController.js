import Order from '../models/Order.js'

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId').populate('items.productId')
    res.json(orders)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('items.productId')
    res.json(orders)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.productId')
    if (!order) {
      return res.status(404).json({ error: 'Commande non trouvée' })
    }
    res.json(order)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, shippingAddress } = req.body
    const order = new Order({
      userId: req.user.id,
      items,
      totalPrice,
      shippingAddress,
      paymentStatus: 'completed' // Paiement simulé
    })
    await order.save()
    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
    res.json(order)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
