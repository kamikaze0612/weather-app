import React from "react";
import { format, fromUnixTime, parseISO } from "date-fns";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

import Container from "../Container";
import Temperature from "./Temperature";
import { City, ForecastData } from "../utils/models";
import WeatherIcon from "./WeatherIcon";
import ForecastDetails from "./ForecastDetails";
import { convertMetersToKilometers } from "../utils/convertMetersToKilometers";
import { convertWindSpeed } from "../utils/convertWindSpeed";

type ForecastProps = {
  data: ForecastData;
  city: City;
};

const Forecast: React.FC<ForecastProps> = ({ data, city }) => {
  const details = [
    {
      label: "Visibility",
      icon: <LuEye />,
      value: `${convertMetersToKilometers(data.visibility)}km`,
    },
    {
      label: "Humidity",
      icon: <FiDroplet />,
      value: `${data.main.humidity}%`,
    },
    {
      label: "Wind Speed",
      icon: <MdAir />,
      value: `${convertWindSpeed(data.wind.speed)}km/h`,
    },
    {
      label: "Air Pressure",
      icon: <ImMeter />,
      value: `${data.main.pressure}hPa`,
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
    <li className="w-full">
      <Container className="flex gap-4 items-center">
        <div className="flex flex-col">
          <WeatherIcon iconName={data.weather[0].icon} />
          <span>{format(parseISO(data.dt_txt), "MM.dd")}</span>
          <span>{format(parseISO(data.dt_txt), "EEEE")}</span>
        </div>
        <div>
          <Temperature
            temperature={data.main.temp}
            feelsLikeTemp={data.main.feels_like}
            minTemp={data.main.temp_min}
            maxTemp={data.main.temp_max}
          />
          <span></span>
        </div>
        <ForecastDetails details={details} />
      </Container>
    </li>
  );
};

export default Forecast;
