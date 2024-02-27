import React from "react";
import { format, fromUnixTime, parseISO } from "date-fns";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

import { City, ForecastData } from "../utils/models";
import DailyForecast from "./DailyForecast";
import Container from "../Container";
import WeatherIcon from "./WeatherIcon";
import ForecastDetails from "./ForecastDetails";
import { convertMetersToKilometers } from "../utils/convertMetersToKilometers";
import { convertWindSpeed } from "../utils/convertWindSpeed";

type TodaysWeatherProps = {
  weatherData: ForecastData;
  weathers: ForecastData[];
  city: City;
};

const TodaysWeather: React.FC<TodaysWeatherProps> = ({
  weatherData,
  weathers,
  city,
}) => {
  const details = [
    {
      label: "Visibility",
      icon: <LuEye />,
      value: `${convertMetersToKilometers(weatherData.visibility)}km`,
    },
    {
      label: "Humidity",
      icon: <FiDroplet />,
      value: `${weatherData.main.humidity}%`,
    },
    {
      label: "Wind Speed",
      icon: <MdAir />,
      value: `${convertWindSpeed(weatherData.wind.speed)}km/h`,
    },
    {
      label: "Air Pressure",
      icon: <ImMeter />,
      value: `${weatherData.main.pressure}hPa`,
    },
    {
      label: "Sunrise",
      icon: <LuSunrise />,
      value: `${format(fromUnixTime(city.sunrise), "H:mm")}`,
    },
    {
      label: "Sunset",
      icon: <LuSunset />,
      value: `${format(fromUnixTime(city.sunset), "H:mm")}`,
    },
  ];

  return (
    <section className="max-w-7xl flex flex-col gap-4">
      <h2 className="space-x-1">
        <span className="text-3xl">
          {format(parseISO(weatherData?.dt_txt), "EEEE")}
        </span>
        <span className="text-xl">
          ({format(parseISO(weatherData.dt_txt), "dd.MM.yyyy")})
        </span>
      </h2>

      <DailyForecast weatherData={weatherData} weathers={weathers} />

      <div className="flex gap-4">
        <Container className="flex flex-col items-center">
          <p className="capitalize text-center">
            {weatherData.weather[0].description}
          </p>
          <WeatherIcon iconName={weatherData.weather[0].icon} />
        </Container>
        <Container color="yellow" className="w-full">
          <ForecastDetails details={details} />
        </Container>
      </div>
    </section>
  );
};

export default TodaysWeather;
