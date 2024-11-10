import React from "react";
import heroBg from "../assets/heroBg.svg";

const Hero2 = ({ center, heading, subheading, other }) => {
  return (
    <section className="relative overflow-hidden">
      <img
        loading="eager"
        src={heroBg}
        alt="hero Bg"
        className="absolute max-sm:min-w-[300vw] sm:w-full h-auto top-[-30%] sm:top-[-40%] left-0 right-0 animate-bgMove"
      />
      <div
        className={`${
          center ? "text-center items-center" : "items-start h-fit"
        } relative z-10 text-dark max-w-6xl mx-auto py-24 px-5 flex flex-col gap-6`}
      >
        <h1 className="text-4xl sm:text-7xl !leading-tight font-medium">
          {heading}
        </h1>
        <p className="text-xl sm:text-3xl leading-tight max-w-[35ch] mb-4">
          {subheading}
        </p>
        {other}
      </div>
    </section>
  );
};

export default Hero2;
