const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const toCompassDirection = (degrees) => {
  const compassDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  degrees = degrees < 0 ? (degrees = 360 - (Math.abs(d) % 360)) : degrees % 360;
  return compassDirections[parseInt(degrees / 45)];
};

const organiseWeatherStream = (weatherStream) => {
  return {
    country: weatherStream.sys.country,
    city: weatherStream.name,
    weather: weatherStream.weather[0], // weatherStream.weather is fetched as an array of objects, hence, first and only element is taken out to make weather an object type
    stats: {
      ...weatherStream.main,
      windspeed: weatherStream.wind.speed * 3.6, // convert m/s to km/h (1 m/s to km/h = 3.6 km/h )
      windDirection: toCompassDirection(weatherStream.wind.deg),
      sunrise: weatherStream.sys.sunrise,
      sunset: weatherStream.sys.sunset,
    },
  };
};

const fetchWeather = async (searchText) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
  try {
    const weatherStream = await fetch(url);
    const weatherJSON = await weatherStream.json();
    console.log("weatherJSON", weatherJSON);
    return organiseWeatherStream(weatherJSON);
  } catch (err) {
    return { Error: err.stack };
  }
};

router.get("/", (req, res) => {
  res.json({ success: "Hello Weather!" });
});

router.get("/:searchText", async (req, res) => {
  const searchText = req.params.searchText;
  const data = await fetchWeather(searchText);
  res.json(data);
});

router.post("/", async (req, res) => {
  const searchText = req.body.searchText;
  const data = await fetchWeather(searchText);
  res.json(data);
});

module.exports = router;
