import React from 'react';

const CurrentWeatherStats = () => {
    return (
        <div>
            <div>
                <div>
                    <div>23&deg;C</div>
                    <div>High</div>
                </div>
                <div>
                    <div>14&deg;C</div>
                    <div>Low</div>
                </div>
            </div>
            <div>
                <div>
                    <div>1014hPa</div>
                    <div>Pressure</div>
                </div>
                <div>
                    <div>69%</div>
                    <div>Humidity</div>
                </div>
            </div>
            <div>
                <div>
                    <div>05:27</div>
                    <div>Sunrise</div>
                </div>
                <div>
                    <div>20:57</div>
                    <div>Sunset</div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeatherStats;