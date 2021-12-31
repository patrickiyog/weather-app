import React, { useEffect } from 'react';

// Third Party Imports
import axios from 'axios';

// Project Imports
import Location from './components/Location';
import Date from './components/Date';
import CurrentWeather from './components/CurrentWeather';
import CurrentWeatherStats from './components/CurrentWeatherStats';

const App = () => {

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await axios.get('http://localhost:3000/weather/Auckland,nz');
        };
        fetchWeatherData();
    }, []);

    return (
        <div>
            <Location />
            <Date />
            <CurrentWeather />
            <CurrentWeatherStats />
        </div>
    );
};

export default App;