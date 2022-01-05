export interface Weather {
    country: string;
    city: string;
    main: {
        id: number;
        main: string;
        description: string;
        icon: string;
        temperature: number;
        feels_like: number;
    };
    stats: {
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        windspeed: number;
        windDirection: string;
        sunrise: number;
        sunset: number;
    };
};