import mongoose from 'mongoose'

const workshopSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    price: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    time: String,
    duration: String,
    maxParticipants: {
      type: Number,
      required: true
    },
    currentParticipants: {
      type: Number,
      default: 0
    },
    image: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
)

export default mongoose.model('Workshop', workshopSchema)
