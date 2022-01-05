import React from 'react';

// Third Party JS Library Imports
import { Icon } from '@iconify/react';

// Project Imports
import { useWeatherStore } from '../WeatherStore';

const CurrentWeather = () => {

    const icon = useWeatherStore(state => state.data.main.icon);

    return (
        <div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            </div>
            <div>
                <div>
                    21&deg;C
                </div>
                <div>
                    Mostly Sunny
                </div>
            </div>
        </div>
    );

};

export default CurrentWeather;