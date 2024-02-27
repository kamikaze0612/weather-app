import React from "react";
import { City, ForecastData } from "../utils/models";
import Forecast from "./Forecast";

type ForecastsProps = {
  forecastsData: ForecastData[];
  city: City;
};

const Forecasts: React.FC<ForecastsProps> = ({ forecastsData, city }) => {
  return (
    <section className="w-7xl flex flex-col gap-4">
      <h2 className="space-x-1">
        <span className="text-3xl">Forecast (7 days)</span>
      </h2>

      <ul className="w-full flex flex-col gap-4">
        {forecastsData.map((entry, index) => (
          <Forecast key={index} data={entry} city={city} />
        ))}
      </ul>
    </section>
  );
};

export default Forecasts;
