import React from "react";
import logo from "./../assets/Logo.svg";
import logoWhite from "./../assets/Logo White.svg";
import Hamburger from "./../assets/hamburger.svg";
import { ChevronDown, Tablet, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SidebarComp from "./SidebarComp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Lender", href: "/Lender" },
    { name: "Borrower", href: "/Borrower" },
    {
      name: "How it Works",
      href: "/HowItWorks",
      dropdown: [
        { name: "Multi-chain Wallet", href: "/HowItWorks/MultichainWallet" },
        { name: "Powered by Ai", href: "/HowItWorks/PoweredByAi" },
      ],
    },
    {
      name: "Security",
      href: "/Security",
    },
    { name: "FAQ", href: "/FAQ" },
  ];

  const handleNavOpen = () => {
    setIsOpen(true);
    document.body.classList.add("hide-scrollbar");
  };
  const handleNavClose = () => {
    setIsOpen(false);
  };
  const transition = {
    duration: 0.8,
    type: "tween",
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <header className="max-w-8xl w-full flex justify-between items-center gap-4 h-[6rem] lg:h-[7.5rem] px-5 lg:px-12 bg-n1 lg:bg-white relative z-[100]">
      <nav className="flex items-center gap-8">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="hidden lg:block w-[13.5rem] h-auto"
          />
          <img
            src={logoWhite}
            alt="logo"
            className="lg:hidden block max-w-[13.5rem] w-[46vw] h-auto"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group text-[#333]">
              {item.dropdown ? (
                <div>
                  <Link
                    to={item.href}
                    className="group-hover:text-n2 flex items-center gap-1 text-xl font-medium "
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <ul className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.href}
                          className="whitespace-nowrap block px-4 py-2 text-lg hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className="text-xl font-medium hover:text-n2"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <button className="hidden lg:flex items-center justify-center gap-3 px-10 h-[4.1rem] bg-n2 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-lg font-medium text-white">
        <span>Download App</span>
        <Tablet className="w-5" />
      </button>
      <button onClick={handleNavOpen} className="lg:hidden flex  text-white">
        <img src={Hamburger} alt="Hamburger" className="w-7" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={"Navbar"}
            className="fixed w-full h-screen z-[999] right-0 top-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              onClick={handleNavClose}
              className="absolute inset-0 bg-dark/50"
            ></motion.div>
            <motion.div
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              exit={{
                x: "0",
              }}
              onAnimationComplete={(definition) => {
                if (definition.x === "0") {
                  document.body.classList.remove("hide-scrollbar");
                }
              }}
              transition={transition}
              className="p-4 flex flex-col gap-2 absolute left-full top-0 z-10 bg-white h-full max-h-[100dvh] w-[min(380px,90%)] rounded-s-2xl overflow-y-scroll"
            >
              <div className="bg-main/20 px-2 py-4 mb-4 rounded-xl flex gap-2 items-center justify-between">
                <Link to={"/"} name="home link">
                  <img
                    src={logo}
                    width={300}
                    height={200}
                    alt="Logo"
                    className="h-7 w-auto"
                  />
                </Link>
                <button
                  onClick={handleNavClose}
                  className="transition-all text-dark duration-300 hover:bg-light h-10 w-10 grid place-content-center rounded-full text-2xl"
                >
                  <X />
                </button>
              </div>
              <SidebarComp data={navItems} handleClose={handleNavClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
