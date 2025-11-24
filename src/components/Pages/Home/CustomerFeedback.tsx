import image1 from "../../../assets/CustomerFeedback/image1.png";
import image2 from "../../../assets/CustomerFeedback/image2.png";

const CustomerFeedback = () => {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-6">
        {/* LEFT SIDE */}
        <div className="w-[636px]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Customer <span className="text-red-600">Feedback</span>
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
            Fresh, flavorful, and just the right amount of heat. The tuna was
            buttery, the rice well-seasoned, and the chili mayo added a great
            kick. A must-try for sushi lovers.
          </p>

          {/* Profile */}
          <div className="flex items-center gap-4 mt-8">
            <img
              src={image2.src}
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Tayyab Sohail</h4>
              <span className="text-sm text-gray-500">UX/UI Designer</span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-3 mt-6">
            <span className="w-3 h-3 bg-red-700 rounded-full block"></span>
            <span className="w-3 h-3 border border-red-700 rounded-full block"></span>
            <span className="w-3 h-3 border border-red-700 rounded-full block"></span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[590px]">
          <div className="relative w-fit">
            {/* 🔴 Red slanted background */}
            <div className="absolute -z-10 bottom-0 right-0  w-[220px] h-[180px]  bg-red-700 clip-slant"></div>

            {/* Chef image */}
            <img
              src={image1.src}
              alt="chef"
              className="w-[580px] md:w-[530px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;

 
// import Image from "next/image";
// import image1 from "../../../assets/CustomerFeedback/image1.png";
// import image2 from "../../../assets/CustomerFeedback/image2.png";
// const CustomerFeedback = () => {
//   return (
//     <div className="relative w-full   bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Background Shape */}
//       <div className="max-w-5xl mx-auto flex justify-between gap-10">
//         {/* Content Container */}
//         <div className="relative p-6 ">
//           {/* Title */}
//           <h2 className="text-xl font-bold  mb-4 z-10">
//             Customer <span className="text-red-500 font-bold text-xl ">Feedback</span>
//           </h2>

//           {/* Quote */}
//           <p className="text-gray-700 text-sm leading-relaxed mb-6 z-10">
//             The fresh tuna was buttery, the rice well-seasoned,  and the chili
//             mayo added a great kick. A must-try for sushi lovers.
//           </p>

//           {/* Profile Section */}

//           {/* Dots Indicator */}
//           <div className="absolute bottom-4 right-4 flex space-x-1 z-10">
//             <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//             <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
//             <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
//           </div>

//           <div className="flex items-center mt-8 z-10">
//             <Image
//               src={image2}
//               alt="Tayyab Sohail"
//               width={40}
//               height={40}
//               className="rounded-full mr-3"
//             />
//             <div>
//               <p className="font-semibold text-gray-800 text-sm">
//                 Tayyab Sohail
//               </p>
//               <p className="text-gray-500 text-xs">UI Designer</p>
//             </div>
//           </div>
//         </div>

         
//           <div className=" w-full h-full  ">
//             <Image
//               src={image1}
//               alt="Chef giving OK sign"
//               width={590}
//               height={150}
//               className="object-contain"
//             />
//           </div>
         
//       </div>
//     </div>
//   );
// };

// export default CustomerFeedback;
