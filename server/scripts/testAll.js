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

const get = async (path, token) => {
  const res = await fetch(`${API}${path}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} })
  return { status: res.status, body: await res.json() }
}

;(async () => {
  try {
    // login admin
    const loginRes = await post('/auth/login', null, { email: 'admin@coffeearts.com', password: 'Admin123!' })
    console.log('LOGIN', loginRes.status)
    const token = loginRes.body.token
    if (!token) throw new Error('No token')

    // Products (quick create/delete)
    const pCreate = await post('/products', token, { name: 'AllTest Product', description: 'x', price: 1.5, category: 'accessoires', stock: 1 })
    console.log('PRODUCT CREATE', pCreate.status)
    const pId = pCreate.body._id
    const pUpdate = await put(`/products/${pId}`, token, { name: 'AllTest Updated', description: 'y', price: 2.5, category: 'accessoires', stock: 2 })
    console.log('PRODUCT UPDATE', pUpdate.status)
    const pDel = await del(`/products/${pId}`, token)
    console.log('PRODUCT DELETE', pDel.status)

    // Workshops
    const wCreate = await post('/workshops', token, { title: 'Test WS', description: 'ws', price: 10, date: new Date().toISOString(), time: '10:00', duration: 120, maxParticipants: 8 })
    console.log('WORKSHOP CREATE', wCreate.status)
    const wId = wCreate.body._id
    const wUpdate = await put(`/workshops/${wId}`, token, { title: 'Test WS Updated' })
    console.log('WORKSHOP UPDATE', wUpdate.status)
    const wDel = await del(`/workshops/${wId}`, token)
    console.log('WORKSHOP DELETE', wDel.status)

    // Blog
    const bCreate = await post('/blog', token, { title: 'Test Post', content: 'post content', author: 'Admin' })
    console.log('BLOG CREATE', bCreate.status)
    const bId = bCreate.body._id
    const bUpdate = await put(`/blog/${bId}`, token, { title: 'Updated Title' })
    console.log('BLOG UPDATE', bUpdate.status)
    const bDel = await del(`/blog/${bId}`, token)
    console.log('BLOG DELETE', bDel.status)

    // Bookings: create as user (use admin token but booking uses req.user.id)
    const bookingCreate = await post('/bookings', token, { workshopId: wId || null, numberOfParticipants: 2, totalPrice: 20 })
    console.log('BOOKING CREATE', bookingCreate.status)
    const bookingId = bookingCreate.body._id
    const bookingCancel = await put(`/bookings/${bookingId}/cancel`, token, {})
    console.log('BOOKING CANCEL', bookingCancel.status)

    // Orders
    const orderCreate = await post('/orders', token, { items: [{ productId: pId || undefined, quantity: 1 }], totalPrice: 1.5, shippingAddress: { line1: 'x' } })
    console.log('ORDER CREATE', orderCreate.status)
    const orderId = orderCreate.body._id
    const orderUpdate = await put(`/orders/${orderId}/status`, token, { status: 'shipped' })
    console.log('ORDER UPDATE', orderUpdate.status)

    // Final lists
    console.log('PRODUCTS LIST', (await get('/products')).status)
    console.log('WORKSHOPS LIST', (await get('/workshops')).status)
    console.log('BLOG LIST', (await get('/blog')).status)

    process.exit(0)
  } catch (err) {
    console.error('testAll failed', err)
    process.exit(1)
  }
})()
