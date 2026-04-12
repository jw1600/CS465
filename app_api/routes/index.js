const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

// RESTful API routes for Module 6
router.get('/trips', ctrlTrips.tripsList);           // GET all trips
router.post('/trips', ctrlTrips.tripsAdd);           // POST new trip
router.put('/trips/:code', ctrlTrips.tripsUpdate);   // PUT update trip
router.get('/trips/:code', ctrlTrips.tripsFindByCode); // GET single trip

module.exports = router;