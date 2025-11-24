"use client";

import React, { useState } from "react";

import HERO_IMAGE from "../../../assets/image/resturent1.png";

const HeroSection = () => {
  const [active, setActive] = useState(0);

  const thumbs = [HERO_IMAGE, HERO_IMAGE, HERO_IMAGE, HERO_IMAGE];
  return (
    <section className="bg-[#880808] relative">
      <div className="absolute -left-40 -top-40 w-[520px] h-[520px] rounded-full bg-[#A52A2A] opacity-80 pointer-events-none"></div>
      <div className="absolute right-[-120px] top-24 w-[420px] h-[420px] rounded-full bg-[#A52A2A] opacity-70 pointer-events-none"></div>

      <div className="max-w-full mx-auto px-6 py-14 md:py-20 ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
          {/* Left text column */}
          <div className="w-full md:w-1/2">
            <h1 className="relative text-5xl md:text-6xl font-semibold leading-tight mb-4 !text-white">
              BREAKFAST
            </h1>
            <p className="text-sm md:text-base text-gray-100 max-w-xl relative">
              Breakfast, often referred to as the "most important meal of the
              day", provides essential nutrients to kick start our day. It
              includes a variety of foods, like fruits, cereals, dairy products,
              and proteins, that contribute to a balanced diet.
            </p>

            <div className="relative flex items-center gap-4">
              {/* Thumbnails */}
              {thumbs.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-30 h-30 rounded-full overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={`thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Moving underline */}
              <div
                className="absolute h-1 md:w-20 bg-white rounded-full transition-all duration-300"
                style={{
                  bottom: "-1px", 
                  left: ` ${active * 175}px`,  
                }}
              ></div>
            </div>
          </div>
          {/* Right image column */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className=" w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden    ">
              <img
                src={HERO_IMAGE.src}
                alt="breakfast plate"
                className="w-full h-full object-cover"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
