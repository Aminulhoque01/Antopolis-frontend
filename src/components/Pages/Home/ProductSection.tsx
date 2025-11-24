import { useState } from "react";
import product1 from "../../../assets/products/product1.png";
import product2 from "../../../assets/products/product2.png";
import product3 from "../../../assets/products/product3.png";
import product4 from "../../../assets/products/product4.png";
import product5 from "../../../assets/products/product5.png";
import product6 from "../../../assets/products/product6.png";

const dishes = [
  {
    id: 1,
    name: "Salad Fry",
    category: "Breakfast",
    price: "$20",
    rating: 5,
    image: product1,
  },
  {
    id: 2,
    name: "Chicken Breast",
    category: "Lunch",
    price: "$20",
    rating: 5,
    image: product2,
  },
  {
    id: 3,
    name: "Chicken Legs",
    category: "Dinner",
    price: "$20",
    rating: 5,
    image: product3,
  },
  {
    id: 4,
    name: "Fruit Basic",
    category: "Breakfast",
    price: "$20",
    rating: 5,
    image: product4,
  },
  {
    id: 5,
    name: "Veggie Salad",
    category: "Lunch",
    price: "$20",
    rating: 5,
    image: product5,
  },
  {
    id: 6,
    name: "Chicken Roll",
    category: "Dinner",
    price: "$20",
    rating: 5,
    image: product6,
  },
];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Breakfast", "Lunch", "Dinner"];

  const filteredDishes =
    activeTab === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeTab);

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
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 order-2 sm:order-1">
            {tabs.map((tab) => (
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
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="">
                <img
                  src={dish.image.src}
                  alt={dish.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover cursor-pointer hover:scale-105 transition-all "
                />
                 
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2">
                    {dish.name}
                  </h3>
                  <span className="bg-[#F03328] p-2 text-white   font-medium rounded-full">
                    {dish.category}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FF9E0C] text-[20px]">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {dish.price}
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
