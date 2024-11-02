import React from "react";
import { useFilterContext } from "../../Context/FilterContext";
import { useProductContext } from "../../Context/ProductContext";
import { ProductCard } from "../Style";
const ProductList = () => {
  const { isLoading, error } = useProductContext()
  const { filteredProducts } = useFilterContext(); // Access sorted and filtered products


  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="min-w min-h-screen  flex mr-5">
      <div className="product-list flex flex-wrap gap-8 justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
