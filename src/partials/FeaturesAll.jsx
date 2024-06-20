import React, { useState, useEffect } from "react";
import { Collapse } from "@material-tailwind/react";
import bgFeaturesall from "../images/bg_featuresall.png";
import tokensExampleDesktop from "../images/tokens_example_desktop.png";

export const FeaturesItem = ({
    itemTitle,
    itemHighlight,
    ItemDescr,
    children
    }) => {
    const [itemOpen,setItemOpen] = useState(false);
    const [specialPClass,setSpecialPClass] = useState("text-[20px] leading-[30px] italic text-[#3F19EE] w-full lg:max-w-[891px]");

    useEffect(()=>{
        if(itemTitle === "Round up ur buddies!"){
            setSpecialPClass("text-[20px] leading-[30px] italic text-[#3F19EE] w-full lg:max-w-[718px]");
        }
        if(itemTitle === "Stake that ETH together!"){
            setSpecialPClass("text-[20px] leading-[30px] italic text-[#3F19EE] w-full lg:max-w-[811px]");
        }
    },[itemTitle]);

    return (
        <div className="w-full flex flex-col lg:flex-row items-start justify-start mt-8">
            <h1 className="font-bold text-[44px] leading-[44px] w-full max-w-[312px] mr-8">{itemTitle}</h1>
            <div className="flex-1 flex flex-row items-end justify-start pt-1 pb-5 pr-12 border-b-[0.5px] border-dashed border-[#3F19EE]">
                <div className="w-full flex flex-col items-start justify-start transition-all">
                    <p className={specialPClass}><span className="font-extrabold">{itemHighlight} </span>{ItemDescr}</p>
                    <Collapse open={itemOpen}>
                        {children}
                    </Collapse>
                </div>
                <div className="cursor-pointer" onClick={() => setItemOpen(!itemOpen)}>
                    <p className={itemOpen?"text-[16px] underline":"text-[24px]"}>{itemOpen?"close":"..."}</p>
                </div>
            </div>

        </div>
    );
};

function FeaturesAll() {
  return (
    <div className="w-full flex flex-col items-start justify-start">
    <div className="w-full flex flex-col items-start justify-start relative">
        <div className="w-full flex flex-col items-start justify-start pt-16 pl-[6vw] pb-[600px] z-10">
            <FeaturesItem
                itemTitle="Round up ur buddies!"
                itemHighlight="Get your favorite crew together!"
                ItemDescr="Each of your frens chooses their amount to stake in your pool, then creates that stake and owns it as an NFT!"
            >
                <div className="w-full flex flex-col items-start justify-start text-[18px] pt-8">
                    <p className="font-bold mb-2">Title</p>
                    <p className="lg:max-w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lectus lacus. Morbi porttitor ultrices lectus vitae bibendum. Ut rhoncus magna quis tristique dapibus. Integer auctor efficitur felis, in dictum tellus scelerisque nec. Nullam diam purus, tincidunt eu iaculis et, finibus ut nisl. Cras consequat diam vel ligula pulvinar, ac lacinia diam eleifend. </p>
                </div>
            </FeaturesItem>
            <FeaturesItem
                itemTitle="Spin up a validator!"
                itemHighlight="Be the Ethereum ambassador for your frens!"
                ItemDescr="Run a node as poolowner at app.frens.fun and welcome stakes in your pool. Your frens won't need to delegate to an anonymous entity!"
            >
                <div className="w-full flex flex-col items-start justify-start text-[18px] pt-8">
                    <p className="font-bold mb-2">Title</p>
                    <p className="lg:max-w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lectus lacus. Morbi porttitor ultrices lectus vitae bibendum. Ut rhoncus magna quis tristique dapibus. Integer auctor efficitur felis, in dictum tellus scelerisque nec. Nullam diam purus, tincidunt eu iaculis et, finibus ut nisl. Cras consequat diam vel ligula pulvinar, ac lacinia diam eleifend. </p>
                </div>
            </FeaturesItem>
            <FeaturesItem
                itemTitle="Stake that ETH together!"
                itemHighlight="Ain't no party like a pool stakes party!"
                ItemDescr="With 32ETH in stakes in your pool, you and your frens can kick back and relax, because your ETH is doing the work for you!"
            >
                <div className="w-full flex flex-col items-start justify-start text-[18px] pt-8">
                    <p className="font-bold mb-2">Title</p>
                    <p className="lg:max-w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lectus lacus. Morbi porttitor ultrices lectus vitae bibendum. Ut rhoncus magna quis tristique dapibus. Integer auctor efficitur felis, in dictum tellus scelerisque nec. Nullam diam purus, tincidunt eu iaculis et, finibus ut nisl. Cras consequat diam vel ligula pulvinar, ac lacinia diam eleifend. </p>
                </div>
            </FeaturesItem>
        </div>
        <div className="w-full flex flex-col items-center justify-center absolute bottom-[0px] overflow-hidden">
            <img
                src={bgFeaturesall}
                width="100%"
                alt="Github logo"
                className="w-full min-w-[800px]"
            />
        </div>

    </div>
    <div className="w-full flex flex-col items-center justify-center z-10 px-32 -mt-[267px]">
        <img
            src={tokensExampleDesktop}
            width="100%"
            alt="Github logo"
            className="w-full"
        />
        <p className="font-bold text-[28px] mt-10">This could be you and your frens.</p>
        <p className="font-bold text-[22px] text-[#3B53EF] mb-12">Pool total APY: ~1.23ETH</p>
        <div className="w-full flex flex-col xl:flex-row items-center justify-center  mb-20">
            <a
                href="https://app.frens.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-12 rounded-[24px] text-white bg-black ml-4 font-bold"
            >
                <span>Run testpool on Holesky</span>
            </a>
            <a
                href="https://app.frens.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-12 rounded-[24px] text-[#3F19EE] bg-white border-[1px] border-[#3F19EE] ml-4 font-bold"
            >
                <span>Signup for Mainnet waitlist</span>
            </a>
        </div>
    </div>
    </div>
  );
}

export default FeaturesAll;


