import React from "react";
import { Link } from "react-router-dom";
import Logowhite from "../images/frens_logo_big_white.png";
import writing from "../images/frens-writing_white.png";
import Discord from "../images/discord-mark-white.png";
import Github from "../images/github-mark-white.png";
import X from "../images/logo-white.png";

function Footer() {
  return (
    <footer className="w-full pt-16 px-12 lg:px-12 pb-24 flex flex-col lg:flex-row items-start lg:items-center justify-start bg-gradient-to-l from-[#54DAE0] from-0% via-[#3F19EE] to-[#4551ea] to-100%">
      <div className="flex-1 flex flex-row items-start justify-center ml-0 lg:ml-8 mb-4 lg:mb-0">
        <img
          src={Logowhite}
          alt="Discord logo"
          className="w-[100px] lg:w-[120px]"
        />
        <p className="text-[20px] italic text-white lg:mt-3 ml-8 lg:ml-12">Friendly<br /> Riskless<br /> Ethereum<br /> Non-custodial<br /> Staking</p>
      </div>
      <div className="flex flex-col items-start lg:items-end justify-start lg:justify-center lg:ml-8">
        <img
            src={writing}
            width="230"
            alt="Github logo"
            className="mt-4"
          />
          <nav className="w-full mt-6">
            <div className="flex flex-row justify-start lg:justify-end items-center">
                <a
                  href="https://discord.gg/yx53KwrvRS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={Discord}
                    width="25"
                    alt="Discord logo"
                  />
                </a>

                <a
                  href="https://x.com/frensPool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mx-[10px]"
                >
                  <img
                    src={X}
                    width="20"
                    alt="Github logo"
                  />
                </a>

                <a
                  href="https://github.com/frens-pool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={Github}
                    width="20"
                    alt="Github logo"
                  />
                </a>

                <a
                  href="https://app.frens.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 rounded-[24px] text-white bg-transparent border-[2px] border-white ml-4 font-bold"
                >
                  <span>visit app</span>
                </a>
            </div>
          </nav>
        </div>
    </footer>
  );
}

export default Footer;
