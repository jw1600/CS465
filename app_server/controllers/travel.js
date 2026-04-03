const request = require('request');

/* GET travel view - now using REST API */
const travel = (req, res) => {
    request({
        url: 'http://localhost:3000/api/trips',
        method: 'GET',
        json: true
    }, (err, response, body) => {
        if (err) {
            console.error(err);
            res.render('travel', { 
                title: 'Travlr Getaways', 
                trips: [] 
            });
        } else if (response.statusCode !== 200) {
            console.error('API error:', response.statusCode);
            res.render('travel', { 
                title: 'Travlr Getaways', 
                trips: [] 
            });
        } else {
            res.render('travel', { 
                title: 'Travlr Getaways', 
                trips: body 
            });
        }
    });
};

module.exports = {
    travel
};