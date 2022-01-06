import React from 'react';

// Third Party JS Library Imports
import { Icon } from '@iconify/react';

// Project Imports
import { useWeatherStore } from '../WeatherStore';
import getWeatherIcon from '../util/getWeatherIcon';

const CurrentWeather = () => {

    const icon = useWeatherStore(state => state.data.main.main);

    return (
        <div>
            <div>
                <Icon icon={getWeatherIcon(icon)} />
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