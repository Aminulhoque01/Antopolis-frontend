"use client";

import React, { useState, useEffect } from "react";
import HERO_IMAGE1 from "../../../assets/resturent/resturent1.png";
import HERO_IMAGE2 from "../../../assets/resturent/resturent2.png";
import HERO_IMAGE3 from "../../../assets/resturent/resturent3.png";
import HERO_IMAGE4 from "../../../assets/resturent/resturent4.png";
import { IoMdSearch } from "react-icons/io";
import { useGetProductsQuery } from "@/redux/features/products/product";

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const thumbs = [HERO_IMAGE1, HERO_IMAGE2, HERO_IMAGE3, HERO_IMAGE4];
  const autoSlideInterval = 2000;

  const { data, isLoading, isFetching } = useGetProductsQuery({});
  const products = data?.data?.data || [];

  const filteredProducts = products.filter((p: any) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startSlide = () => {
      interval = setInterval(() => {
        setActive((prev) => (prev + 1) % thumbs.length);
      }, autoSlideInterval);
    };

    if (!isPaused) {
      startSlide();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, thumbs.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="bg-[#880808] relative">
      {/* Background Circles */}
      <div className="absolute -left-40 -top-40 md:w-[520px] md:h-[520px] rounded-full bg-[#A52A2A] opacity-80 pointer-events-none"></div>
      <div className="absolute right-[0px] bottom-0 md:w-[420px] md:h-[420px] rounded-full bg-[#A52A2A] opacity-70 pointer-events-none"></div>

      {/* Search & Hero Header */}
      <div className="container md:flex items-center justify-between">
        <div className="hidden md:block">
          <h1 className="text-white font-[700] text-[22px] absolute">
            RESTAURANT
          </h1>
        </div>

        <div className="md:w-[550px] pt-10">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <input
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-full py-2 px-4 text-sm bg-white bg-opacity-90 text-black placeholder-gray-500 focus:outline-none"
            />
            <button
              aria-hidden
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <IoMdSearch className="text-[20px] text-black" />
            </button>
          </div>

         
          {/* Search Results */}
          {searchTerm && (
            <div className="absolute z-50 mt-1 md:w-[550px] max-h-60 overflow-y-auto bg-white rounded-lg shadow-md">
              {isLoading || isFetching ? (
                <p className="text-black p-2">Loading...</p>
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((p:any) => (
                  <div
                    key={p._id}
                    className="text-black py-2 px-4 border-b last:border-b-0 flex items-center gap-2"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <span>{p.name}</span>
                  </div>
                ))
              ) : (
                <p className="text-black p-2">No products found</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-full mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Left Text Column */}
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

            {/* Thumbnails */}
            <div
              className="relative flex items-center gap-4 mt-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {thumbs.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="thumb rounded-full cursor-pointer w-36 h-36   overflow-hidden"
                >
                  <img
                    src={item.src}
                    alt={`thumb-${i}`}
                    className=" w-full  h-full   "
                  />
                </div>
              ))}

              {/* Moving underline */}
              <div
                className="absolute h-1 md:w-20 bg-white rounded-full transition-all duration-300"
                style={{
                  bottom: "-2px",

                  left: `${active * 178}px`,
                }}
              ></div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="w-[320px] h-[320px] md:w-[420px] md:h-[520px] rounded-full overflow-hidden">
              <img
                src={thumbs[active].src}
                alt={`breakfast plate ${active + 1}`}
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
