import React from 'react';

// Third Party JS Library Imports
import { Icon } from '@iconify/react';

const CurrentWeather = () => {
    return (
        <div>
            <div>
                <Icon icon="wi:day-sunny" width="150px" height="150px" />
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