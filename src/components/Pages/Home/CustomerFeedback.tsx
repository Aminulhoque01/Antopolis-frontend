import image1 from "../../../assets/CustomerFeedback/image1.png";
import image2 from "../../../assets/CustomerFeedback/image2.png";

const CustomerFeedback = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center px-4 sm:px-6 justify-between">
        {/* LEFT SIDE */}
        <div className="w-full space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Customer <span className="text-red-600">Feedback</span>
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md sm:max-w-lg">
            Fresh, flavorful, and just the right amount of heat. The tuna was
            buttery, the rice well-seasoned, and the chili mayo added a great
            kick. A must-try for sushi lovers.
          </p>

          {/* Profile */}
          <div className="flex items-center gap-4">
            <img
              src={image2.src}
              alt="User"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Tayyab Sohail</h4>
              <span className="text-xs sm:text-sm text-gray-500">UX/UI Designer</span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 sm:gap-3">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-700 rounded-full block flex-shrink-0"></span>
            <span className="w-2 h-2 sm:w-3 sm:h-3 border border-red-700 rounded-full block flex-shrink-0"></span>
            <span className="w-2 h-2 sm:w-3 sm:h-3 border border-red-700 rounded-full block flex-shrink-0"></span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full relative ">
          <div className="relative w-fit mx-auto md:mx-0">
            {/* 🔴 Red slanted background */}
            <div className="absolute -z-10 bottom-0 right-0 w-[150px] h-[120px] sm:w-[180px] sm:h-[140px] md:w-[200px] md:h-[160px] lg:w-[220px] lg:h-[180px] bg-red-700 clip-slant"></div>

            {/* Chef image */}
            <img
              src={image1.src}
              alt="chef"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
 
