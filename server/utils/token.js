export const generateToken = (userId, role) => {
  // Token generation utility
  return `token_${userId}_${role}`
}

export const verifyToken = (token) => {
  // Token verification utility
  return token.startsWith('token_')
}
