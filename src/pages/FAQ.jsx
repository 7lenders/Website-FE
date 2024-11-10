import React from "react";
import Hero2 from "../components/Hero2";
import FAQSection from "../components/FAQ";

const FAQ = () => {
  const lenders = [
    {
      title: "How do I start lending with 7lenders?",
      detail:
        "To start lending with 7lenders, simply sign up, complete the account verification process, and deposit funds into your lender account. You can then browse available loan requests and set your terms, such as interest rate and duration, to match with borrowers.",
    },
    {
      title: "What happens if the borrower defaults?",
      detail:
        "If a borrower defaults, the crypto collateral they provided is automatically liquidated through smart contracts to cover the outstanding loan amount. This ensures lenders are protected, as funds are recovered to the extent of the collateral's value.",
    },
    {
      title: "Are my funds secure?",
      detail:
        "7lenders secures funds through audited smart contracts that manage all transactions transparently and automatically. Crypto collateral is securely held on the blockchain, while fiat custody is handled by trusted financial institutions. Additionally, 7lenders uses encryption, two-factor authentication, and regular security audits to protect all user accounts.",
    },
  ];
  const borrowers = [
    {
      title: "How do I apply for a loan?",
      detail:
        "To apply for a loan, sign up as a borrower on 7lenders, complete verification, and deposit your crypto as collateral. Then, review loan offers from lenders, select the terms that best meet your needs, and submit your application for approval.",
    },
    {
      title: "What crypto can I use as collateral?",
      detail:
        "7lenders accepts a range of popular cryptocurrencies as collateral, including Bitcoin (BTC), Ethereum (ETH), and select stablecoins. Accepted assets may vary, so please check our platform for the most up-to-date list. Using eligible crypto, you can access fiat without selling your holdings.",
    },
    {
      title: "What happens if I miss a payment?",
      detail:
        "If you miss a payment, a grace period may apply, but continued non-payment can result in the liquidation of your crypto collateral to cover the loan. Automated smart contracts manage this process transparently, helping protect lenders. Please review payment terms to avoid any potential penalties.",
    },
  ];
  const general = [
    {
      title: "How is the interest rate determined?",
      detail:
        "The interest rate on 7lenders is set by individual lenders based on market conditions, loan terms, and risk considerations. Borrowers can review available offers and choose the rate that best meets their needs. This flexibility allows for competitive and personalized lending options.",
    },
    {
      title: "Is 7lenders available in my country?",
      detail:
        "7lenders is available in many regions, but availability may vary depending on local regulations. Please check our website's list of supported countries or contact support to confirm if 7lenders operates in your location. We're constantly expanding to serve more users globally.",
    },
    {
      title: "Are there any fees?",
      detail:
        "Yes, 7lenders charges a small transaction fee for facilitating loans, which is applied once the loan is finalized. Borrowers and lenders can review applicable fees before confirming any transaction. Visit our Fees page for a detailed breakdown of costs.",
    },
  ];

  return (
    <>
      <Hero2
        center
        heading={<>Frequently Asked Questions</>}
        subheading="Answers to all your 7lenders queries."
      />
      <section className="py-12 sm:py-16 sm:max-w-6xl mx-auto px-5">
        <h2 className="text-dark text-left text-3xl sm:text-5xl font-medium leading-tight">
          For Lenders
        </h2>
        <FAQSection faqs={lenders} />
      </section>
      <section className="py-6 sm:py-10 sm:max-w-6xl mx-auto px-5">
        <h2 className="text-dark text-left text-3xl sm:text-5xl font-medium leading-tight">
          For Borrowers
        </h2>
        <FAQSection faqs={borrowers} />
      </section>
      <section className="py-6 sm:py-10 sm:max-w-6xl mx-auto px-5">
        <h2 className="text-dark text-left text-3xl sm:text-5xl font-medium leading-tight">
          General FAQs
        </h2>
        <FAQSection faqs={general} />
      </section>
   
    </>
  );
};

export default FAQ;
