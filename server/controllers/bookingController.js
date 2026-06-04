import Booking from '../models/Booking.js'

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId').populate('workshopId')
    res.json(bookings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate('workshopId')
    res.json(bookings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createBooking = async (req, res) => {
  try {
    const { workshopId, numberOfParticipants, totalPrice } = req.body
    const booking = new Booking({
      userId: req.user.id,
      workshopId,
      numberOfParticipants,
      totalPrice
    })
    await booking.save()
    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    )
    res.json(booking)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
