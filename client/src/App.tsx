import React, { useState, useEffect } from 'react';

// Third Party Imports
import axios from 'axios';
import Loader from 'react-loader-spinner';

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
    // https://github.com/mhnpd/react-loader-spinner/tree/9079a1cd19b69719990242ca76874d19864a4008
    if (loading) {
        return (
            <Loader
                type="Oval"
                color="#00BFFF"
                height={100}
                width={100}
            />
        );
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