const cartReducer = (state, action) => {
  if (action.type === "ADD_PRODUCT_TO_CART") {
    let { _id, size, color, quantity, productDetail } = action.payload;
    console.log("Product Data For Cart Page", productDetail);

    //   // Create a unique id for the product
    //   let productId = _id + color + size;

    //    // Ensure state.cart is an array
    //    const cart = Array.isArray(state.cart) ? state.cart : [];

    //   //Track the existing Product to increase Its Quantity in Cart Page
    //   let existingProductInCart = state.cart.find(
    //     (curItem) => curItem.id === productId
    //   );

    //   if (existingProductInCart) {
    //     let updatedProduct = state.cart.map((curElem) => {
    //       if (curElem.id === productId) {
    //         let newQuantity = curElem.quantity + quantity;

    //         if (newQuantity >= 10) {
    //           newQuantity = 10;
    //         }
    //         return {
    //           ...curElem,
    //           quantity: newQuantity,
    //         };
    //       } else {
    //         return curElem;
    //       }
    //     });
    //     return {
    //       ...state,
    //       cart: updatedProduct,
    //     };
    //   } else {
    //     let addToCartProduct = {
    //       id: productId, //we create a unique id for a product which show specfic colour size and shoes
    //       name: productDetail.name,
    //       color,
    //       size,
    //       price: productDetail.price,
    //       quantity,
    //       category: productDetail.category,
    //       image: productDetail.coverImage,
    //     };

    //     return {
    //       ...state,
    //       cart: [...state.cart, addToCartProduct],
    //     };
    //   }
    // }

    // Create a unique id for the product
    let productId = _id + color + size;

    // Ensure state.cart is an array
    const cart = Array.isArray(state.cart) ? state.cart : [];

    //Track the existing Product to increase Its Quantity in Cart Page
    let existingProductInCart = cart.find(
      (curItem) => curItem.id === productId
    );

    if (existingProductInCart) {
      let updatedProduct = cart.map((curElem) => {
        if (curElem.id === productId) {
          let newQuantity = curElem.quantity + quantity;

          if (newQuantity >= 10) {
            newQuantity = 10;
          }
          return {
            ...curElem,
            quantity: newQuantity,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let addToCartProduct = {
        id: productId,
        name: productDetail.name,
        color,
        size,
        price: productDetail.price,
        quantity,
        category: productDetail.category,
        image: productDetail.coverImage,
      };

      return {
        ...state,
        cart: [...cart, addToCartProduct],
      };
    }
  }

  // to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decQuantity = curElem.quantity - 1;

        if (decQuantity <= 1) {
          decQuantity = 1;
        }

        return {
          ...curElem,
          quantity: decQuantity,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incQuantity = curElem.quantity + 1;

        if (incQuantity >= 10) {
          incQuantity = 10;
        }

        return {
          ...curElem,
          quantity: incQuantity,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_PRODUCT_TO_CART") {
    let remainProductInCart = state.cart.filter(
      //This Function Show Product on Cart Page whose Id is Not equal to product which we want to delete
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: remainProductInCart, //And then we add Update Producr into Cart which display produc on cartPage
    };
  }

  //For Cart Total Amount

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart?.reduce((initialVal, curElem) => {
      let { quantity } = curElem;

      initialVal = initialVal + quantity;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_amount = state.cart?.reduce((initialVal, curElem) => {
      let { price, quantity } = curElem;

      initialVal = initialVal + price * quantity;
      // 25000 + 0 = 25000
      // 10199 + 25000 = 121

      return initialVal;
    }, 0);

    return {
      ...state,
      total_amount,
    };
  }

  return state;
};

export default cartReducer;
