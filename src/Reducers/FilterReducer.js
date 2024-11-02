const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      // console.log("Loading products into state:", action.payload); // Debugging log
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload], // Initially show all products
      };

    case "SORT_PRODUCTS_VALUES":
      return {
        ...state,
        sorting_value: action.payload, //insted of passing payload in context useEffecr of Sort pass their
      };

    case "SORTING_PRODUCT":
      let sortedProducts;
      const { filteredProducts, sorting_value } = state;

      // Sort logic based on sorting_value
      sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sorting_value === "price-asc") {
          return a.price - b.price;
        } else if (sorting_value === "price-desc") {
          return b.price - a.price;
        } else if (sorting_value === "pro-asc") {
          return a.name.localeCompare(b.name);
        } else if (sorting_value === "pro-desc") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });

      // newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filteredProducts: sortedProducts, // Update sorted products
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { allProducts } = state;
      let tempFilterProduct = [...allProducts];

      const { category, about } = state.filters;

      if (category !== "All Products") {           //if we dont write category !== "All Products" it gave empty data in all product button
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }

      if (about !== "All Products") {               //same in Droupdown about !== "All Products"
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.about === about
        );
      }

      return {
        ...state,
        filteredProducts: tempFilterProduct,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          category: "All Products",
          about: "All Products",
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
