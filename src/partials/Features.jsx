import React, { useState, useRef, useEffect } from 'react';

function Features() {

  const [tab, setTab] = useState(0);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    // heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      <div className="absolute inset-0 bg-gray-100 pointer-events-none pb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 pb-8">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
            <h1 className="h2 mb-4">Your staking pool</h1>
            <p className="text-xl text-gray-600">Create a secure and decentralized staking pool for you and your friends.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto col-start-3 col-span-8 my-4" data-aos="zoom-y-out">
              {/* Tabs buttons */}
              <div className="mb-4">
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Be the ethereum hero for your friends</div>
                    <div className="text-gray-600">Run your node and welcome stakes from friends so they don't need to delegate to an anonymous entitiy.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </div>
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Earn rewards and operator reputation</div>
                    <div className="text-gray-600">More delegations means more rewards. Want to use DVT? We make that easy for you so you can grow your reputation on SSV network as well. </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </div>
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Tradable NFTs as staking derivatives</div>
                    <div className="text-gray-600">Our contracts define the rules and prohibit foul play. Pool stakers get a tradable NFT that represent their contribution.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs items */}
            

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
