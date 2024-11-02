import React from "react";
import { FeaturedCard } from "./Style";
const Features = () => {
  return (
    <div className="w-full min-h-screen py-5">
      <div className="text-[28px] pl-3 sm:pl-14  mb-6 font-semibold">
        Featured
      </div>
      <div className="flex gap-8 flex-wrap justify-center">
        <FeaturedCard/>
      </div>
    </div>
  );
};

export default Features;
