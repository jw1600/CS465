const Trip = require('../models/travlr');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const tripsAdd = async (req, res) => {
  const newTrip = new Trip(req.body);
  try {
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const tripsUpdate = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { code: req.params.code },
      req.body,
      { new: true }
    );
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.code });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  tripsList,
  tripsAdd,
  tripsUpdate,
  tripsFindByCode
};