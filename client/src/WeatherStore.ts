import create, { SetState } from 'zustand';

// Project Imports
import { Weather } from './models/Weather';

type WeatherState = {
    weather: Weather;
    changeWeather: (weather: Weather) => void;
};

export const useWeatherStore = create<WeatherState>((set: SetState<WeatherState>) => ({
    weather: {
        country: '',
        city: '',
        weather: {},
        stats: {},
    },
    changeWeather: (weather: Weather) => {
        set(() => ({ weather: weather }));
    }
}));