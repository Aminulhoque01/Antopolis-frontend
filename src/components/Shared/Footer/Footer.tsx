import { IoIosSend } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import image1 from "../../../assets/image/footer1.jpg"
import image2 from "../../../assets/image/footer2.jpg"
import image3 from "../../../assets/image/footer3.jpg"
import image4 from "../../../assets/image/footer4.jpg"
import image5 from "../../../assets/image/footer5.jpg"
import image6 from "../../../assets/image/footer6.jpg"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";



const Footer = () => {
  return (
    <footer className=" text-white ">
      <div className="bg-[#880808] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main sections */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
            {/* Newsletter Section */}
            <div className="md:text-left  ">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                RESTAURANT
              </h3>
              <p className="mb-6 text-sm leading-relaxed">
                Subscribe our newsletter
                <br />
                Get discount 25% off
              </p>
              <form className="flex flex-col sm:flex-row gap-1 mb-6 relative  ">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 w-full "
                />
                <button
                  type="submit"
                  className="absolute right-0 bottom-0 top-0 bg-red-700 hover:bg-red-800 px-6 py-2 rounded-sm  font-semibold transition-colors"
                >
                  <IoIosSend className="text-[20px] " />
                </button>
              </form>
              <div className="flex space-x-3">
                <a
                  href="https://www.pinterest.com/"
                  className="text-2xl hover:text-red-300 transition-colors"
                >
                  <FaPinterest />
                 
                </a>
                <a
                  href="https://x.com/"
                  className="text-2xl hover:text-red-300 transition-colors"
                >
                  <FaTwitterSquare />
                </a>
                <a
                  href="https://www.facebook.com/login"
                  className="text-2xl hover:text-red-300 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="text-2xl hover:text-red-300 transition-colors"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-2xl hover:text-red-300 transition-colors"
                >
                  <FaInstagram />
                </a>
                
              </div>
            </div>

            {/* Contact Section */}
            <div className="md:ml-10">
              <h3 className="text-sm font-bold mb-4     tracking-wide">
                Contact Us
              </h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-1">
                  <FaLocationDot className="text-white font-bold text-[20px]"/>
                  317 W. St, PA 12345
                </p>
                <p className="flex gap-1 items-center">
                 <FaPhoneAlt  className="text-white font-bold text-[20px]" />
                  (480) 555-0103
                </p>
                <p className="flex gap-1 items-center">
                  <MdEmail  className="text-white font-bold text-[20px]" />
                  m.alyoubi@4house.co
                </p>
                <p className="flex gap-1 items-center">
                 <MdOutlineUpdate className="text-white font-bold text-[20px]"/>
                  Sun / Sat 10:00 - 6:00 PM
                </p>
              </div>
            </div>

            {/* Links Section */}
            <div className="md:ml-10">
              <h3 className="text-sm font-bold mb-4  tracking-wide">
                Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-red-300 transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-300 transition-colors">
                    Our menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-300 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-300 transition-colors">
                    Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Instagram Gallery */}
            <div className="md:mb-8">
              <h4 className="text-sm font-semibold mb-4   text-left  tracking-wide">
                Instagram Gallery
              </h4>
              <div className="grid grid-cols-3 gap-1 ">
                <div
                  className="  w-[70px] h-[75px]  "
                  
                >
                  <img src={image1.src} alt="" className="w-full h-full" />
                </div>
                <div
                  className="  w-[70px] h-[75px]  "
                  
                >
                   <img src={image2.src} alt="" className="w-full h-full" />
                </div>
                <div
                   className="  w-[70px] h-[75px]  "
                   
                >
                   <img src={image3.src} alt="" className="w-full h-full" />
                </div>
                <div
                   className="  w-[70px] h-[75px]  "
                   
                >
                   <img src={image4.src} alt="" className="w-full h-full" />
                </div>
                <div
                  className="  w-[70px] h-[75px]  "
                   
                >
                   <img src={image5.src} alt="" className="w-full h-full" />
                </div>
                <div
                     className="  w-[70px] h-[75px]  "
                >
                   <img src={image6.src} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Copyright */}
      <div className="  bg-[#A52A2A] pt-6 text-center text-sm ">
        <div className="md:max-w-5xl mx-auto md:flex justify-between ">
          <div>
            <p className="mb-2">Copyright 2025. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#" className="hover:text-red-300 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-300 transition-colors">
              Term of Use
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-300 transition-colors">
              Partner
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
