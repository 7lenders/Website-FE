import React, { useState } from "react";

import phone from "../../assets/phone.png";
import bitcoin from "../../assets/bitcoin.png";
import dollar from "../../assets/dollar.png";
import rating from "../../assets/rating.png";

import shield from "../../assets/shield.png";
import moneyBag from "../../assets/money-bag.png";
import opportunity from "../../assets/opportunity.png";

import "./style.css";
import { motion } from "framer-motion";

export default function Globe({ mode }) {
  const Borrowers = {
    icon1: phone,
    icon2: bitcoin,
    icon3: dollar,
    icon4: rating,
    title1: "Earn stable returns in fiat.",
    title2: "Set your terms: Interest rate, duration, and more.",
    title3: "Safe, crypto-backed loans.",
    title4: "Instant access to funds post-borrower approval.",
  };

  const Lenders = {
    icon1: shield,
    icon2: bitcoin,
    icon3: moneyBag,
    icon4: opportunity,
    title1: "Borrow from multiple lenders at competitive rates.",
    title2: "Flexible terms suited to your needs.",
    title3: "Keep your crypto, access fiat.",
    title4: "Secure, transparent smart contracts.",
  };

  const activeContent = mode === "lender" ? Lenders : Borrowers;
  const isBorrowersActive = mode === "lender" ? false : true;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative py-28 sm:py-36 overflow-hidden`}
    >
      {/* circles */}
      <div className="w-full h-full flex items-center justify-center pt-16 sm:pt-0">
        <Circle
          pos={`p-[40px] sm:p-[4vw] ${
            isBorrowersActive ? "border-[#F1EEE3]" : "border-[#F1EEE380]"
          }`}
        >
          <div
            className={`w-full h-full absolute rotateCenter rounded-full`}
            style={{ animationDuration: "50s" }}
          >
            <Icon
              pos={"left-[0%] top-[50%] -translate-y-1/2 -translate-x-1/2"}
              img={activeContent.icon1}
            />
            <Icon
              pos={"left-[50%] top-[0%] -translate-y-1/2 -translate-x-1/2"}
              img={activeContent.icon2}
            />
            <Icon
              pos={"right-[0%] bottom-[50%] translate-y-1/2 translate-x-1/2"}
              img={activeContent.icon3}
            />
            <Icon
              pos={"right-[50%] bottom-[0%] translate-y-1/2 translate-x-1/2"}
              img={activeContent.icon4}
            />
          </div>
          <Circle
            pos={`p-[15px] sm:p-[1vw] ${
              isBorrowersActive ? "border-[#F1EEE3]" : "border-[#F1EEE380]"
            }`}
          >
            <div
              className="w-full h-full absolute rotateCenter rounded-full"
              style={{ animationDuration: "50s" }}
            >
              <Text
                detail={activeContent.title1}
                pos={"left-[0%] top-[0%] -translate-y-1/2 -translate-x-1/2"}
              />
              <Text
                detail={activeContent.title2}
                pos={"right-[0%] top-[0%] -translate-y-1/2 -translate-x-1/2"}
              />
              <Text
                detail={activeContent.title3}
                pos={"left-[0%] bottom-[0%] -translate-y-1/2 -translate-x-1/2"}
              />
              <Text
                detail={activeContent.title4}
                pos={"right-[0%] bottom-[0%] -translate-y-1/2 -translate-x-1/2"}
              />
            </div>

            <Circle pos={"p-[0px] border-[#ffffff00]"}>
              <div className="flex flex-col gap-6 items-center">
                <button className="flex items-center px-6 h-[2.9rem] bg-transparent border border-n2 text-n2 hover:bg-n2 hover:text-white hover:shadow-md transition-all duration-300 rounded-full text-2xl sm:text-3xl font-medium whitespace-nowrap">
                  {isBorrowersActive ? "For Borrowers" : "For Lenders"}
                </button>
                <div className="flex items-center px-10 h-[4rem] sm:h-[5rem] bg-n2 rounded-full text-3xl sm:text-6xl font-medium text-white whitespace-nowrap">
                  {!isBorrowersActive ? "For Borrowers" : "For Lenders"}
                </div>
                <p className="text-lg sm:text-3xl leading-tight text-center mb-6 max-w-[36ch]">
                  {isBorrowersActive ? (
                    <>
                      Grow your wealth with confidence.
                      <br />
                      Lenders can deposit fiat and earn interest with secured
                      crypto collateral.
                    </>
                  ) : (
                    <>
                      Unlock liquidity with your crypto.
                      <br />
                      Borrowers can use their crypto as collateral to access
                      fiat.
                    </>
                  )}
                </p>
                {isBorrowersActive ? (
                  <button className="flex items-center px-10 h-[3.2rem] bg-nv1 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-base font-medium text-white">
                    Start Lending Today
                  </button>
                ) : (
                  <button className="flex items-center px-10 h-[3.2rem] bg-nv1 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-base font-medium text-white">
                    Apply for a loan
                  </button>
                )}
              </div>
            </Circle>
          </Circle>
        </Circle>
      </div>
    </motion.div>
  );
}

function Icon({ img, pos }) {
  return (
    <div
      className={`w-[7rem] sm:w-[9vw] absolute aspect-square ${pos} z-[100]`}
    >
      <img
        src={img}
        alt=""
        className="block w-[60%] rotateCenterR aspect-square absolute absCenter"
      />
    </div>
  );
}

function Circle({ pos, children }) {
  return (
    <div
      className={`rounded-full border aspect-square flex-shrink-0 flex items-center justify-center relative ${pos}`}
    >
      {children}
    </div>
  );
}

function Text({ pos, detail }) {
  return (
    <div className={` absolute z-50 ${pos}`}>
      <p className=" w-[20ch] h-[14ch] px-8 text-center flex items-center bg-ns1 rounded-3xl absolute rotateCenterR text-base sm:text-xl text-white ">
        {detail}
      </p>
    </div>
  );
}
