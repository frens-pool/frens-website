import React, { useState } from 'react';

function Banner() {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
    { bannerOpen && (
      <div className="mx-auto w-3/4 md:w-7/12 xl:w-5/12 fixed inset-x-0 bottom-4 z-60">
        <div className="bg-gray-900 text-slate-50 text-sm p-3 rounded shadow-lg flex justify-between">
          <div className='w-full text-center font-medium text-base text-gray-200'>
           <span className="inline md:hidden">checkout </span>
            <span className="hidden md:inline">We are on a mission! Checkout </span>
            <a 
              className="btn-link text-white underline bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" 
              href="https://hackmd.io/gSw730vuRQyP0-zFeVxJAw"
              target="_blank" 
              rel="noopener noreferrer"
            >
              FRENS manifesto
            </a>
          </div>
          <button className="text-gray-200 hover:text-slate-400 pl-2 ml-3 border-gray-700" onClick={() => setBannerOpen(false) }>
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    )}
    </>
  );
}

export default Banner;