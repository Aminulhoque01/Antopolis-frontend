"use client"

import CustomerFeedback from "@/components/Pages/Home/CustomerFeedback";
import HeroSection from "@/components/Pages/Home/HeroSection";
import ProductSection from "@/components/Pages/Home/ProductSection";
import TeamSection from "@/components/Pages/Home/TeamSection";
 

 
import React from "react";


const Home = () => {
  return (
    <section className="">
      
      <HeroSection  />
      <ProductSection/>
      <CustomerFeedback/>
      <TeamSection/>
    </section>
  );
};

export default Home;


