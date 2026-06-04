import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/coffee-arts', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB connecté: ${conn.connection.host}`)
    return conn
  } catch (error) {
    console.error(`Erreur de connexion: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
