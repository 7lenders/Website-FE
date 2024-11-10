import React from "react";
import SecurityBg from "../assets/bg/SecurityBg.png";
import Quote from "../components/Quote";
import Hero2 from "../components/Hero2";
import KeyFeatures from "../components/KeyFeatures";

import timeManagement from "../assets/time-management.png";
import highinterest from "../assets/highinterest.png";
import cryptocurrency from "../assets/cryptocurrency.png";
import valid from "../assets/valid.png";
import funding from "../assets/funding.png";

const Security = () => {
  const Features = [
    {
      img: highinterest,
      title: "Smart Contracts",
      detail:
        "Automated, transparent agreements ensure loans are secure and executed without interference.",
    },
    {
      img: cryptocurrency,
      title: "Crypto Collateralization",
      detail:
        "Borrower's crypto is securely locked in 7lenders's smart contracts, ensuring the lender is protected.",
    },
    {
      img: valid,
      title: "2FA & Encryption",
      detail:
        "All transactions are encrypted, and two-factor authentication (2FA) ensures user account security.",
    },
    {
      img: funding,
      title: "Regular Security Audits",
      detail:
        "Our system undergoes frequent audits by leading blockchain security firms.",
    },
    {
      img: timeManagement,
      title: "Collateral Liquidation",
      detail:
        "If borrowers default, smart contracts automatically liquidate crypto collateral to repay lenders.",
    },
    {
      img: valid,
      title: "Partnered with Trusted Financial Institutions",
      detail:
        "Fiat transactions are handled securely in partnership with well-known financial providers.",
    },
  ];

  return (
    <>
      <Hero2
        heading={
          <>
            Security at the{" "}
            <span className="text-n2">
              Core <br /> of
            </span>{" "}
            7lenders
          </>
        }
        subheading="Your funds and assets are protected by 
cutting-edge blockchain technology."
      />
      <Quote
        img={SecurityBg}
        text="Built on trust and AI, powered by smart contracts."
      />
      <KeyFeatures title="Key Security Features" list={Features} />
      <div className="my-16">
        <button className="mx-auto flex items-center justify-center gap-3 px-10 h-[4.1rem] bg-n2 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-lg font-medium text-white">
          <span>Learn More About Security</span>
        </button>
      </div>
    </>
  );
};

export default Security;
