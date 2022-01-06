const WEATHER_ICONS: Record<string, string> = {
    CLEAR: 'bi:sun',
    CLOUDS: 'bi:cloud',
    DRIZZLE: 'bi:cloud-drizzle',
    RAIN: 'bi:cloud-rain',
    THUNDERSTORM: 'bi:cloud-lightning-rain',
    SNOW: 'bi:cloud-snow',
    MIST: 'bi:cloud',
    SMOKE: 'bi:cloud',
    HAZE: 'bi:cloud',
    DUST: 'bi:cloud',
    FOG: 'bi:cloud',
    SAND: 'bi:cloud',
    ASH: 'bi:cloud',
    SQUALL: 'bi:cloud',
    TORNADO: 'bi:cloud',
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