import React from "react";

import { motion } from "framer-motion";

const Process = ({ steps, note }) => {
  return (
    <section className="flex flex-col gap-16 sm:gap-36 max-w-6xl mx-auto overflow-hidden px-5">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`${
            step.id % 2 === 0 ? "flex-row-reverse" : ""
          } w-full flex max-sm:flex-col sm:items-center gap-6 sm:gap-12`}
        >
          <motion.div
            initial={{ opacity: 0, x: step.id % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sm:w-[45%] flex flex-col gap-4 sm:gap-6 items-start justify-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-n2 leading-tight">
              {step.title}
            </h2>
            <h3 className="text-2xl sm:text-4xl leading-tight sm:max-w-[17ch]">
              {step.description}
            </h3>
          </motion.div>
          <motion.img
          loading="eager"
            initial={{ opacity: 0, x: step.id % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={step.image}
            alt={`${step.title} figure`}
            className="h-auto sm:w-[55%] max-sm:p-4"
          />
        </div>
      ))}

      {note && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 px-10 sm:px-20 font-bold rounded-full bg-[#EAEFF4] py-4 mx-auto text-base sm:text-2xl text-center"
        >
          Powered by Blockchain and AI
        </motion.div>
      )}
    </section>
  );
};

export default Process;
