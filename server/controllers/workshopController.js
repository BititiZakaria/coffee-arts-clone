import Workshop from '../models/Workshop.js'

export const getAllWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find()
    res.json(workshops)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getWorkshopById = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id)
    if (!workshop) {
      return res.status(404).json({ error: 'Atelier non trouvé' })
    }
    res.json(workshop)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createWorkshop = async (req, res) => {
  try {
    const { title, description, price, date, time, duration, maxParticipants } = req.body
    const workshop = new Workshop({
      title,
      description,
      price,
      date,
      time,
      duration,
      maxParticipants
    })
    await workshop.save()
    res.status(201).json(workshop)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(workshop)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteWorkshop = async (req, res) => {
  try {
    await Workshop.findByIdAndDelete(req.params.id)
    res.json({ message: 'Atelier supprimé' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
