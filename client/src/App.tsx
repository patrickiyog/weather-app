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
            console.log('response', response);
        };
        fetchWeatherData();
    }, []);

    return (
        <div>
            <div>
                <Location />
                <Date />
            </div>
            <div>
                <CurrentWeather />
                <CurrentWeatherStats />
            </div>
        </div>
    );
};

export default App;