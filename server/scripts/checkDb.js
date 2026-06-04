import dotenv from 'dotenv'
import connectDB from '../config/db.js'
import User from '../models/User.js'
import Product from '../models/Product.js'
import Workshop from '../models/Workshop.js'
import Blog from '../models/Blog.js'
import Contact from '../models/Contact.js'

dotenv.config()

const run = async () => {
  try {
    await connectDB()
    const users = await User.countDocuments()
    const products = await Product.countDocuments()
    const workshops = await Workshop.countDocuments()
    const blogs = await Blog.countDocuments()
    const contacts = await Contact.countDocuments()
    console.log('DB counts:')
    console.log('users:', users)
    console.log('products:', products)
    console.log('workshops:', workshops)
    console.log('blogs:', blogs)
    console.log('contacts:', contacts)
    process.exit(0)
  } catch (err) {
    console.error('Error checking DB:', err)
    process.exit(1)
  }
}

run()
