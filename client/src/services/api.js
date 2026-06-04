import apiClient from './apiClient'

export const authService = {
  login: (email, password) => apiClient.post('/auth/login', { email, password }),
  register: (userData) => apiClient.post('/auth/register', userData),
  logout: () => localStorage.removeItem('token')
}

export const productService = {
  getAll: () => apiClient.get('/products'),
  getById: (id) => apiClient.get(`/products/${id}`),
  create: (data) => apiClient.post('/products', data),
  update: (id, data) => apiClient.put(`/products/${id}`, data),
  delete: (id) => apiClient.delete(`/products/${id}`)
}

export const workshopService = {
  getAll: () => apiClient.get('/workshops'),
  getById: (id) => apiClient.get(`/workshops/${id}`),
  create: (data) => apiClient.post('/workshops', data),
  update: (id, data) => apiClient.put(`/workshops/${id}`, data),
  delete: (id) => apiClient.delete(`/workshops/${id}`)
}

export const orderService = {
  getAll: () => apiClient.get('/orders'),
  getById: (id) => apiClient.get(`/orders/${id}`),
  create: (data) => apiClient.post('/orders', data)
}

export const bookingService = {
  getAll: () => apiClient.get('/bookings'),
  create: (data) => apiClient.post('/bookings', data),
  delete: (id) => apiClient.delete(`/bookings/${id}`)
}

export const contactService = {
  send: (data) => apiClient.post('/contact', data)
}

export const blogService = {
  getAll: () => apiClient.get('/blog'),
  getById: (id) => apiClient.get(`/blog/${id}`),
  create: (data) => apiClient.post('/blog', data),
  update: (id, data) => apiClient.put(`/blog/${id}`, data),
  delete: (id) => apiClient.delete(`/blog/${id}`)
}
