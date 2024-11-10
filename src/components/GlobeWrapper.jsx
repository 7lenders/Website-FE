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
        clipPath: `circle(0% at ${circleLoc.left}px ${circleLoc.top}px)`,
      },
      {
        clipPath: `circle(200% at ${circleLoc.left}px ${circleLoc.top}px)`,
      }
    );

    ScrollTrigger.create({
      trigger: heroSec.current,
      start: "top top",
      end: "bottom 60%",
      scrub: 1,
      animation: tl,
      // pin:true,
    });

    return () => {
      tl.kill();
    };
  }, [circleLoc]);

  return (
    <section
      ref={heroSec}
      className="heroSection w-full relative overflow-hidden bg-main"
    >
      <div
        ref={hero}
        className="hero w-full h-full
      flex flex-col text-black"
      >
        <div
          ref={circle}
          className="absolute left-1/2 -top-1/2 h-0 w-0 -translate-x-1/2 translate-y-1/2"
        ></div>
      <Globe mode="borrower" />
      </div>

      <div
        ref={heroBg}
        style={{ clipPath: "circle(0% at 50% 50%)" }}
        className="heroBg w-full h-full
        flex flex-col text-white bg-n1 absolute top-0 left-0"
      >
        <div
          ref={circleBg}
          className="absolute left-1/2 -top-1/2 h-0 w-0 -translate-x-1/2 translate-y-1/2"
        ></div>
        <Globe mode="lender" />
      </div>
    </section>
  );
}
