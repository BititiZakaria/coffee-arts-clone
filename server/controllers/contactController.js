import Contact from '../models/Contact.js'

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 })
    res.json(messages)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' })
    }

    const contact = new Contact({
      name,
      email,
      subject,
      message
    })

    await contact.save()
    res.status(201).json({ message: 'Message envoyé avec succès', contact })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const markAsRead = async (req, res) => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: 'read' },
      { new: true }
    )
    res.json(message)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.json({ message: 'Message supprimé' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
