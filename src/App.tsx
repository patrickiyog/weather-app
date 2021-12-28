import React from 'react';

// Project Imports
import Location from './components/Location';
import Date from './components/Date';
import CurrentWeather from './components/CurrentWeather';
import CurrentWeatherStats from './components/CurrentWeatherStats';

const App = () => {
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