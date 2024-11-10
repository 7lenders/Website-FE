import React from "react";

import Step1 from "../assets/Borrower1.svg";
import Step2 from "../assets/Borrower2.svg";
import Step3 from "../assets/Borrower3.svg";
import Step4 from "../assets/Borrower4.svg";
import Step5 from "../assets/Borrower5.svg";
import LenderBg from "../assets/bg/BorrowerBg.png";
import Process from "../components/Process";
import Quote from "../components/Quote";
import Hero2 from "../components/Hero2";
import KeyFeatures from "../components/KeyFeatures";

import timeManagement from "../assets/time-management.png";
import highinterest from "../assets/highinterest.png";
import cryptocurrency from "../assets/cryptocurrency.png";
import valid from "../assets/valid.png";
import funding from "../assets/funding.png";

const Borrower = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      description:
        "Deposit your crypto as collateral into your 7lenders wallet.",
      image: Step1,
    },
    {
      id: 2,
      title: "Step 2",
      description:
        "Review available loans with different interest rates and terms.",
      image: Step2,
    },
    {
      id: 3,
      title: "Step 3",
      description:
        "Choose the best offer that suits your needs and approve the loan.",
      image: Step3,
    },
    {
      id: 4,
      title: "Step 4",
      description:
        "Fiat is transferred to your 7lenders wallet, ready for withdrawal or transfer.",
      image: Step4,
    },
    {
      id: 5,
      title: "Step 5",
      description:
        "Repay the loan as per the agreed terms, and your crypto collateral is released back to you.",
      image: Step5,
    },
  ];

  const Features = [
    {
      img: highinterest,
      title: "Keep Your Crypto",
      detail: "Secure your assets and get access to fiat without selling.",
    },
    {
      img: cryptocurrency,
      title: "Flexible Terms",
      detail:
        "Choose from multiple lenders with rates and terms that suit your needs.",
    },
    {
      img: valid,
      title: "Instant Access to Fiat",
      detail:
        "As soon as a lender approves your loan, fiat is transferred directly to your account.",
    },
    {
      img: funding,
      title: "Transparent Process",
      detail:
        "Loans are secured with smart contracts, ensuring full transparency.",
    },
    {
      img: timeManagement,
      title: "No Credit Checks",
      detail:
        "Your crypto collateral serves as the guarantee—no traditional credit scores required.",
    },
  ];

  return (
    <>
      <Hero2
        heading={
          <>
            Access Fiat Liquidity <br /> with
            <span className="text-n2">Your Crypto</span>
          </>
        }
        subheading="Borrow fiat by securing your crypto as collateral."
      />
      <Quote
        img={LenderBg}
        text="Unlock the value of your crypto without selling."
      />
      <KeyFeatures list={Features} />
      <div className="my-16">
        <h1 className="text-dark text-center mb-16 text-4xl sm:text-6xl font-medium leading-tight">
          How It Works for Borrowers
        </h1>
        <Process steps={steps} />
      </div>
  
    </>
  );
};

export default Borrower;
