// components/PartnersBanner.jsx

"use client";
import React from "react";
import Brand1 from "../../../assets/Brands/Brand1.png";
import Brand2 from "../../../assets/Brands/Brand2.png";
import Brand3 from "../../../assets/Brands/Brand3.png";
import Brand4 from "../../../assets/Brands/Brand4.png";
import Brand5 from "../../../assets/Brands/Brand5.png";
import Brand6 from "../../../assets/Brands/Brand6.png";
import Image from "next/image";

const PartnersBanner = () => {
  return (
    <div className="bg-white py-8 px-6 md:px-12">
      {/* Text Section */}
      <div className="text-center mb-10">
        <p className="text-sm md:text-base text-[#A52A2A] font-medium mb-2">
          Partners & Clients
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          We work with the best people
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden max-w-5xl mx-auto">
        <div className="animate-marquee flex whitespace-nowrap items-center gap-10">
          <div className="flex-shrink-0 flex flex-col items-center text-gray-400">
            <Image src={Brand1} alt="" className="w-[239px] h-[128px]  opacity-[30%]" />
            <span className="text-xs font-medium">Restaurant</span>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center text-gray-400">
            <Image src={Brand4} alt="" className="w-[164px] h-[128px] opacity-[30%]" />
            <span className="text-xs font-medium">Bakery</span>
          </div>

          <div className=" flex-shrink-0 flex flex-col items-center text-gray-400">
            <Image src={Brand2} alt="" className="w-[145px] h-[128px] opacity-[30%]" />
            <span className="text-xs font-medium">Funk & Soul</span>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center text-gray-400">
            <Image src={Brand6} alt="" className="w-[129px] h-[128px] opacity-[30%]" />
            <span className="text-xs font-medium">Wolf Coffee</span>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center text-gray-400">
            <Image src={Brand3} alt="" className="w-[168px] h-[128px] opacity-[30%]" />
            <span className="text-xs font-medium">Bistro</span>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center text-gray-400">
            <Image src={Brand5} alt="" className="w-[113px] h-[128px] opacity-[30%]" />
            <span className="text-xs font-medium">Bakery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersBanner;
