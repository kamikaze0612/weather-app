import React from "react";

import Container from "../Container";
import Temperature from "./Temperature";
import { ForecastData } from "../utils/models";
import HourlyForecast from "./HourlyForecast";

type DailyForecastProps = {
  weatherData: ForecastData;
  weathers: ForecastData[];
};

const DailyForecast: React.FC<DailyForecastProps> = ({
  weatherData,
  weathers,
}) => {
  return (
    <Container className="flex items-center py-6">
      <Temperature
        temperature={weatherData.main.temp}
        feelsLikeTemp={weatherData.main.feels_like}
        minTemp={weatherData.main.temp_min}
        maxTemp={weatherData.main.temp_max}
      />

      <HourlyForecast hourlyData={weathers} />
    </Container>
  );
};

export default DailyForecast;
