import React from "react";
import MultichainWalletBg from "../assets/bg/MultichainWalletBg.png";
import Quote from "../components/Quote";
import Hero2 from "../components/Hero2";
import KeyFeatures from "../components/KeyFeatures";
import Working from "../components/Working";
import MultichainWrapper from "../components/MultichainWrapper";

import Tracking from "../assets/Tracking.svg";
import Encryption from "../assets/Encryption.svg";
import DigitalAsset from "../assets/DigitalAsset.svg";
import CrossChain from "../assets/CrossChain.svg";
import Key from "../assets/Key.svg";

import highinterest from "../assets/highinterest.png";
import cryptocurrency from "../assets/cryptocurrency.png";
import valid from "../assets/valid.png";
import funding from "../assets/funding.png";
import { Link } from "react-router-dom";

const MultichainWallet = () => {
  const Features = [
    {
      img: highinterest,
      title: "Cross-Chain Compatibility",
      detail: "Borrowers and lenders access assets on various blockchains.",
    },
    {
      img: cryptocurrency,
      title: "Unified Management",
      detail: "One wallet for all digital assets.",
    },
    {
      img: valid,
      title: "Instant Liquidity",
      detail:
        "Tap into a wide array of digital assets as collateral or lending options.",
    },
    {
      img: funding,
      title: "Easy Asset Transfer",
      detail: "Transfer between chains with minimal fees and time.",
    },
  ];

  const SecurityWorking = [
    {
      img: Encryption,
      title: "Private Key Encryption",
      detail: "Users can store assets confidently.",
    },
    {
      img: Key,
      title: "Backup and Recovery",
      detail: "Multiple recovery methods ensure asset safety.",
    },
  ];

  const WorkingData = [
    {
      img: DigitalAsset,
      title: "Deposit Digital Assets",
      detail: "Add multiple blockchain assets in one wallet.",
    },
    {
      img: CrossChain,
      title: "Access Cross-Chain Collateral",
      detail: "Choose loans with compatible collateral options.",
    },
    {
      img: Tracking,
      title: "Track Multichain Portfolio",
      detail:
        "Monitor wallet activity and asset values across chains in real-time.",
    },
  ];

  return (
    <>
      <Hero2
        heading={
          <>
            <span className="text-n2">Multichain Wallet: </span> Effortless{" "}
            <br />
            Access to Multiple Blockchains
          </>
        }
        subheading="Your gateway to cross-chain transactions and flexible lending options."
        other={
          <>
            <button className="flex items-center px-16 h-[3.2rem] bg-nv1 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-base font-medium text-white">
              Explore Multichain Wallet
            </button>
          </>
        }
      />
      <Quote img={MultichainWalletBg} />
      <KeyFeatures title="Why a Multichain Wallet?" list={Features} />{" "}
      <MultichainWrapper />
      <Working title="Security Elements" list={SecurityWorking} />
      <div className="my-16">
        <h1 className="text-dark text-center mb-16 text-4xl sm:text-6xl font-medium leading-tight">
          How Multichain Wallet
        </h1>
      </div>
      <Working title="For Lenders and Borrowers" list={WorkingData} />
      <div className="my-16">
        <Link to="/HowItWorks/PoweredByAi">
          <button className="mx-auto flex items-center justify-center gap-3 px-10 h-[4.1rem] bg-n2 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-lg font-medium text-white">
            <span>Experience AI-Powered Lending</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default MultichainWallet;
