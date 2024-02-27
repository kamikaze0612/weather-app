import React from "react";

import { ForecastData } from "../utils/models";
import HourlyForecastItem from "./HourlyForecastItem";

type HourlyForecastProps = {
  hourlyData: ForecastData[];
};

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourlyData }) => {
  return (
    <ul className="flex gap-6 overflow-x-auto">
      {hourlyData.map((data, index) => (
        <HourlyForecastItem key={index} forecastData={data} />
      ))}
    </ul>
  );
};

export default HourlyForecast;
