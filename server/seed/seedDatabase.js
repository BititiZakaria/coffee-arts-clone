import User from '../models/User.js'
import Product from '../models/Product.js'
import Workshop from '../models/Workshop.js'
import Blog from '../models/Blog.js'
import Contact from '../models/Contact.js'

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({})
    await Product.deleteMany({})
    await Workshop.deleteMany({})
    await Blog.deleteMany({})
    await Contact.deleteMany({})

    // Create admin user
    const admin = new User({
      name: 'Admin',
      email: 'admin@coffeearts.com',
      password: 'Admin123!',
      role: 'admin'
    })
    await admin.save()

    // Create sample users
    const client = new User({
      name: 'Client Test',
      email: 'client@coffeearts.com',
      password: 'Client123!',
      role: 'client'
    })
    await client.save()

    // Create sample products
    const products = [
      { name: 'Café Premium', description: 'Café de spécialité', price: 15.99, category: 'cafe', stock: 100 },
      { name: 'Tasse Céramique', description: 'Tasse artisanale', price: 24.99, category: 'ceramique', stock: 50 },
      { name: 'Accessoire Café', description: 'Accessoire pour café', price: 12.99, category: 'accessoires', stock: 75 }
    ]
    await Product.insertMany(products)

    // Create sample workshops
    const workshops = [
      { title: 'Atelier Café', description: 'Découvrez le café', price: 35, date: new Date('2026-06-15'), time: '14:00', duration: '2h', maxParticipants: 10 },
      { title: 'Atelier Céramique', description: 'Créez votre tasse', price: 45, date: new Date('2026-06-20'), time: '10:00', duration: '3h', maxParticipants: 8 }
    ]
    await Workshop.insertMany(workshops)

    // Create sample blog posts
    const blogs = [
      { title: 'Bienvenue', content: 'Bienvenue sur Coffee Arts', author: 'Admin' },
      { title: 'Guide du Café', content: 'Comment bien choisir son café', author: 'Admin' }
    ]
    await Blog.insertMany(blogs)

    console.log('Base de données alimentée avec succès')
  } catch (error) {
    console.error('Erreur lors de l\'alimentation de la base de données:', error)
  }
}

export default seedDatabase
