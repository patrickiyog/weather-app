import React from 'react';

// Project Imports
import WeatherHourData from './WeatherHourData';

const weatherData = [
    { time: '3am', icon: 'day-sunny', temperature: 8, measurement: 'C' },
    { time: '6am', icon: 'cloud', temperature: 16, measurement: 'C' },
    { time: '9am', icon: 'day-cloudy', temperature: 17, measurement: 'C' },
    { time: '12pm', icon: 'day-cloudy', temperature: 19, measurement: 'C' },
    { time: '12pm', icon: 'day-sunny', temperature: 23, measurement: 'C' },
    { time: '3pm', icon: 'day-sunny', temperature: 22, measurement: 'C' },
    { time: '6pm', icon: 'day-sunny', temperature: 19, measurement: 'C' },
    { time: '9pm', icon: 'day-sunny', temperature: 16, measurement: 'C' },
];

const WeatherByHour = () => {
    return (
        <div>
            {weatherData.map(data => (<WeatherHourData {...data} /> ))}
        </div>
    );
};

export default WeatherByHour;