import React from "react";
import HeroImage from "../assets/Hero.png";
import HeroCircles from "../assets/heroCircles.svg";
import appstore from "../assets/appstore.svg";
import playstore from "../assets/playstore.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <svg
        className="max-sm:hidden w-full h-full object-cover inset-0 absolute"
        width="1920"
        height="984"
        viewBox="0 0 1920 984"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M336.5 745.5C230.5 611 63.5 658.667 -4 689.5V0H1923.5V950.5C1613 1030 1685.5 809 1424 803C1162.5 797 1087.5 1105 819 929C550.5 753 499 970.5 336.5 745.5Z"
          fill="#f2f2f2"
        />
      </svg>
      <svg
        className="sm:hidden w-full h-full object-cover inset-0 absolute"
        width="440"
        height="817"
        viewBox="0 0 440 817"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M17.6218 675.551C-45.4558 595.577 -144.833 623.92 -185 642.253V0.5H962V797.445C777.23 844.716 820.373 713.309 664.762 709.741C509.151 706.173 464.52 889.312 304.744 784.661C144.967 680.011 114.321 809.337 17.6218 675.551Z"
          fill="#f2f2f2"
        />
      </svg>

      <div className="max-sm:text-dark max-w-7xl mx-auto relative z-10 pt-14 sm:pt-24 pb-36 px-5 flex flex-col gap-14 items-center">
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex max-sm:items-center max-sm:text-center flex-col gap-8"
          >
            <h1 className="text-4xl sm:text-7xl !leading-tight">
              Unlock the <span className="sm:text-n2">Future of Lending</span>{" "}
              with <br />
              7lenders
            </h1>
            <p className="text-lg sm:text-2xl leading-tight">
              Lend in fiat, borrow in crypto. Secure and innovative peer-to-peer
              lending platform.
            </p>
            <div className="flex max-sm:flex-col gap-3 sm:gap-6">
              <Link to={"/Lender"}>
                <button className="px-10 h-16 sm:h-[4.65rem] bg-n2 sm:bg-nv1 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-lg font-medium text-white">
                  Get Started as a Lender
                </button>
              </Link>
              <Link to={"/Borrower"}>
                <button className="px-10 h-16 sm:h-[4.65rem] bg-dark sm:bg-n1 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-lg font-medium text-white">
                  Borrow with Crypto Collateral
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex-1 hidden sm:flex items-center relative"
          >
            <img
              src={HeroImage}
              loading="eager"
              alt="HeroImage"
              className="relative z-20 w-full"
            />
            <img
              src={HeroCircles}
              loading="eager"
              alt="HeroCircles"
              className="animate-float absolute left-[-10%] top-[-10%] w-[50%]"
            />
            <svg
              className="z-30 animate-floatSlow absolute right-[15%] top-[-10%] w-[18%]"
              viewBox="0 0 125 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="62.5" cy="62.5" r="62.5" fill="#1D3557" />
            </svg>
            <svg
              className="animate-floatSlow absolute left-[2%] bottom-[0%] w-[18%]"
              viewBox="0 0 109 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="54.5" cy="54.5" r="54.5" fill="#2EC4B6" />
            </svg>
            <svg
              className="animate-floatFast absolute right-[0%] top-[10%] w-[50%]"
              viewBox="0 0 381 381"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="190.5" cy="190.5" r="190.5" fill="#f3f3f3" />
            </svg>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="max-sm:hidden text-3xl font-semibold leading-tight text-center"
        >
          Powered by Blockchain and AI
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-center flex flex-col items-center gap-5"
        >
          <p className="text-xl leading-tight">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
