import React from "react";
import { motion } from "framer-motion";

const Working = ({ list, title = "Key Features" }) => {
  return (
    <section className="py-8 sm:py-8 px-5 max-w-7xl mx-auto">
      <h1 className="text-center mb-8 text-4xl sm:text-5xl font-bold mx-auto text-n2 max-w-[20ch] !leading-tight">
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
              className="flex-grow min-w-[20rem] sm:max-w-[calc(33%-1rem)] text-center px-5 sm:px-12 pt-4 pb-6 rounded-3xl  flex flex-col gap-4"
            >
              <img src={item.img} alt="icon" className="w-full mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-n2">{item.title}</h2>
              <p className="text-xl leading-tight">{item.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default Working;
