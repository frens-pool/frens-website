import React, { useState } from "react";
import waitlist from "@zootools/waitlist-js";
import Modal from "../utils/Modal";
import writing from "../images/frens-writing_white.png";

import Biglogo from "../images/frens_logo_big.png";

function HeroHome() {

  return (
    <div className="w-full flex flex-col items-start justify-start bg-gradient-to-b from-[#54DAE0] from-0% via-[#3F19EE] to-[#4551ea] to-100% animate-sway">

      <div className="w-full flex flex-row items-center justify-start py-12 pl-12 ">
        <div className="flex flex-1 flex-col items-start justify-start">
          <h1 className="uppercase font-extrabold bg-gradient-to-b from-[#FFF8B8] to-[#FFFFFF] inline-block text-transparent bg-clip-text text-[138px] leading-[115px]">Everything*<br/> is better<br/> with</h1>
          <img
            src={writing}
            width="560"
            alt="Github logo"
            className="mt-4"
          />
          <p className="font-extrabold text-[30px] text-[#FFF8B8] mt-8">* Especially staking ETH!</p>
        </div>
        <div className="w-[508px] absolute top-20 right-0 overflow-hidden">
          <div className="w-[528px]">
          <img
              src={Biglogo}
              width="528"
              alt="Big logo frens and baseline"
              className="animate-slowturn"
            />
            </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center pb-[110px]">
        <a
          href="https://app.frens.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10"
        >
          <button className="py-6 px-12 rounded-[36px] text-[#3F19EE] bg-white font-bold text-[20px] leading-[24px]">I want to stake ETH with my frens! 🤙</button>
        </a>
        <div className="w-full border-[0.5px] border-dashed border-[#6BECF2] -mt-[28px] z-0"></div>
      </div>
    </div>
  );
}

export default HeroHome;
