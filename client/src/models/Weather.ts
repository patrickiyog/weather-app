export interface Weather {
    id: string;
    country: string;
    city: string;
    main: string;
    description: string;
    icon: string;
    temp: number;
    feelsLike: number;
    high: number;
    low: number;
    pressure: number;
    humidity: number;
    sunrise: number;
    sunset: number;
};