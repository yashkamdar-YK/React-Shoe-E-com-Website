import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useFilterContext } from "../../Context/FilterContext";
import { Button } from "../Style";

const Filter = () => {
  const { allProducts, updateFilterValue, clearFilters } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => curElem[property]);
    return ["All Products", ...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueData(allProducts, "category");
  const brandWiseData = getUniqueData(allProducts, "about");

  return (
    <div className="w-full md:w-64 bg-white p-4">
      <h2 className="text-xl underline font-bold py-1.5 mb-4">
        Filter Products
      </h2>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-xl text-gray-700 underline mb-2">
            Categories
          </h2>
          <div className="space-y-2">
            {categoryOnlyData.map((curElem, index) => (
              <button
                className="block w-full text-left py-1.5 text-base font-medium hover:bg-gray-100 rounded"
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-gray-700 underline mb-2">
            Featured
          </h2>
          <select
            name="about"
            id="about"
            onClick={updateFilterValue}
            className="w-full p-2 border rounded"
          >
            {brandWiseData.map((curElem, index) => (
              <option key={index} value={curElem} name="about">
                {curElem}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Button onClick={clearFilters} className="w-full">
            Clear Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;