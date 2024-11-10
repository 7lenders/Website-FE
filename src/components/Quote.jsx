import React from "react";

const Quote = ({ img, text }) => {
  return (
    <section className="relative">
      <h1 className="absolute top-[20%] text-white text-center text-5xl sm:text-7xl font-bold !leading-snug max-w-[20ch] left-1/2 -translate-x-1/2 w-full px-5">
        {text}
      </h1>
      <img
        src={img}
        alt="image"
        className="object-cover w-full h-[min(100vh,850px)]"
      />
    </section>
  );
};

export default Quote;
