"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import image1 from "../../../assets/CustomerFeedback/image1.png";
import image2 from "../../../assets/CustomerFeedback/image2.png";

const testimonials = [
  {
    text: "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "Tayyab Sohail",
    role: "UX/UI Designer",
    img: image2.src,
  },
  {
    text: "Amazing presentation and taste! The colors and textures were spot on.Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "John Smith",
    role: "Graphic Designer",
    img: image2.src,
  },
  {
    text: "Great quality ingredients and fast service. Would definitely order again! Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "John Deo",
    role: "Developer",
    img: image2.src,
  },
];

const CustomerFeedback = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center px-4 sm:px-6 justify-between">
        
        {/* LEFT SIDE */}
        <motion.div
          key={index}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Customer <span className="text-red-600">Feedback</span>
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md sm:max-w-lg">
            {testimonials[index].text}
          </p>

          {/* Profile */}
          <div className="flex items-center gap-4">
            <img
              src={testimonials[index].img}
              alt="User"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                {testimonials[index].name}
              </h4>
              <span className="text-xs sm:text-sm text-gray-500">
                {testimonials[index].role}
              </span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full border border-red-700 ${
                  index === i ? "bg-red-700" : ""
                }`}
              ></button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full relative"
        >
          <div className="relative w-fit mx-auto md:mx-0">
            <div className="absolute -z-10 bottom-0 right-0 w-[150px] h-[120px] sm:w-[180px] sm:h-[140px] md:w-[200px] md:h-[160px] lg:w-[220px] lg:h-[180px] bg-red-700 clip-slant"></div>

            <img
              src={image1.src}
              alt="chef"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
