"use client";
import { useState } from "react";
import {
  useGetProductsQuery,
  useCreateProductsMutation,
} from "@/redux/features/products/product";
import toast from "react-hot-toast";

import {
  useAddCategoryMutation,
  useGetCategoryQuery,
} from "@/redux/features/category/categoryApi";

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showFoodModal, setShowFoodModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const [addFood] = useCreateProductsMutation();

  const [foodData, setFoodData] = useState({
    name: "",
    price: "",
    rating: "",
    category: "",
    image: "",
  });

  const { data, isLoading, isFetching } = useGetProductsQuery({});
  const product = data?.data?.data || [];

  const [addCategory] = useAddCategoryMutation();

  const { data: category } = useGetCategoryQuery({});
  const cates = category?.data;

  const categories = ["All", ...new Set(cates?.map((item: any) => item.name))];

  const filteredDishes =
    activeTab === "All"
      ? product
      : product.filter((item: any) =>
          Array.isArray(item.category)
            ? item.category.includes(activeTab)
            : item.category === activeTab
        );

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-[20px] ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="text-gray-700 text-lg font-medium">Please wait...</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center px-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Best Seller Dishes
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Our fresh garden salad is a light and refreshing option. It features
            a mix of crisp lettuce, juicy tomato all tossed in your choice of
            dressing.
          </p>
        </div>

        <div className="md:flex justify-between mb-6">
          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap gap-2 ">
            {categories.map((tab: any) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowFoodModal(true)}
              className="px-4 py-2 bg-black text-white rounded-full"
            >
              Add Food
            </button>

            <button
              onClick={() => setShowCategoryModal(true)}
              className="px-4 py-2 bg-black text-white rounded-full"
            >
              Add Category
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-3 gap-5">
          {filteredDishes.map((item: any) => (
            <div key={item._id} className="bg-gray-50  rounded-lg shadow">
              <img
                src={item.image}
                className="w-full h-40 object-cover rounded hover:scale-105 cursor-pointer"
              />
              <div className="sm:p-4">
                <div className="flex justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 ">
                    {item.name}
                  </h3>
                  <span className="bg-[#F03328] p-2 text-white font-medium rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="flex  items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2">
                    {renderStars(item.rating)}
                  </div>

                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    $ {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  FOOD MODAL */}
      {showFoodModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-[rgba(173,173,173,0.4)] backdrop-blur-sm border border-gray-200 p-6 rounded-lg w-80">
            <h2 className="text-lg font-bold mb-4">Add Food</h2>

            <input
              className="border   w-full p-2 mb-2 rounded-[30px]"
              placeholder="Food Name"
              value={foodData.name}
              onChange={(e) =>
                setFoodData({ ...foodData, name: e.target.value })
              }
            />

            <input
              className="border    w-full p-2 mb-2 rounded-[30px]"
              placeholder="Price"
              value={foodData.price}
              onChange={(e) =>
                setFoodData({ ...foodData, price: e.target.value })
              }
            />

            <input
              className="border  w-full p-2 mb-2 rounded-[30px]"
              placeholder="Rating"
              value={foodData.rating}
              onChange={(e) =>
                setFoodData({ ...foodData, rating: e.target.value })
              }
            />

            <input
              className="border   w-full p-2 mb-2 rounded-[30px]"
              placeholder="Category "
              value={foodData.category}
              onChange={(e) =>
                setFoodData({ ...foodData, category: e.target.value })
              }
            />

            <input
              className="border  text-black w-full p-2 mb-2 rounded-[30px]"
              placeholder="Image URL"
              value={foodData.image}
              onChange={(e) =>
                setFoodData({ ...foodData, image: e.target.value })
              }
            />

            <div className="flex justify-end gap-2">
              <button
                className="px-3 py-1 bg-gray-300 rounded"
                onClick={() => setShowFoodModal(false)}
              >
                Cancel
              </button>

              <button
                className="px-3 py-1 bg-[#F03328] text-white rounded "
                onClick={async () => {
                  try {
                    await addFood({
                      name: foodData.name,
                      price: Number(foodData.price),
                      rating: Number(foodData.rating),
                      category: foodData.category,
                      image: foodData.image,
                    }).unwrap();

                    setFoodData({
                      name: "",
                      price: "",
                      rating: "",
                      category: "",
                      image: "",
                    });

                    setShowFoodModal(false);

                    toast("Food Added Successfully");
                  } catch (err) {
                    console.log(err);
                    toast("Failed Added fail");
                  }
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/*  CATEGORY MODAL */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-[rgba(173,173,173,0.4)] backdrop-blur-sm border border-gray-200bg-white p-6 rounded-lg w-80">
            <h2 className="text-lg font-bold mb-4">Add Category</h2>

            <input
              className="border w-full p-2 mb-2 rounded-[30px]"
              placeholder="Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                className="px-3 py-1 bg-gray-300 rounded"
                onClick={() => setShowCategoryModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 bg-[#F03328] text-white rounded"
                onClick={async () => {
                  if (!newCategory.trim()) {
                    toast.error("Category name required");
                    return;
                  }

                  try {
                    await addCategory({ name: newCategory }).unwrap();

                    toast.success("Category Added Successfully");

                    setNewCategory("");
                    setShowCategoryModal(false);
                  } catch (err) {
                    console.log(err);
                    toast.error("Failed to add category");
                  }
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
