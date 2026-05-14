// src/middleware/auth.js
// Middleware compartido — MediCare System

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Token requerido' });
  next();
};

module.exports = { verifyToken };