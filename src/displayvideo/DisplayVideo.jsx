import React from "react";
import movieTitle from "../displayvideo/R.png";
import { SiNetflix } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
const DisplayVideo = () => {
  return (
    <div className=" displayvideo h-screen w-full bg-slate-300 flex  flex-col  justify-center items-start gap-y-6">
      <div className="absolute bg-black bg-opacity-30 w-full h-full px-14 flex  flex-col  justify-center items-start gap-y-6">
        <div className="flex gap-1 text-slate-100 items-center">
          <SiNetflix className="text-red-600 text-[35px]" />
          <span className="tracking-widest text-slate-300 text-[20px] font-semibold">
            FILM
          </span>
        </div>
        <div className="text-[#E8C429] flex flex-col gap-y-4">
          <img src={movieTitle} className="h-20" />
          <p className="w-[28rem] items-start flex text-white font-semibold">
            Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to
            lead a new generation of Jaeger pilots, including rival Lambert and
            15-year-old hacker Amara, against a new Kaiju threat.
          </p>
        </div>
        <div className="flex gap-2 w-full">
          <div className="flex gap-2 items-center text-[23px] hover:bg-slate-400 hover:bg-opacity-80 bg-slate-300 bg-opacity-80 py-2 px-7 rounded-md cursor-pointer">
            <FaPlay /> <span className=" text-[20px] font-semibold">Play</span>
          </div>
          <div className="flex gap-2 items-center text-[23px] text-white bg-slate-600 hover:bg-slate-500 hover:bg-opacity-50 bg-opacity-50 py-2 px-7 rounded-md cursor-pointer">
            <FiInfo />{" "}
            <span className=" text-[20px] font-semibold">More Info</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayVideo;
