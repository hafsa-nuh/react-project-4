import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {HeroSlider} from "../../data/data"

function Hero() {
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle =
     "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  const [slides] = useState(HeroSlider);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <>
      <div className="slider h-[540px] bg-white flex items-center justify-between mobile:hidden">
        {/* left Arrow */}
        <div className={arrowStyle} onClick={prevSlide}>
          <AiOutlineArrowLeft style={{ fontSize: "50px" }} />
        </div>
        
        {/* Slide */}
        {slides.map((slide, index) => {
          if (index === activeSlide) {
            return (
              <div
                className={
                  `wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative opacity-100 z-10` +
                  slide.background
                }
                key={index}
              >
                <div className={slideStyle}>
                  <div className="flex items-center">
                    <img
                      className=" w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
                      src={slide.src}
                      alt="man"
                    />
                  </div>
                  <div className="discription flex flex-col flex-1 place-items-start justify-center ml-11">
                    <h2 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm">
                      {slide.content.h2}
                    </h2>
                    <p className=" text-5xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl  filter drop-shadow-sm">
                      {slide.content.p}
                    </p>
                    <button
                      type="button"
                      className="button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5"
                    >
                      Explore Product
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}

        {/* Right Arrow */}
        <div className={arrowStyle} onClick={nextSlide}>
          <AiOutlineArrowRight style={{ fontSize: "50px" }} />
        </div>
      </div>
    </>
  );
    
  
}

export default Hero