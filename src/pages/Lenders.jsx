import React from "react";

import Step1 from "../assets/Lender1.svg";
import Step2 from "../assets/Lender2.svg";
import Step3 from "../assets/Lender3.svg";
import Step4 from "../assets/Lender4.svg";
import Step5 from "../assets/Lender5.svg";
import LenderBg from "../assets/bg/LenderBg.png";
import Process from "../components/Process";
import Quote from "../components/Quote";
import KeyFeatures from "../components/KeyFeatures";
import Hero2 from "../components/Hero2";

import timeManagement from "../assets/time-management.png";
import highinterest from "../assets/highinterest.png";
import cryptocurrency from "../assets/cryptocurrency.png";
import valid from "../assets/valid.png";
import funding from "../assets/funding.png";

const Lenders = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      description: "Deposit fiat into your 7lenders account.",
      image: Step1,
    },
    {
      id: 2,
      title: "Step 2",
      description:
        "Set your lending terms (interest rate, loan duration, and amount",
      image: Step2,
    },
    {
      id: 3,
      title: "Step 3",
      description:
        "Funds are secured by smart contracts and held until a borrower matches your terms.",
      image: Step3,
    },
    {
      id: 4,
      title: "Step 4",
      description:
        "Once the loan is approved, your fiat is lent, and you start earning interest immediately.",
      image: Step4,
    },
    {
      id: 5,
      title: "Step 5",
      description: "Upon loan repayment, withdraw your fiat or reinvest it.",
      image: Step5,
    },
  ];

  const Features = [
    {
      img: highinterest,
      title: "High-Interest Returns",
      detail: "Set your own rates and earn competitive returns.",
    },
    {
      img: cryptocurrency,
      title: "Secured with Crypto",
      detail: "Every loan is backed by crypto collateral, reducing risk.",
    },
    {
      img: valid,
      title: "Flexible Terms",
      detail:
        "You decide the loan duration and interest rate, giving you control.",
    },
    {
      img: funding,
      title: "Instant Access to Funds",
      detail: "Withdraw your returns as soon as borrowers repay.",
    },
    {
      img: timeManagement,
      title: "Real-Time Monitoring",
      detail:
        "Track your active loans and interest in real-time on the 7lenders App.",
    },
  ];
  return (
    <>
      <Hero2
        heading={
          <>
            <span className="text-n2">Earn Secure</span>, <br />
            Competitive Returns <br />
            as a Lender
          </>
        }
        subheading="Deposit fiat and start earning interest with crypto-backed loans."
      />
      <Quote
        img={LenderBg}
        text="Lend in fiat, secure your future with crypto."
      />
      <KeyFeatures list={Features} />
      <div className="my-16">
        <h1 className="text-dark text-center mb-16 text-4xl sm:text-6xl font-medium leading-tight">
          How It Works for Lenders
        </h1>
        <Process steps={steps} />
      </div>
      
    </>
  );
};

export default Lenders;
