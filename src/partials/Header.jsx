import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/FRENS.png";
import Discord from "../images/discord-mark-white.png";
import Github from "../images/github-mark-white.png";
import X from "../images/logo-white.png";


function Header() {
  const location = useLocation().pathname;
  // const [thisisHome,setThisisHome] = useState();

  return (
    <>
    {location === "/"?
    <header
      className="absolute w-full  px-3 py-5 hidden lg:absolute">
          {/* Site navigation */}
          <nav className="w-full">
            <div className="flex flex-row justify-end items-center">
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
    </header>
    :
    <header
    className="fixed w-full">
        <Link to="/" className="block" aria-label="FRENS">
        <img
          className="mx-auto"
          src={Logo}
          width="120"
          height="40"
          alt="FRENS Pool"
        />
      </Link>
    </header>
    }
    </>
  );
}

export default Header;
