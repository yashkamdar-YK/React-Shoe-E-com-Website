import React, { useState } from 'react';
import { Sort, ProductList, Filter } from '../Components';
import { BiCategory } from "react-icons/bi";

const ProductPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-center overflow-hidden">
      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center text-gray-700"
        >
          <BiCategory className=" ml-3 mr-2" />
          {isFilterOpen ? 'Close Filters' : 'Open Filters'}
        </button>
      </div>

      {/* Left Sidebar Filter */}
      <div
        className={`${
          isFilterOpen ? 'block' : 'hidden'
        } md:block w-full md:w-1/5 bg-white p-4`}
      >
        <Filter />
      </div>

      {/* Main Content (Sort and Products) */}
      <div className="w-full md:w-3/4 ml-2 p-4">
        {/* Sorting Header */}
        <Sort />

        {/* Product Listing */}
        <ProductList  />
      </div>
    </div>
  );
};

export default ProductPage;
