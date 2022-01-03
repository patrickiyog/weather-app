import React from 'react';

// Third Party Imports
import { format, addSeconds } from 'date-fns';

// Project Imports
import { useWeatherStore } from '../WeatherStore';

const CurrentWeatherStats = () => {

    const weatherStats = useWeatherStore(state => state.weather.stats);

    const createTimeFromSeconds = (timeInSeconds: number) => {
        const helperDate = addSeconds(new Date(0), timeInSeconds);
        return format(helperDate, 'hh:mm aaa');
    }

    return (
        <div>
            <div>
                <div>
                    <div>{weatherStats.temp_max}&deg;C</div>
                    <div>High</div>
                </div>
                <div>
                    <div>{weatherStats.temp_min}&deg;C</div>
                    <div>Low</div>
                </div>
            </div>
            <div>
                <div>
                    <div>{weatherStats.pressure}hPa</div>
                    <div>Pressure</div>
                </div>
                <div>
                    <div>{weatherStats.humidity}%</div>
                    <div>Humidity</div>
                </div>
            </div>
            <div>
                <div>
                    <div>{createTimeFromSeconds(weatherStats.sunrise)}</div>
                    <div>Sunrise</div>
                </div>
                <div>
                    <div>{createTimeFromSeconds(weatherStats.sunset)}</div>
                    <div>Sunset</div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeatherStats;