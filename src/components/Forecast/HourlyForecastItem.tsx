import React from "react";

import { ForecastData } from "../utils/models";
import { format, parseISO } from "date-fns";
import WeatherIcon from "./WeatherIcon";
import { converTemperature } from "../utils/convertTemperature";

type HourlyForecastItemProps = {
  forecastData: ForecastData;
};

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = ({
  forecastData,
}) => {
  return (
    <li className="flex flex-col items-center gap-2">
      <span className="text-sm font-semibold">
        {format(parseISO(forecastData.dt_txt), "h:mm a")}
      </span>
      <WeatherIcon iconName={forecastData.weather[0].icon} />
      <span className="font-medium text-sm">
        {converTemperature(forecastData.main.temp)}°
      </span>
    </li>
  );
};

export default HourlyForecastItem;
