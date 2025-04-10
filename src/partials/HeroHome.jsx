import React, { useState } from "react";
import writing from "../images/frens-writing_white.png";
import Modal from "../utils/Modal";
import Biglogo from "../images/frens_logo_big.png";
import waitlist from "@zootools/waitlist-js";


function HeroHome() {
  const [quickModalOpen, setQuickModalOpen] = useState(false);
  const openWaitlistPopup = (event) => {
    event.preventDefault();

    // Pass your waitlist ID
    waitlist.openPopup("EBdAbtzncuue0bk3X4Ta");
  };
  return (
    <div className="w-full flex flex-col items-start justify-start bg-gradient-to-b from-[#54DAE0] from-0% via-[#3F19EE] to-[#4551ea] to-100% animate-sway">

      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start pt-8 pb-2 px-6 lg:py-12 lg:pl-12 ">
        <div className="w-full flex flex-1 flex-col items-start justify-start">
          <h1 className="uppercase font-extrabold bg-gradient-to-b from-[#FFF8B8] to-[#FFFFFF] inline-block text-transparent bg-clip-text text-[72px] leading-[62px] lg:text-[108px] lg:leading-[90px] xl:text-[138px] xl:leading-[115px]">Every<span className="display lg:hidden"><br/></span>thing*<br/> is better<br/> with</h1>
          <img
            src={writing}
            alt="Github logo"
            className="mt-2 lg:mt-4 w-[260px] lg:w-[460px] xl:w-[560px]"
          />
          <p className="font-extrabold text-[20px] lg:text-[26px] xl:text-[30px] text-[#FFF8B8] mt-4 lg:mt-8">* Especially staking ETH!</p>
        </div>
        <div className="lg:w-[456px] xl:w-[508px] absolute hidden lg:block top-20 right-0 overflow-hidden">
          <div className="lg:w-[460px] xl:w-[528px]">
          <img
              src={Biglogo}
              alt="Big logo frens and baseline"
              className="animate-slowturn lg:w-[460px] xl:w-[528px]"
            />
            </div>
        </div>
        <img
              src={Biglogo}
              alt="Big logo frens and baseline"
              className="animate-slowturn display lg:hidden w-full max-w-[305px] my-10"
            />
      </div>
      <div className="w-full flex flex-col items-center justify-center pb-[90px] lg:pb-[110px]">
        <a
          href="https://app.frens.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10"
        >
         <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setQuickModalOpen(true);
                }}
                aria-controls="modal"
          className="py-5 lg:py-6 px-10 lg:px-12 rounded-full text-[#3F19EE] bg-white font-bold text-[20px] leading-[20px] lg:text-[20px] lg:leading-[24px] xl:text-[20px] xl:leading-[24px]">Stake ETH with frens! 🤙</button>
        </a>
        <div className="w-full border-[0.5px] border-dashed border-[#6BECF2] -mt-[28px] z-0"></div>
      </div>
      <Modal
            id="modal"
            ariaLabel="modal-headline"
            show={quickModalOpen}
            handleClose={() => setQuickModalOpen(false)}
            width="max-w-2xl"
        >
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <p className="font-bold text-[24px] leading-[28px]">Jumping right in? Awesome!</p>
              <p className="font-bold text-[18px] text-[#3B53EF] mb-10">What d'you wanna do?</p>
              {/* <button
                  className="w-full max-w-[480px] py-4 px-10 rounded-full text-[20px] text-white bg-gradient-to-l from-[#54DAE0] from-0% via-[#3F19EE] to-[#4551ea] to-100% mx-1 font-bold mb-2"
                  onClick={openWaitlistPopup}
              >
                Signup for Mainnet Waitlist 
              </button> */}
              <a
                  href="https://app.frens.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-[480px] py-4 px-10 rounded-full text-[20px] text-[#3B53EF] bg-white border-[1px] border-[#3B53EF] mx-1 font-bold mb-2"
              >
                  <span>Run a Pool</span>
              </a>
              <p className=" mt-4">...or <a className="underline" href="https://docs.frens.fun/docs/manifesto" target="_blank" rel="noopener noreferrer">read the docs</a> to get your feet wet 🏄!</p>
            </div>
      </Modal>
    </div>
  );
}

export default HeroHome;
