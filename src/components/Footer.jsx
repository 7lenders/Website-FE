import { Link } from "react-router-dom";
import React from "react";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Youtube from "../assets/youtube.svg";
import Linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-n1 text-white py-16 sm:py-[6.25rem] px-5 sm:px-12 flex ">
        <div className="flex max-md:flex-col flex-1 max-w-7xl mx-auto gap-16 sm:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl mb-8">Have any questions?</h2>
            <button className="flex items-center px-16 h-[3.2rem] bg-nv1 hover:bg-opacity-85 hover:shadow-md transition-all rounded-full text-base font-medium text-white">
              Contact Support
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl mb-8">Quick Links</h2>
            <div className="flex flex-col gap-4 sm:gap-6 items-start">
              <Link to={"/"} className="text-lg leading-tight hover:text-n2">
                About Us
              </Link>
              <Link to={"/"} className="text-lg leading-tight hover:text-n2">
                Terms of services
              </Link>
              <Link to={"/"} className="text-lg leading-tight hover:text-n2">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl sm:text-4xl">Contact</h2>
            <a
              href="mailto:support@7lenders.com"
              className="text-lg leading-tight hover:text-n2"
            >
              support@7lenders.com
            </a>
            <div className="flex gap-4 sm:gap-6 items-center">
              <Link to={"/"} className="text-lg leading-tight hover:text-n2">
                <img
                  className="w-8 hover:opacity-80 transition-opacity"
                  src={Facebook}
                  alt="facebook"
                />
              </Link>
              <Link to={"/"} className="text-lg leading-tight hover:text-n2">
                <img
                  className="w-8 hover:opacity-80 transition-opacity"
                  src={Twitter}
                  alt="Twitter"
                />
              </Link>
              <Link to={"/"} className="text-lg leading-tight hover:text-n2">
                <img
                  className="w-8 hover:opacity-80 transition-opacity"
                  src={Instagram}
                  alt="Instagram"
                />
              </Link>
              <Link to={"/"} className="text-lg leading-tight hover:text-n2">
                <img
                  className="w-8 hover:opacity-80 transition-opacity"
                  src={Linkedin}
                  alt="Linkedin"
                />
              </Link>
              <Link to={"/"} className="text-lg leading-tight hover:text-n2">
                <img
                  className="w-8 hover:opacity-80 transition-opacity"
                  src={Youtube}
                  alt="Youtube"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-white h-[6.25rem] flex items-center justify-center text-lg px-5">
        © 2024 7lenders. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
