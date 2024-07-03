import React, { useState, useEffect } from "react";
import { Collapse } from "@material-tailwind/react";
import bgFeaturesall from "../images/bg_featuresall.png";
import tokensExampleDesktop from "../images/tokens_example_desktop.png";
import tokensExampleMobile from "../images/tokens_example_mobile.png";

import waitlist from "@zootools/waitlist-js";

export const FeaturesItem = ({
    itemTitle,
    itemHighlight,
    ItemDescr,
    children
    }) => {
    const [itemOpen,setItemOpen] = useState(false);
    const [specialPClass,setSpecialPClass] = useState("text-[20px] leading-[30px] italic text-[#3F19EE] w-full lg:max-w-[718px] mb-3 lg:mb-0");

    useEffect(()=>{
        if(itemTitle === "Round up ur buddies!"){
            setSpecialPClass("text-[20px] leading-[30px] italic text-[#3F19EE] w-full lg:max-w-[718px] mb-3 lg:mb-0");
        }
        if(itemTitle === "Stake that ETH together!"){
            setSpecialPClass("text-[20px] leading-[30px] italic text-[#3F19EE] w-full lg:max-w-[811px] mb-3 lg:mb-0");
        }
    },[itemTitle]);

    return (
        <div className="w-full flex flex-col lg:flex-row items-start justify-start mt-8">
            <h1 className="font-bold text-[36px] leading-[40px] w-full max-w-[340px] lg:max-w-[312px] lg:mt-[6px] mr-6 lg:mr-8 mb-4 lg:mb-0">{itemTitle}</h1>
            <div className="flex-1 flex flex-row items-end justify-start pt-1 pb-4 pr-8 lg:pr-12 border-b-[0.5px] border-dashed border-[#3F19EE]">
                <div className="w-full flex flex-col items-start justify-start transition-all">
                    <p className={specialPClass}><span className="font-extrabold">{itemHighlight} </span>{ItemDescr}</p>
                    <Collapse open={itemOpen}>
                        {children}
                    </Collapse>
                </div>
                <div className="cursor-pointer min-w-[30px] text-right" onClick={() => setItemOpen(!itemOpen)}>
                    <p className={itemOpen?"text-[16px] underline":"text-[24px]"}>{itemOpen?"close":"..."}</p>
                </div>
            </div>

        </div>
    );
};

function FeaturesAll() {

    const openWaitlistPopup = (event) => {
      event.preventDefault();
  
      // Pass your waitlist ID
      waitlist.openPopup("EBdAbtzncuue0bk3X4Ta");
    };
  

  return (
    <div className="w-full flex flex-col items-start justify-start">
    <div className="w-full flex flex-col items-start justify-start relative">
        <div className="w-full flex flex-col items-start justify-start pt-6 lg:pt-16 pl-[10vw] lg:pl-[6vw] pb-[380px] lg:pb-[600px] z-10">
            <FeaturesItem
                itemTitle="Round up ur buddies!"
                itemHighlight="Get your favorite crew together!"
                ItemDescr="Each of your frens chooses their amount to stake in your pool, then creates that stake and owns it as an NFT!"
            >
                <div className="w-full flex flex-col items-start justify-start text-[18px] pt-6">
                    <p className="font-bold mb-2">Stake how much you choose!</p>
                    <p className="lg:max-w-[75%]">If you (or one of your frens) join a pool, you can choose the amount you want to stake in that pool. No matter how small, every stake counts! </p>
                </div>
                <div className="w-full flex flex-col items-start justify-start text-[18px] pt-6 mb-8 lg:mb-0">
                    <p className="font-bold mb-2">Own your stake as NFT!</p>
                    <p className="lg:max-w-[75%]">Pool stakers get a tradable NFT that represent their contribution. Our contracts define the rules and prohibit foul play.</p>
                </div>
            </FeaturesItem>
            <FeaturesItem
                itemTitle="Spin up a validator!"
                itemHighlight="Be the Ethereum ambassador for your frens!"
                ItemDescr="Run a node in our app, and welcome stakes in your own pool as poolowner!"
            >
                <div className="w-full flex flex-col items-start justify-start text-[18px] pt-6">
                    <p className="font-bold mb-2">Run a pool, lead your pack!</p>
                    <p className="lg:max-w-[75%]">Setup a pool for you and your frens at <a href="https://app.frens.fun" target="_blank" rel="noopener noreferrer" className="underline">app.frens.fun</a>: congratulations, you are now a poolowner! Your frens don't need to delegate to an anonymous entity, they can create a stake in your pool and join in the fun!</p>
                </div>
                <div className="w-full flex flex-col items-start justify-start text-[18px] pt-6 mb-8 lg:mb-0">
                    <p className="font-bold mb-2">DVT for peace of mind</p>
                    <p className="lg:max-w-[75%]">There is no getting slashed in our pools! By using <a href="https://ssv.network/about/" target="_blank" rel="noopener noreferrer" className="underline">SSV's distributed validator technology</a> our validators keep running, and our poolowners sleep like a baby!</p>
                </div>
            </FeaturesItem>
            <FeaturesItem
                itemTitle="Stake that ETH together!"
                itemHighlight="Ain't no party like a pool stakes party!"
                ItemDescr="With 32ETH in stakes in your pool, you and your frens can kick back and relax, because your ETH is doing the work for you!"
            >
                <div className="w-full flex flex-col items-start justify-start text-[18px] pt-6">
                    <p className="font-bold mb-2">...'cause a poolstakes party don't stop!</p>
                    <p className="lg:max-w-[75%]">Keep your ETH staked and your pool running, and you and your frens are gonna have a good time! Have you thought about how you want to spend your earnings yet?</p>
                </div>
                <div className="w-full flex flex-col items-start justify-start text-[18px] pt-6 mb-8 lg:mb-0">
                    <p className="font-bold mb-2">Go far, go together</p>
                    <p className="lg:max-w-[75%]">Who said you need 32 ETH to join in the POS-fun? The whole is greater than the sum of its parts, so sum up your ETH to that of your frens, and let's get stakin'!</p>
                </div>
            </FeaturesItem>
        </div>
        <div className="w-full flex flex-col items-center justify-center absolute bottom-[0px] overflow-hidden">
            <img
                src={bgFeaturesall}
                width="100%"
                alt="Github logo"
                className="w-full min-w-[1000px]"
            />
        </div>

    </div>
    <div className="w-full flex flex-col items-center justify-center z-10 px-10 lg:px-32 -mt-[190px] lg:-mt-[267px] text-center">
        <img
            src={tokensExampleDesktop}
            width="100%"
            alt="Github logo"
            className="w-full hidden lg:block"
        />
        <img
            src={tokensExampleMobile}
            width="100%"
            alt="Github logo"
            className="w-full lg:hidden block"
        />
        <p className="font-bold text-[28px] leading-[30px] mt-10 lg:mt-16 mb-3 lg:mb-0">This could be you and your frens.</p>
        <p className="font-bold text-[18px] lg:text-[22px] text-[#3B53EF] mb-10 lg:mb-12">Pool total APY: ~1.23ETH</p>
        <div className="w-full flex flex-col xl:flex-row items-center justify-center mb-6 px-2">
            <a
                href="https://app.frens.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto py-3 px-8 lg:px-10 rounded-full text-[18px] text-white border-[1px] border-black bg-black mx-1 font-bold mb-2 mt-0 lg:mb-0"
            >
                <span>Run testpool on Holesky</span>
            </a>
            <button
                className="w-full lg:w-auto py-3 px-8 lg:px-10 rounded-full text-[18px] text-[#3B53EF] bg-white border-[1px] border-[#3B53EF] mx-1 font-bold"
                onClick={openWaitlistPopup}
            >
               Signup for Mainnet Waitlist 
            </button>
        </div>
        <p className="mb-24 lg:mb-40">...or <a className="underline" href="https://docs.frens.fun/docs/manifesto" target="_blank" rel="noopener noreferrer">read the docs</a> to get your feet wet 🏄!</p>
    </div>
    </div>
  );
}

export default FeaturesAll;


