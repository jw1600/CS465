const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: false, index: true },
    name: { type: String, required: false, index: true },
    length: { type: String, required: false },
    start: { type: Date, required: false },
    resort: { type: String, required: false },
    perPerson: { type: String, required: false },
    image: { type: String, required: false },
    description: { type: String, required: false }
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;