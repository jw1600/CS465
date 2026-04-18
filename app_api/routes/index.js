const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');
const authController = require('../controllers/authentication');
const jwt = require('jsonwebtoken');


const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader == null) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.auth = user;
    next();
  });
};


router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:code', ctrlTrips.tripsFindByCode);


router.post('/trips', authenticateJWT, ctrlTrips.tripsAdd);
router.put('/trips/:code', authenticateJWT, ctrlTrips.tripsUpdate);

module.exports = router;