import create from "zustand/react";

// Project Imports
import { Weather } from "./models/Weather";

interface WeatherState {
    weather: Weather;
    changeWeather: (weather: Weather) => void;
};

export const weatherStore = create<WeatherState>(set => ({
    weather: {
        country: '',
        city: '',
        main: '',
        description: '',
        icon: '',
        temp: 0,
        feelsLike: 0,
        high: 0,
        low: 0,
        pressure: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0
    },
    changeWeather: (weather: Weather) => {
        set(() => ({ weather: weather }));
    }
}));