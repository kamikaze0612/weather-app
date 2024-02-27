import Image from "next/image";
import React from "react";

type WeatherIconProps = {
  iconName: string;
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconName }) => {
  return (
    <span className="relative h-20 w-20">
      <Image
        src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
        alt="Weather icon"
        width={100}
        height={100}
      />
    </span>
  );
};

export default WeatherIcon;
