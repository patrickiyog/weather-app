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
        weather: {},
        stats: {},
    },
    changeWeather: (weather: Weather) => {
        set(() => ({ weather: weather }));
    }
}));