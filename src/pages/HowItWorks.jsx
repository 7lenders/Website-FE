import React from "react";
import HowItWorksBg from "../assets/bg/HowItWorksBg.png";
import Quote from "../components/Quote";
import Hero2 from "../components/Hero2";
import KeyFeatures from "../components/KeyFeatures";

import timeManagement from "../assets/time-management.png";
import highinterest from "../assets/highinterest.png";
import cryptocurrency from "../assets/cryptocurrency.png";
import valid from "../assets/valid.png";
import funding from "../assets/funding.png";

const HowItWorks = () => {
  const Lenders = [
    {
      img: highinterest,
      title: "Deposit Fiat",
      detail: "Lenders deposit fiat into their 7lenders wallet.",
    },
    {
      img: cryptocurrency,
      title: "Set Terms",
      detail:
        "Define your loan terms (interest rate, amount, duration)",
    },
    {
      img: valid,
      title: "Match with Borrowers",
      detail:
        "Borrowers review and accept your terms.",
    },
    {
      img: funding,
      title: "Start Earning",
      detail:
        "Once the loan is approved, you begin earning interest.",
    },
    {
      img: timeManagement,
      title: "Withdraw Returns",
      detail:
        "Withdraw your fiat and interest after the borrower repays.",
    },
  ];
  const Borrowers = [
    {
      img: highinterest,
      title: "Deposit Crypto",
      detail: "Use your crypto as collateral by depositing it into 7lenders's secure wallet.",
    },
    {
      img: cryptocurrency,
      title: "Choose a Loan",
      detail:
        "Browse available lender offers with varying rates and durations.",
    },
    {
      img: valid,
      title: "Fiat Transfer",
      detail:
        "Once approved, fiat is transferred to your 7lenders wallet or directly to your bank.",
    },
    {
      img: funding,
      title: "Repay Loan",
      detail:
        "Repay the loan based on the agreed terms, and your crypto is returned.",
    },
  ];

  return (
    <>
      <Hero2
        heading={
          <>
            How 7lenders <br />
            <span className="text-n2">Works</span>
          </>
        }
        subheading="Simple, secure, and transparent lending and borrowing powered by blockchain."
      />
      <Quote
        img={HowItWorksBg}
        text="A seamless process for both lenders and borrowers."
      />
      <KeyFeatures title="For Lenders" list={Lenders} />
      <KeyFeatures title="For Borrowers" list={Borrowers} />
    
   
    </>
  );
};

export default HowItWorks;
