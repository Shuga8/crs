import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import videoBg from "../assets/video.mp4";
import logo from "../assets/CRS_logo.svg";

const ComingSoon = () => {
  const currentTime = new Date().getTime();
  const open = new Date("5 March 2025").getTime();
  const distance = open - currentTime; // Time until event

  return (
    <>
      <section className="page flex flex-col  w-[100vw] h-screen">
        <div className="overlay w-full h-full bg-black bg-opacity-70 absolute z-[5]"></div>

        <video
          src={videoBg}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        ></video>

        <div className="content w-full h-full absolute z-[6] flex flex-col items-center justify-center gap-y-5">
          <img src={logo} alt="" className="w-[50px] h-[50px] object-contain" />
          <h2 className="text-base lg:text-xl text-white">Coming Soon</h2>

          <h1 className="text-xl lg:text-3xl text-white">
            Cyber Research Society
          </h1>

          <FlipClockCountdown
            to={currentTime + distance}
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            duration={0.5}
            className="flip-clock"
          />
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
