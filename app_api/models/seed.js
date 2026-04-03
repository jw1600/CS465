// Bring in the DB connection and the Trip schema
const mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from json file
var fs = require('fs');
var data = fs.readFileSync('./data/trips.json', 'utf8');
var tripsData = JSON.parse(data);

// Delete any existing records, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(tripsData);
    console.log('Database seeded successfully!');
};

// Close the MongoDB connection and exit
seedDB().then(() => {
    mongoose.connection.close();
    process.exit(0);
});