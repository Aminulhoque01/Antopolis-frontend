"use client";

 import { IoMdSearch } from "react-icons/io";


const Navbar = () => {
   
 

  return (
    <div className="bg-[#880808] ">
           
      
        <div className="container md:flex  items-center justify-between pt-10 relative">
          <div className=" text-lg font-semibold tracking-widest !text-white">RESTAURANT</div>
          <div className="md:w-[550px]">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
              <input
                id="search"
                placeholder="Search..."
                className="w-full rounded-full py-2 px-4 text-sm bg-white bg-opacity-90 text-black placeholder-gray-500 focus:outline-none"
              />
              <button
                aria-hidden
                className="absolute right-2 top-1/2 -translate-y-1/2  "
              >
                <IoMdSearch className="text-[20px] text-black"/>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
