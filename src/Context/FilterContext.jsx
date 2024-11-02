import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import filterReducer  from "../Reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filteredProducts: [],     //It contain all the products for filters  
  allProducts : [],           //all product 
  sorting_value: "Low to High",
  filters: {
    // text: "",
    category: "All Products",
    about: "All Products"
    // color: "all",
  },
}

export const FilterProvider = ({ children }) => {

  const { products } = useProductContext();  //This contain All API Data Comes Form Product Context 

  const [state, dispatch] = useReducer(filterReducer, initialState); //useReducer Hook


  // Filter Function: update the filter values in Filter Section
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
  
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

  //Clear All Filter Function
  const clearFilters = ()=>{
    dispatch({type: "CLEAR_FILTER"})
  }

  // Sorting function: For Sorting Product
  const sorting = (event) => {
    const userValue = event.target.value; // Get the selected sorting value text
    dispatch({ type: "SORT_PRODUCTS_VALUES", payload: userValue }); //Pass select value as payload
  }; 

  // Apply sorting whenever products or sorting value changes
  useEffect(()=>{
    dispatch({ type: "FILTER_PRODUCTS" }); // This Work on Filter Section
    dispatch({type: "SORTING_PRODUCT"})   //This work For Short Product on Price A-z ..
  },[products, state.sorting_value,  state.filters])


  // Load products initially when they are fetched from the API
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });  //This Product Come from ProductContext which contain all Api data
  }, [products]); //if you dont pass product as dependency then if you try to det data in another file it gave empty array

  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilterValue, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};


