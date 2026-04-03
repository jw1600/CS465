const Trip = require('../models/travlr');  

/* GET all trips */
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({});   
        res.status(200).json(trips);   
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

/* GET single trip by code */
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.code });
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        res.status(200).json(trip);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};