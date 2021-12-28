import React from 'react';

// Third Party JS Library Imports
import { Icon } from '@iconify/react';

interface Props {
    time: string;
    icon: string;
    temperature: number;
    measurement: string;
};

const WeatherByHour = ({ time, icon, temperature, measurement }: Props) => {
    return (
        <div>
            <div>{time}</div>
            <div>
                <Icon
                    icon={`wi:${icon}`}
                    width="80px"
                    height="80px"
                />
            </div>
            <div>{temperature}&deg;{measurement}</div>
        </div>
    );
};

export default WeatherByHour;