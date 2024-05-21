import React from "react";
import YourNextToWatch from "./yournext/YourNextToWatch";

const Movies = () => {
  return (
    <div className="h-screen w-full shadow-2xl px-10 relative">
      <div className="absolute -mt-20">
        <YourNextToWatch />
      </div>
    </div>
  );
};

export default Movies;
