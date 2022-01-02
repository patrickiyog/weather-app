require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const app = express();
const port = 3000;

const weather = require('./weather');

app.use(express.json());

// Add security to who can use these requests
const whiteList = ['http://localhost', 'http://localhost:3000', 'http://localhost:3001']; // For production, use URL in the whitelist
const corsOptions = {
    origin: (origin, callback) => {
        if(!origin || whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200 // 200 = OK
};

app.use(cors(corsOptions)); // Applying whitelist to CORS

// Limit one request per second
const limiter = rateLimit({
    windowMs: 1000,
    max: 1
});
app.use(limiter);

// test route
app.get('/', (req, res) => res.json({ success: 'Hello World!' }));

app.use('/weather', weather);

app.listen(port, () => console.log(`App listening on port ${port}`));