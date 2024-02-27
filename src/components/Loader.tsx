import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <p className="animate-bounce">Loading...</p>
    </div>
  );
};

export default Loader;
