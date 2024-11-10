import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const data = ["How 7lenders Works", "How 7lenders Works"];

export default function Marquee({ direction, speed }) {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;
  const ArrayData = [...data, ...data, ...data, ...data];

  useEffect(() => {
    const rightAnimation = () => {
      if (xPercent > 0) {
        xPercent = -100;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      requestAnimationFrame(rightAnimation);
      xPercent += speed / 10;
    };

    const leftAnimation = () => {
      if (xPercent < -100) {
        xPercent = 0;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      requestAnimationFrame(leftAnimation);
      xPercent -= speed / 10;
    };

    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);

  return (
    <section className="py-16 sm:py-36 w-full flex justify-center items-center overflow-hidden">
      <div
        ref={marquee}
        className="h-fit w-fit flex-nowrap relative flex  flex-shrink-0"
      >
        <div
          className="h-full flex-1 flex w-fit flex-nowrap items-center flex-shrink-0"
          ref={first}
        >
          {ArrayData.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center w-fit py-3 px-2 sm:px-4 gap-4 sm:gap-8 flex-shrink-0"
              >
                <div className="text-4xl sm:text-[5.7rem] text-dark whitespace-nowrap flex-shrink-0">
                  {item}
                </div>
              </div>
            );
          })}
        </div>
        <div
          ref={second}
          className="flex-shrink-0 h-full flex w-full flex-nowrap items-center absolute left-full top-0"
        >
          {ArrayData.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center w-fit py-3 px-2 sm:px-4 gap-4 sm:gap-8 flex-shrink-0"
              >
                <div className="text-4xl sm:text-[5.7rem] text-dark whitespace-nowrap flex-shrink-0">
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
