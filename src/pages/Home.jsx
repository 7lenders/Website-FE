import React, { Suspense, lazy } from "react";

import Hero from "../components/Hero";
import GlobeWrapper from "../components/GlobeWrapper";
import Marquee from "../components/Marquee";
import FAQ from "../components/FAQ";
import Banner from "../components/Banner";
import Process from "../components/Process";

const SecurityCore = lazy(() => import("../components/SecurityCore"));

import Step1 from "../assets/Step1.svg";
import Step2 from "../assets/Step2.svg";
import Step3 from "../assets/Step3.svg";
import Step4 from "../assets/Step4.svg";
import Step5 from "../assets/Step5.svg";

const Home = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      description: "A seamless process for both lenders and borrowers.",
      image: Step1,
    },
    {
      id: 2,
      title: "Step 2",
      description: "Lenders deposit fiat and set their terms.",
      image: Step2,
    },
    {
      id: 3,
      title: "Step 3",
      description: "Loan agreement signed via a secure smart contract.",
      image: Step3,
    },
    {
      id: 4,
      title: "Step 4",
      description: "Borrowers receive fiat, lenders earn interest.",
      image: Step4,
    },
    {
      id: 5,
      title: "Step 5",
      description: "Crypto collateral is released when the loan is repaid.",
      image: Step5,
    },
  ];

  const faqs = [
    {
      title: "How does 7lenders ensure the safety of funds?",
      detail:
        "7lenders secures funds through audited smart contracts that manage all transactions transparently and automatically. Crypto collateral is securely held on the blockchain, while fiat custody is handled by trusted financial institutions. Additionally, 7lenders uses encryption, two-factor authentication, and regular security audits to protect all user accounts.",
    },
    {
      title: "What happens if a borrower defaults?",
      detail:
        "If a borrower defaults, 7lenders' smart contracts automatically liquidate the borrower's crypto collateral to repay the lender. This process ensures the lender's funds are protected. The entire transaction is secure, transparent, and handled without manual intervention.",
    },
    {
      title: "How is the crypto collateral valued?",
      detail:
        "The crypto collateral is valued in real-time based on current market prices from trusted exchanges. 7lenders regularly updates collateral values to ensure accurate loan-to-value ratios. This dynamic approach protects both borrowers and lenders.",
    },
    {
      title: "What are the interest rates and fees for lenders?",
      detail:
        "Interest rates on 7lenders are set by individual lenders, allowing flexibility based on market demand and risk appetite. Lenders may earn competitive returns, while 7lenders charges a small transaction fee on each loan facilitated. All fees and rates are transparently displayed before finalizing any agreement.",
    },
    {
      title: "How can I get started as a borrower?",
      detail:
        "To get started as a borrower, simply sign up on the 7lenders platform and deposit your crypto as collateral. Next, browse lender offers, choose terms that fit your needs, and finalize the loan agreement. Once approved, you'll receive fiat funds directly to your account.",
    },
    {
      title: "Is there a mobile app for 7lenders?",
      detail:
        "Yes, 7lenders offers a mobile app available for both iOS and Android. The app provides full access to lending and borrowing features, allowing you to manage your account and track transactions on the go. Download links are available on our website.",
    },
  ];

  return (
    <>
      <Hero />
      <GlobeWrapper />
      <Marquee direction={"right"} speed={0.2} />
      <Process steps={steps} note />
      <SecurityCore />

      <section className="py-12 sm:py-16 sm:max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <h1 className="text-center mb-4 text-4xl sm:text-6xl font-medium leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-xl sm:text-3xl">
            Got questions? We've got answers.
          </p>
        </div>
        <FAQ faqs={faqs} />
      </section>
      <Banner />
    </>
  );
};

export default Home;
