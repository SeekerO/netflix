import React from "react";
import { Badge, Button } from "@material-tailwind/react";
const YourNextToWatch = () => {
  return (
    <div className="relative w-screen flex flex-col gap-y-4">
      <h1 className="font-semibold text-white text-3xl">Your Next Watch</h1>
      <div className="flex gap-2 w-full">
        <Badge content="5">
          <Button>Notifications</Button>
        </Badge>
      </div>
    </div>
  );
};

export default YourNextToWatch;
