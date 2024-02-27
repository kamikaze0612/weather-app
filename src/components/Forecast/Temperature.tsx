import React from "react";
import { converTemperature } from "../utils/convertTemperature";

type TemperatureProps = {
  temperature: number;
  feelsLikeTemp: number;
  maxTemp: number;
  minTemp: number;
};

const Temperature: React.FC<TemperatureProps> = ({
  temperature,
  feelsLikeTemp,
  maxTemp,
  minTemp,
}) => {
  return (
    <div className="flex flex-col gap-1 px-4 pr-12">
      <p className="text-5xl">{converTemperature(temperature)}°</p>
      <p className="text-sm">Feels like {converTemperature(feelsLikeTemp)}°</p>
      <div className="space-x-2 text-sm">
        <span>{converTemperature(minTemp)}°&darr;</span>
        <span>{converTemperature(maxTemp)}°&uarr;</span>
      </div>
    </div>
  );
};

export default Temperature;
