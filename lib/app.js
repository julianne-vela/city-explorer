const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const {
    mungeLocation,
    mungeReviews,
    mungeWeather,
} = require('./MungeUtils.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/location', async(req, res) => {
    try {
        const cityName = req.query.search;
        const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.GEO_KEY}&q=${cityName}&format=json`);
        const formattedResponse = mungeLocation(data.body);

        res.json(formattedResponse);

    } catch(e) {
    
        res.status(500).json({ error: e.message });
    }
});

app.get('/weather', async(req, res) => {
    try {
        const lat = req.query.latitude;
        const lon = req.query.longitude;

        const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=${process.env.WEATHER_KEY}`);

        const formattedResponse = mungeWeather(data.body);

        res.json(formattedResponse);
    } catch(e) {
    
        res.status(500).json({ error: e.message });
    }
});

app.get('/reviews', async(req, res) => {
    try {
        let lat = req.query.latitude;
        let lon = req.query.longitude;

        const data = await request
            .get(`https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}`)
            .set({ 'Authorization': `Bearer ${process.env.YELP_KEY}` });

        const formattedResponse = mungeReviews(data.body);
    
    
        res.json(formattedResponse);
    } catch(e) {
    
        res.status(500).json({ error: e.message });
    }
});

// app.get('/location', async(req, res) => {
//     try {
    
    
//         res.json(data.rows);
//     } catch(e) {
    
//         res.status(500).json({ error: e.message });
//     }
// });

app.use(require('./middleware/error'));

module.exports = app;
