import React from 'react';

// Project Imports
import { useWeatherStore } from '../WeatherStore';

const Location = () => {

    const city = useWeatherStore(state => state.weather.city);
    const country = useWeatherStore(state => state.weather.country);

    return (
        <div>
            <h1>{`${city}, ${country.toUpperCase()}`}</h1>
        </div>
    );

};

export default Location;