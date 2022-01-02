import React, { ErrorInfo, useEffect } from 'react';

// Third Party Imports
import axios from 'axios';

// Project Imports
import { useWeatherStore } from './WeatherStore';
import Location from './components/Location';
import Date from './components/Date';
import CurrentWeather from './components/CurrentWeather';
import CurrentWeatherStats from './components/CurrentWeatherStats';
import getErrorMessage from './util/getErrorMessage';

const App = () => {

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const weatherData = await axios.get('http://localhost:3000/weather/Auckland,nz');
                useWeatherStore.setState({ weather: weatherData.data });
            } catch (error) {
                console.log(getErrorMessage(error));
            };
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