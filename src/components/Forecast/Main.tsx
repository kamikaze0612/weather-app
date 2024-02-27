import React from "react";
import { useQuery } from "@tanstack/react-query";

import TodaysWeather from "./TodaysWeather";
import Forecasts from "./Forecasts";
import { URL } from "../utils/constants";
import Loader from "../Loader";
import { ForecastData, WeatherForecast } from "../utils/models";

const Main: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const res = await fetch(URL);
      const weatherData: WeatherForecast = await res.json();

      return weatherData;
    },
  });

  const uniqueDates = [
    ...new Set(
      data?.list.map(
        (entry) => new Date(entry.dt * 1000).toISOString().split("T")[0]
      )
    ),
  ];

  if (isLoading) return <Loader />;

  const firstDataForEachDate = uniqueDates.map((date) => {
    return data?.list.find((entry) => {
      const entryDate = new Date(entry.dt * 1000).toISOString().split("T")[0];
      const entryTime = new Date(entry.dt * 1000).getHours();
      return entryDate === date && entryTime >= 6;
    });
  }) as ForecastData[];

  return (
    <main className="bg-neutral-50 py-8 flex flex-col items-center gap-10">
      <TodaysWeather
        weatherData={data?.list[0]!}
        weathers={data?.list!}
        city={data?.city!}
      />

      <Forecasts forecastsData={firstDataForEachDate!} city={data?.city!} />
    </main>
  );
};

export default Main;
