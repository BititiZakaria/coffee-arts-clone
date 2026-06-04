import dotenv from 'dotenv'

dotenv.config()

const API = process.env.API_URL || 'http://localhost:5000/api'

const login = async () => {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@coffeearts.com', password: 'Admin123!' })
  })
  return res.json()
}

const createProduct = async (token) => {
  const res = await fetch(`${API}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ name: 'Test Product', description: 'Created by test', price: 9.99, category: 'accessoires', stock: 10 })
  })
  return { status: res.status, body: await res.json() }
}

const updateProduct = async (token, id) => {
  const res = await fetch(`${API}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ name: 'Test Product Updated', description: 'Updated by test', price: 12.5, category: 'test', stock: 5 })
  })
  return { status: res.status, body: await res.json() }
}

const deleteProduct = async (token, id) => {
  const res = await fetch(`${API}/products/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  })
  return { status: res.status, body: await res.json() }
}

;(async () => {
  try {
    const loginRes = await login()
    const token = loginRes.token
    if (!token) throw new Error('Login failed')

    console.log('Logged in, testing product CRUD...')

    const created = await createProduct(token)
    console.log('CREATE', created.status, JSON.stringify(created.body, null, 2))

    const prodId = created.body._id
    if (!prodId) throw new Error('Create did not return id')

    const updated = await updateProduct(token, prodId)
    console.log('UPDATE', updated.status, JSON.stringify(updated.body, null, 2))

    const deleted = await deleteProduct(token, prodId)
    console.log('DELETE', deleted.status, JSON.stringify(deleted.body, null, 2))

    // final list
    const listRes = await fetch(`${API}/products`)
    console.log('LIST STATUS', listRes.status)
    console.log(JSON.stringify(await listRes.json(), null, 2))

    process.exit(0)
  } catch (err) {
    console.error('TestProducts failed:', err)
    process.exit(1)
  }
})()
