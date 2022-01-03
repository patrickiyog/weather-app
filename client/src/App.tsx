import React, { ErrorInfo, useState, useEffect } from 'react';

// Third Party Imports
import axios from 'axios';

// Project Imports
import { useWeatherStore } from './WeatherStore';
import Location from './components/Location';
import Today from './components/Today';
import CurrentWeather from './components/CurrentWeather';
import CurrentWeatherStats from './components/CurrentWeatherStats';
import getErrorMessage from './util/getErrorMessage';

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const weatherData = await axios.get('http://localhost:3000/weather/Auckland,nz');
                useWeatherStore.setState({ weather: weatherData.data });
                setLoading(false);
            } catch (error) {
                console.log(getErrorMessage(error));
            };
        };
        fetchWeatherData();
    }, []);

    // https://stackoverflow.com/questions/63192407/waiting-for-async-function-in-react-component-showing-spinner
    if (loading) {
        return <span>Loading</span>;
    };

    return (
        <div>
            <Location />
            <Today />
            <CurrentWeather />
            <CurrentWeatherStats />
        </div>
    );

};

export default App;