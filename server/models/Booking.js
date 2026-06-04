import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    workshopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workshop',
      required: true
    },
    numberOfParticipants: {
      type: Number,
      required: true
    },
    totalPrice: Number,
    status: {
      type: String,
      enum: ['confirmed', 'cancelled'],
      default: 'confirmed'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
)

export default mongoose.model('Booking', bookingSchema)
