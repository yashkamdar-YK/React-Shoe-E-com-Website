import React from "react";
import { useEffect, useState } from "react";
// import { useProductContext } from "../../Context/ProductContext";
import { useFilterContext } from "../../Context/FilterContext";
const Sort = () => {
  const { sorting, filteredProducts } = useFilterContext();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="flex justify-between items-center mb-4 ">
      {/* Heading */}
      <h2 className="text-l font-bold underline ml-2 sm:ml-4 sm:text-xl">All Products</h2>

      {/* No. Of Product */}
      {isDesktop && (
        <div>
          <p className="underline">{`${filteredProducts.length} Product Available`}</p>
        </div>
      )}

      {/* DroupDown */}
      <div className="flex items-center gap-2 sm:mr-9 mr-6">
        <label htmlFor="sort" className="font-medium ">
          Sort by:
        </label>
        <select id="sort" className="border text-sm rounded" onChange={sorting}>
          <option value="price-asc">Low to High</option>
          <option value="price-desc">High to Low</option>
          <option value="pro-asc">A - Z</option>
          <option value="pro-desc">Z - A</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
