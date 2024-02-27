import React, { ReactNode } from "react";

import { cn } from "./utils/cn";

type ContainerProps = {
  children: ReactNode;
  color?: "yellow" | "white";
  className?: string;
};

const Container: React.FC<ContainerProps> = ({
  children,
  color = "white",
  className,
}) => {
  return (
    <div
      className={cn(
        "border py-3 px-4 rounded-lg shadow-sm",
        {
          "bg-white border-neutral-200": color === "white",
          "bg-yellow-300 border-yellow-200": color === "yellow",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
