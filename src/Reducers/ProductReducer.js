export const initialState = {
  products: [],
  isLoading: false,
  error: false,
  productDetail: {},
  productDetailLoading: false,
  productDetailError: false
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, isLoading: true }; //This spreads the current state, meaning all other properties (like products and error) stay the same.

    case "FETCH_PRODUCTS_SUCESS":
      return { ...state, isLoading: false, products: action.payload }; //[products: action.payload] it updateour (products) array which we set in initalState at top

    case "FETCH_PRODUCT_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    case "FETCH_PRODUCTS_DETAILS":
      return { ...state, productDetailLoading: true }; //This spreads the current state, meaning all other properties (like products and error) stay the same.

    case "FETCH_PRODUCT_DETAILS_SUCESS":
      return {
        ...state,
        productDetailLoading: false,
        productDetail: action.payload,
      };

    case "FETCH_PRODUCT_DETAILS_ERROR":
      return { 
        ...state,
        productDetailLoading: false,
        productDetailError: action.payload 
      };

    default:
      break;
  }
};
