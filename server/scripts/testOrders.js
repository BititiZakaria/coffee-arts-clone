import dotenv from 'dotenv'

dotenv.config()

const API = process.env.API_URL || 'http://localhost:5000/api'

const post = async (path, token, body) => {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: JSON.stringify(body)
  })
  return { status: res.status, body: await res.json() }
}

const put = async (path, token, body) => {
  const res = await fetch(`${API}${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(body)
  })
  return { status: res.status, body: await res.json() }
}

const del = async (path, token) => {
  const res = await fetch(`${API}${path}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  })
  return { status: res.status, body: await res.json() }
}

;(async () => {
  try {
    const login = await post('/auth/login', null, { email: 'admin@coffeearts.com', password: 'Admin123!' })
    const token = login.body.token
    console.log('LOGIN', login.status)

    const prod = await post('/products', token, { name: 'OrderTest Product', description: 'for orders', price: 5.5, category: 'accessoires', stock: 10 })
    console.log('PRODUCT CREATE', prod.status)
    const pid = prod.body._id

    const order = await post('/orders', token, { items: [{ productId: pid, name: prod.body.name, price: prod.body.price, quantity: 2 }], totalPrice: prod.body.price * 2, shippingAddress: 'Test address' })
    console.log('ORDER CREATE', order.status, JSON.stringify(order.body, null, 2))
    const oid = order.body._id

    const orderUpdate = await put(`/orders/${oid}/status`, token, { status: 'shipped' })
    console.log('ORDER UPDATE', orderUpdate.status, JSON.stringify(orderUpdate.body, null, 2))

    // cleanup
    await del(`/products/${pid}`, token)
    console.log('CLEANUP product deleted')

    process.exit(0)
  } catch (err) {
    console.error('testOrders failed', err)
    process.exit(1)
  }
})()
