import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/FRENS.png";
import Discord from "../images/discord-mark-white.png";
import Github from "../images/github-mark-white.png";
import X from "../images/logo-white.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Collapse } from "@material-tailwind/react";


function Header() {
  const location = useLocation().pathname;
  const [menuOpen,setMenuOpen] = useState();

  return (
    <>    
    {location === "/"?
    <>
    <header
    className={menuOpen?"transition-all fixed w-full px-3 py-5 lg:hidden block top-0 bg-black flex flex-col items-end justify-end z-50":"transition-all fixed w-full px-3 py-5 lg:hidden block top-0 bg-transparent flex flex-col items-end justify-end z-50"}>
      {menuOpen?
      <XMarkIcon
        className="block h-8 w-8 cursor-pointer text-white"
        aria-hidden="true"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      :
      <Bars3Icon
      className="block h-8 w-8 cursor-pointer text-[#FFF8B8]"
      aria-hidden="true"
      onClick={() => setMenuOpen(!menuOpen)}
    />
      }
      
        <Collapse open={menuOpen}>
        <div className="flex flex-col justify-end items-center pt-8 pb-12">
                <a
                  href="https://app.frens.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50%] text-center py-2 px-4 rounded-[24px] text-white bg-transparent border-[2px] border-white ml-4 font-bold mb-6"
                >
                  <span>visit app</span>
                </a>
                <a
                  href="https://discord.gg/yx53KwrvRS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50%] block text-white flex flex-row items-center justify-center my-2"
                >
                  <span className="mr-3">FRENS on Discord</span>
                  <img
                    src={Discord}
                    width="25px"
                    alt="Discord logo"
                  /> 
                </a>

                <a
                  href="https://x.com/frensPool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50%] block text-white flex flex-row items-center justify-center my-2"
                >
                  <span className="mr-3">FRENS on X</span>
                  <img
                    src={X}
                    width="16"
                    alt="Github logo"
                  />
                </a>

                <a
                  href="https://github.com/frens-pool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50%] block text-white flex flex-row items-center justify-center my-2"
                >
                  <span className="mr-3">FRENS on Github</span>
                  <img
                    src={Github}
                    width="20"
                    alt="Github logo"
                  />
                </a>


            </div>
        </Collapse>
    </header>
    <header
      className="absolute w-full  px-3 py-5 hidden lg:block lg:absolute">

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
    </>
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
