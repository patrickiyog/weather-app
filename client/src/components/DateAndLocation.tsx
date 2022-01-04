import React, { useState } from 'react';

// Third Party Imports
import { format } from 'date-fns';

// Project Imports
import { useWeatherStore } from '../WeatherStore';

const DateAndLocation = () => {

    const city = useWeatherStore(state => state.weather.city);
    const country = useWeatherStore(state => state.weather.country);

    return (
        <div>
            <h2>{format(new Date(), 'eeee, d MMMM yyyy')}</h2>
            <h1>{`${city}, ${country.toUpperCase()}`}</h1>
        </div>
    );
    
};

export default DateAndLocation;