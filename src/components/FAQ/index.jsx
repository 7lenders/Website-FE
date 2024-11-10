import React, { useState } from "react";
import "./style.css";
import subIcon from "../../assets/subIcon.svg";
import addIcon from "../../assets/addIcon.svg";
import { motion } from "framer-motion";

export default function FAQ({faqs}) {

  const [faqStates, setFaqStates] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    const newFaqStates = [...faqStates];
    newFaqStates[index] = !newFaqStates[index];
    setFaqStates(newFaqStates);
  };

  return (
    <section className="FAQ">
      <div className="FAQCon">
        {faqs.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={index}
              className="card"
            >
              <div className="head">
                <h3>{item.title}</h3>
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`${faqStates[index] ? "close" : "open"}`}
                >
                  <img src={subIcon} alt="subicon" className="sub" />
                  <img src={addIcon} alt="addicon" className="add" />
                </button>
              </div>
              <div
                className="body"
                style={{
                  maxHeight: faqStates[index]
                    ? `${
                        document.getElementById(`faq-${index}`).scrollHeight
                      }px`
                    : "0px",
                }}
              >
                <p id={`faq-${index}`}>{item.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
