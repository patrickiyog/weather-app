import React, { useState } from 'react';

// Third Party Imports
import { format } from 'date-fns';

// Project Imports
import './DateAndLocation.css';
import { useWeatherStore } from '../WeatherStore';

const DateAndLocation = () => {

    const city = useWeatherStore(state => state.weather.city);
    const country = useWeatherStore(state => state.weather.country);

    return (
        <div className="date-and-location">
            <h2 className="date">{format(new Date(), 'eeee, d MMMM yyyy')}</h2>
            <h1 className="location">{`${city}, ${country.toUpperCase()}`}</h1>
        </div>
    );

};

export default DateAndLocation;