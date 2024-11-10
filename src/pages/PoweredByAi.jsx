import React from "react";
import PoweredByAiBg from "../assets/bg/PoweredByAiBg.png";
import Quote from "../components/Quote";
import Hero2 from "../components/Hero2";
import KeyFeatures from "../components/KeyFeatures";
import Working from "../components/Working";

import Deposit from "../assets/Deposit.svg";
import Calender from "../assets/Calender.svg";
import Notification from "../assets/Notification.svg";
import Analysis from "../assets/Analysis.svg";
import Loan from "../assets/Loan.svg";

import timeManagement from "../assets/time-management.png";
import highinterest from "../assets/highinterest.png";
import cryptocurrency from "../assets/cryptocurrency.png";
import valid from "../assets/valid.png";
import funding from "../assets/funding.png";

const PoweredByAi = () => {
  const Features = [
    {
      img: highinterest,
      title: "Risk Assessment",
      detail: "Reduces default risk by analyzing borrower profiles.",
    },
    {
      img: cryptocurrency,
      title: "Smart Matching",
      detail: "Tailors lender-borrower matches for optimal rates and terms.",
    },
    {
      img: valid,
      title: "Fraud Detection",
      detail:
        "Scans transaction history and borrower data to detect anomalies.",
    },
    {
      img: funding,
      title: "Personalized Offers",
      detail: "AI provides loan suggestions tailored to each borrower's needs.",
    },
    {
      img: timeManagement,
      title: "Instant Loan Analysis",
      detail:
        "AI processes borrower profiles faster, leading to swift approvals.",
    },
    {
      img: valid,
      title: "Visual Component",
      detail:
        "A moving graph showcasing loan approval rates, AI accuracy, and risk reduction statistics.",
    },
  ];

  const LendersWorking = [
    {
      img: Deposit,
      title: "Deposit Fiat",
      detail:
        "AI instantly analyzes potential borrowers based on lender criteria.",
    },
    {
      img: Calender,
      title: "Set Terms",
      detail: "AI suggests adjustments to terms to attract borrowers.",
    },
    {
      img: Notification,
      title: "Real-Time Notifications",
      detail: "Track potential borrowers as AI matches them to your loan.",
    },
  ];

  const BorrowersWorking = [
    {
      img: Analysis,
      title: "Profile Analysis",
      detail:
        "AI assesses borrower creditworthiness without traditional scores.",
    },
    {
      img: Loan,
      title: "Loan Options",
      detail:
        "Get instant loan recommendations based on eligibility and risk factors.",
    },
  ];

  return (
    <>
      <Hero2
        heading={
          <>
            <span className="text-n2">AI-Driven Lending:</span> Smarter <br />
            Decisions, Greater Security
          </>
        }
        subheading="Leverage the power of AI to match the best rates, assess risks accurately, and streamline your lending journey."
        other={
          <>
            <button className="flex items-center px-16 h-[3.2rem] bg-nv1 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-base font-medium text-white">
              Discover AI Benefits
            </button>
          </>
        }
      />
      <Quote img={PoweredByAiBg} />
      <KeyFeatures
        title="AI Benefits for Borrowers and Lenders"
        list={Features}
      />{" "}
      <div className="my-16">
        <h1 className="text-dark text-center mb-16 text-4xl sm:text-6xl font-medium leading-tight">
          How It Works with AI
        </h1>
      </div>
      <Working title="For Lenders" list={LendersWorking} />
      <Working title="For Borrowers" list={BorrowersWorking} />
      <div className="my-16">
        <button className="mx-auto flex items-center justify-center gap-3 px-10 h-[4.1rem] bg-n2 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-lg font-medium text-white">
          <span>Experience AI-Powered Lending</span>
        </button>
      </div>
    </>
  );
};

export default PoweredByAi;
