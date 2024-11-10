import React from "react";
import appstore from "../assets/appstore.svg";
import playstore from "../assets/playstore.svg";
import banner from "../assets/banner.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
     className="relative max-w-7xl mx-auto flex items-center max-sm:flex-col px-5">

      <div className="sm:w-[70%] flex flex-col gap-3 relative z-10 sm:pt-[16rem] sm:pb-[17rem] pb-[5rem]">
        <h1 className="text-5xl sm:text-6xl leading-tight">
          Download the 7lenders App
        </h1>
        <h3 className="text-2xl sm:text-3xl leading-tight sm:mb-10 mb-6">
          Lend and borrow anytime, anywhere.
        </h3>

        <p className="text-base sm:text-xl leading-tight mb-4">
          Download App for iOS and Android apps (Available Soon)
        </p>
        <div className="flex items-center gap-4">
          <div className="hover:shadow-md transition-all">
            <img src={playstore} alt="playstore" />
          </div>
          <div className="hover:shadow-md transition-all">
            <img src={appstore} alt="appstore" />
          </div>
        </div>
      </div>
      <img
        src={banner}
        alt="banner"
        className="w-full sm:absolute sm:w-[50%] sm:right-5 sm:top-1/2 sm:-translate-y-1/2 h-auto block max-sm:pb-[5rem]"
      />
    </motion.section>
  );
};

export default Banner;
