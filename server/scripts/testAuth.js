import dotenv from 'dotenv'

dotenv.config()

const API = process.env.API_URL || 'http://localhost:5000/api'

const login = async () => {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@coffeearts.com', password: 'Admin123!' })
  })
  const data = await res.json()
  console.log('LOGIN STATUS', res.status)
  console.log(JSON.stringify(data, null, 2))
  return data
}

const profile = async (token) => {
  const res = await fetch(`${API}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  console.log('PROFILE STATUS', res.status)
  console.log(JSON.stringify(await res.json(), null, 2))
}

const products = async (token) => {
  const res = await fetch(`${API}/products`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  })
  console.log('PRODUCTS STATUS', res.status)
  console.log(JSON.stringify(await res.json(), null, 2))
}

;(async () => {
  try {
    const loginRes = await login()
    const token = loginRes.token || loginRes.accessToken || null
    if (token) {
      await profile(token)
      await products(token)
    } else {
      console.error('No token received from login')
      await products(null)
    }
    process.exit(0)
  } catch (err) {
    console.error('Test failed:', err)
    process.exit(1)
  }
})()
