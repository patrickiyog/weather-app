import React from 'react';

// Project Imports
import Location from './components/Location';
import Date from './components/Date';
import CurrentWeather from './components/CurrentWeather';

const App = () => {
    return (
        <div>
            <div>
                <Location />
                <Date />
            </div>
            <div>
                <CurrentWeather />
            </div>
        </div>
    );
};

export default App;