import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";

import SmartContracts from "../../assets/security1.png";
import CryptoCollateral from "../../assets/security2.png";
import FiatCustody from "../../assets/security3.png";
import AuditedSystem from "../../assets/security4.png";
import Card from "./Card";
import { gsap } from "gsap";
import { MoveRight, MoveLeft } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export default function SecurityCore() {
  const aboutRef = useRef();
  const itemsRef = useRef();
  const aboutSec = useRef();
  const stericRef = useRef();
  const [currentSec, setCurrentSec] = useState(1);
  const maxSec = 4;

  function isMobile() {
    return window.innerWidth <= 640;
  }

  const nextSection = () => {
    if (!itemsRef.current || !itemsRef.current.children[0]) return;

    const currentSecValue = currentSec + 1 <= maxSec ? currentSec + 1 : maxSec; // Capture the current value of currentSec
    gsap.to(itemsRef.current, {
      x: -(
        (itemsRef.current.children[0].offsetWidth + 40) *
        (currentSecValue - 1)
      ), // Use currentSecValue here
    });
    setCurrentSec(currentSecValue);
  };

  const prevSection = () => {
    if (!itemsRef.current || !itemsRef.current.children[0]) return;

    const currentSecValue = currentSec - 1 >= 1 ? currentSec - 1 : 1; // Capture the current value of currentSec
    gsap.to(itemsRef.current, {
      x: -(
        (itemsRef.current.children[0].offsetWidth + 40) *
        (currentSecValue - 1)
      ), // Use currentSecValue here
    });
    setCurrentSec(currentSecValue);
  };

  useGSAP(() => {
    // GSAP animation for the steric rotation
    if (stericRef.current) {
      gsap.to(stericRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
    }

    if (
      !isMobile() &&
      aboutRef.current &&
      aboutSec.current
    ) {
      gsap.set(aboutRef.current, {
        x: Math.max(1320 - window.innerWidth, 0) + 120,
        ease: "none",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#aboutSecWrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin:1,
          },
        })
        .to(
          aboutRef.current,
          {
            x: -(aboutRef.current.offsetWidth - window.innerWidth * 0.8),
            ease: "none",
          },
          "a"
        );
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <section
      id="aboutSecWrapper"
      className=" flex flex-col w-full h-[200vh] relative"
    >
      <div
        ref={aboutSec}
        className="sm:sticky top-0 w-full sm:h-screen overflow-hidden"
      >
        <div className=" heroSection sm:h-screen w-full relative px-5 sm:px-16 2xl:px-32 py-12 flex flex-col justify-between">
          <div className="max-w-7xl mx-auto sm:mb-6 w-full">
            <h1 className="mb-4 text-4xl sm:text-6xl font-medium leading-tight">
              Security at the Core
            </h1>
            <p className="text-xl sm:text-3xl">
              Trust and transparency are our foundation.
            </p>
          </div>
          <div
            ref={aboutRef}
            className="w-fit pt-4 sm:pt-0 flex flex-nowrap flex-grow items-center"
          >
            <div>
              <div
                ref={itemsRef}
                className="flex flex-nowrap mt-4 2xl:mt-8 gap-10"
              >
                <Card
                  text="Smart Contracts"
                  imageSrc={SmartContracts}
                  detail="Automate secure lending transactions with full transparency."
                />
                <Card
                  text="Crypto Collateral"
                  imageSrc={CryptoCollateral}
                  detail="Secured on the blockchain, only released upon repayment."
                />
                <Card
                  text="Fiat Custody"
                  imageSrc={FiatCustody}
                  detail="Partnered with trusted financial institutions for secure fiat management."
                />
                <Card
                  text="Audited System"
                  imageSrc={AuditedSystem}
                  detail="Regular security audits by leading blockchain firms."
                />
              </div>
            </div>
          </div>
          <div className="flex sm:hidden items-center py-6 gap-6 text-2xl text-black">
            <button
              onClick={prevSection}
              className={`rounded-full w-12 aspect-square flex items-center justify-center transition-all ${
                currentSec === 1 ? "opacity-35" : "bg-light"
              }`}
            >
              <MoveLeft />
            </button>
            <button
              onClick={nextSection}
              className={`rounded-full w-12 aspect-square flex items-center justify-center transition-all ${
                currentSec === maxSec ? "opacity-35" : "bg-light"
              }`}
            >
              <MoveRight />
            </button>
          </div>
          <div className="w-full max-w-7xl mx-auto">
            <Link to="/Security">
              <button className="flex items-center px-10 h-[3.2rem] bg-nv1 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-base font-medium text-white">
                Learn More About Security
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
