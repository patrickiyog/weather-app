import create, { SetState } from 'zustand';

// Project Imports
import { Weather } from './models/Weather';

type WeatherState = {
    weather: Weather;
    changeWeather: (weather: Weather) => void;
};

export const useWeatherStore = create<WeatherState>(set => ({
    weather: {
        country: '',
        city: '',
        weather: {
            main: '',
            description: '',
            icon: '',
            temperature: 0,
            feels_like: 0
        },
        stats: {
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            windspeed: 0,
            windDirection: '',
            sunrise: 0,
            sunset: 0
        },
    },
    changeWeather: (weather: Weather) => {
        set(() => ({ weather: weather }));
    }
}));