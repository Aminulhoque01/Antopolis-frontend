"use client";
import { useState } from "react";

import { useGetProductsQuery } from "@/redux/features/products/product";

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const { data } = useGetProductsQuery({});
  const product = data?.data?.data || [];
  console.log(product);

  // Get unique categories from your products array
  const categories = [
    "All",
    ...Array.from(
      new Set(
        product.flatMap((item: any) =>
          Array.isArray(item.category) ? item.category : [item.category]
        )
      )
    ),
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-yellow-500 text-[20px]">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-[20px]">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  const filteredDishes =
    activeTab === "All"
      ? product
      : product.filter((item: any) =>
          Array.isArray(item.category)
            ? item.category.includes(activeTab)
            : item.category === activeTab
        );

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Our best seller dishes
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-sm sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-2">
            Our fresh garden salad is light and refreshing. It features a mix of
            crisp lettuce, juicy tomatoes and all dressed in your choice of
            dressing.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 md:mb-12 gap-3 sm:gap-4">
          {/* <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 order-2 sm:order-1">
            {categories.map((tab:any) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors flex-shrink-0 ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div> */}

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((tab: any) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 order-1 sm:order-2 w-full sm:w-auto">
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors flex-1 sm:flex-none">
              Add Food
            </button>
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors flex-1 sm:flex-none">
              Add Category
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredDishes.map((item: any, _id: any) => (
            <div
              key={item._id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="">
                <img
                  src={item.image?.src || item.image}
                  alt={item.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover cursor-pointer hover:scale-105 transition-all"
                />
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <span className="bg-[#F03328] p-2 text-white   font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2">
                    {renderStars(item.rating)}
                  </div>

                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
