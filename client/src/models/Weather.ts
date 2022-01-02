export interface Weather {
    country: string;
    city: string;
    weather: object;
    stats: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sunrise: number;
        sunset: number;
    };
};