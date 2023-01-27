import React, { useState, useRef, useEffect } from "react";
import LogoColoured from "../images/FRENS-logo-coloured.png";

function Features() {
  const [tab, setTab] = useState(0);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    // heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none pb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 pb-8">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
            <h1 className="h2 mb-4">Personal staking pools</h1>
            <p className="text-xl text-gray-600">
              Create a secure and decentralized staking pool for you and your
              friends.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto col-start-3 col-span-8 my-4"
              data-aos="zoom-y-out"
            >
              {/* Tabs buttons */}
              <div className="mb-4">
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Be the ethereum ambassador for your friends
                    </div>
                    <div className="text-gray-600">
                      Run your node and welcome stakes from friends so they
                      don't need to delegate to an anonymous entitiy.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <img
                      className="mx-auto"
                      src={LogoColoured}
                      width="50"
                      height="50"
                      alt="FRENS Pool"
                    />
                  </div>
                </div>
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Earn rewards and operator reputation
                    </div>
                    <div className="text-gray-600">
                      More delegations means more rewards. Perform well and get
                      a chance to get even more delegations.{" "}
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <img
                      className="mx-auto"
                      src={LogoColoured}
                      width="50"
                      height="50"
                      alt="FRENS Pool"
                    />
                  </div>
                </div>
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      DVT for peace of mind
                    </div>
                    <div className="text-gray-600">
                      Avoid getting slashed by using SSVs distributed validator
                      technology ... so u can always sleep well!
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <img
                      className="mx-auto"
                      src={LogoColoured}
                      width="50"
                      height="50"
                      alt="FRENS Pool"
                    />
                  </div>
                </div>
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Next-gen staking derivatives: NFTs
                    </div>
                    <div className="text-gray-600">
                      Pool stakers get a tradable NFT that represent their
                      contribution. Our contracts define the rules and prohibit
                      foul play.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <img
                      className="mx-auto"
                      src={LogoColoured}
                      width="50"
                      height="50"
                      alt="FRENS Pool"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs items */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
