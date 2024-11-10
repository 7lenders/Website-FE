import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Globe from "./Globe/index.jsx";

export default function Hero() {
  const hero = useRef();
  const heroSec = useRef();
  const heroBg = useRef();
  const circle = useRef();
  const circleBg = useRef();
  const [circleLoc, setCircleLoc] = useState({ left: 0, top: 0 });

  function setCirclePosition() {
    const element = circleBg.current;
    if (element) {
      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        setCircleLoc({
          left: rect.left + rect.width / 2,
          top: rect.top + window.scrollY + rect.height / 2,
        });
      });
    }
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      setCirclePosition();
    }, 2000);

    setCirclePosition();

    window.addEventListener("resize", setCirclePosition);
    return () => {
      window.removeEventListener("resize", setCirclePosition);
    };
  }, []);

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      heroBg.current,
      {
        clipPath: `circle(0% at ${circleLoc.left}px 50%)`,
      },
      {
        clipPath: `circle(300% at ${circleLoc.left}px 50%)`,
      }
    );

    ScrollTrigger.create({
      trigger: heroSec.current,
      start: "top 40%",
      end: "top top",
      scrub: 1,
      animation: tl,
    });

    return () => {
      tl.kill();
    };
  }, [circleLoc]);

  return (
    <section
      ref={heroSec}
      className="w-full relative overflow-hidden bg-main mb-8"
    >
      <div
        ref={hero}
        className="hero w-full h-full flex flex-col text-black"
      >
        <div
          ref={circle}
          className="absolute left-1/2 -top-1/2 h-0 w-0 -translate-x-1/2 translate-y-1/2"
        ></div>
        <div className="items-center py-24 flex flex-col gap-16 px-5">
          <div className="flex flex-col gap-4 sm:max-w-[21rem] items-center text-center">
            <h1 className="text-center text-4xl sm:text-5xl font-bold mx-auto text-n2 max-w-[20ch] !leading-tight">
              For Lenders
            </h1>
            <p className="text-2xl leading-tight">
              Access a broader borrower pool across different blockchain assets.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={heroBg}
        style={{ clipPath: "circle(0% at 50% 50%)" }}
        className="w-full h-full
        flex flex-col text-white bg-n1 absolute top-0 left-0 inset-0"
      >
        <div
          ref={circleBg}
          className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 bg-red-400"
        ></div>
        <div className="items-center py-24 flex flex-col gap-16 text-white px-5">
          <div className="flex flex-col gap-4 sm:max-w-[21rem] items-center text-center">
            <h1 className="text-center text-4xl sm:text-5xl font-bold mx-auto text-n2 max-w-[20ch] !leading-tight">
              For Borrowers
            </h1>
            <p className="text-2xl leading-tight">
              Deposit Ethereum and request fiat while still holding Bitcoin in
              the same wallet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
