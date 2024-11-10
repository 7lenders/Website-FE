import React from "react";
import { motion } from "framer-motion";

const KeyFeatures = ({ list, title = "Key Features" }) => {
  return (
    <section className="py-16 sm:py-24 px-5 max-w-7xl mx-auto">
      <h1 className="text-center mb-4 text-4xl sm:text-6xl font-medium mx-auto max-w-[20ch] !leading-tight">
        {title}
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {list.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={index}
              className="flex-grow min-w-[20rem] sm:max-w-[calc(33%-1rem)] text-center px-5 sm:px-12 pt-4 pb-6 rounded-3xl bg-light flex flex-col gap-4 mt-10 transition-colors hover:bg-n2 hover:text-white group"
            >
              <div className="border-2 border-white group-hover:border-n2 w-20 aspect-square -mt-14 rounded-full bg-white mx-auto p-4">
                <img src={item.img} alt="icon" className="w-full" />
              </div>
              <h2 className="text-2xl font-medium">{item.title}</h2>
              <p className="text-lg leading-tight">{item.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyFeatures;
