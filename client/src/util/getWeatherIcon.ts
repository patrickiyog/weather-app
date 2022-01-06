const WEATHER_ICONS: Record<string, string> = {
    CLEAR_SKY: 'bi:sun',
    FEW_CLOUDS: 'bi:cloud-sun',
    SCATTERED_CLOUDS: 'bi:cloud',
    BROKEN_CLOUDS: 'bi:cloud',
    SHOWER_RAIN: 'bi:cloud-rain',
    RAIN: 'fluent:weather-rain-showers-day-24-regular',
    THUNDERSTORM: 'fluent:weather-thunderstorm-48-filled',
    SNOW: 'fluent:weather-snow-20-regular',
    MIST: 'mi:fog',
};

const isValidWeatherType = (weatherType: string) => {
    return weatherType in WEATHER_ICONS;
};

const getWeatherIcon = (weatherType: string) => {
    weatherType = weatherType.replace(/ /g, "_").toUpperCase();
    if (isValidWeatherType(weatherType)) {
        return WEATHER_ICONS[weatherType];
    }
    throw new Error('Not a valid weather type');
};

export default getWeatherIcon;