import React, { ReactNode } from "react";

type ForecastDetail = {
  label: string;
  value: string;
  icon: ReactNode;
};

type ForecastDetailsProps = {
  details: ForecastDetail[];
};

const ForecastDetails: React.FC<ForecastDetailsProps> = ({ details }) => {
  return (
    <ul className="w-full flex justify-between h-full px-4 py-2">
      {details.map((detail) => (
        <li
          key={detail.label}
          className="h-full flex flex-col items-center justify-between text-3xl"
        >
          <p className="font-semibold text-base">{detail.label}</p>
          {detail.icon}
          <p className="font-medium text-base text-neutral-700">
            {detail.value}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ForecastDetails;
