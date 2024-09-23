import React, { useState, useEffect } from "react";
import Modal from "../utils/Modal";
import HeroImage from "../images/bogota-demo.jpeg";

function FeaturesAll() {
    const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col lg:flex-row flex-wrap items-center justify-start bg-black">
        <div
            className="relative flex justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="450"
        >
            <div className="flex flex-col justify-center w-full max-w-[648px]">
                <button
                    onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setVideoModalOpen(true);
                    }}
                    aria-controls="modal"
                >
                    <img
                    className="mx-auto"
                    src={HeroImage}
                    width="100%"
                    alt="Hero"
                    />
                </button>
            </div>
            <button
            className="absolute top-[50%] flex items-center rounded-full"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setVideoModalOpen(true);
            }}
            aria-controls="modal"
            >
            <svg
                className="w-20 h-20 fill-current text-white group-hover:text-white flex-shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                <path d="M10 17l6-5-6-5z" />
            </svg>
            </button>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-16 px-12 lg:py-20 lg:px-20">
            <h2 className="bg-gradient-to-r from-[#3B53EF] to-[#4fbee3] inline-block text-transparent bg-clip-text text-[20px] lg:text-[30px] font-bold">Staking con amigos? ¡Si!</h2>
            <button
                    onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setVideoModalOpen(true);
                    }}
                    aria-controls="modal"
                    className="text-white text-[36px] leading-[40px] lg:text-[50px] lg:leading-[60px] font-bold text-left hover:underline"
                >Watch us on stage at EthBogota!
            </button>
            <p className="italic text-white mt-2">~ 5min</p>
        </div>

        <Modal
            id="modal"
            ariaLabel="modal-headline"
            show={videoModalOpen}
            handleClose={() => setVideoModalOpen(false)}
            width="max-w-6xl"
        >
            <div className="relative pb-9/16">
            <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/ceTEZGGXCRo"
                title="Video"
                allowFullScreen
            ></iframe>
            </div>
        </Modal>
    </div>
  );
}

export default FeaturesAll;


