import React from "react";

const Card = ({ text, imageSrc, detail }) => (
  <div className="w-[calc(100vw-2.5rem)] sm:w-[25rem] flex flex-col gap-6 shrink-0 ">
    <img src={imageSrc} alt={text} className="block w-full rounded-3xl border-2 border-n2" />
    <h1 className="text-3xl sm:text-4xl font-medium">{text}</h1>
    <p className="text-xl sm:text-2xl leading-tight sm:mb-5">
      {detail}
    </p>
  </div>
);

export default Card;
