export const errorMiddleware = (err, req, res, next) => {
  console.error(err)

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: 'Erreur de validation', details: err.message })
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'ID invalide' })
  }

  res.status(err.status || 500).json({
    error: err.message || 'Erreur serveur interne'
  })
}
