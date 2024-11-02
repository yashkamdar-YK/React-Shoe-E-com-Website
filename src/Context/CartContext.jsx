import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../Reducers/CartReducer";
const CartContext  = createContext()

//Get Cart Data From Local Storage
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("ProductCart");
    if (!localCartData || localCartData === "null") {
      return [];
    } else {
      try {
        return JSON.parse(localCartData);
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
        return [];
      }
    }
  };
  
  const initialState = {
    cart: getLocalCartData(),
    total_item: 0,
    total_amount: 0,
    shipping_fee: 500
  };


const CartProvider = ({children})=>{

    const [state , dispatch] = useReducer(cartReducer, initialState)

    //Addding Product Into Cart
    const addToCart = (_id, color, size, quantity, productDetail) => {  //Comes from Size File which contain data of Product Which going in Cart 
        console.log(productDetail);
        
        dispatch({type:"ADD_PRODUCT_TO_CART", payload:{_id, color, size, quantity, productDetail}})
    }
    
    //Increment And Decriment Product Quantity
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
      };
    
      const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
      };
    

    //Removing Product from Cart
    const removeCartProducr = (id)=>{  {/* passing id to we remove product with his unique id */}
        dispatch({type:"REMOVE_PRODUCT_TO_CART", payload:id}) //Pass only "Id" in reducer
    }

    //To add Cart Product In local Storege {Browser Storage} so if we refrest cart page Product is not remover
    //Set Cart Data To Local Storage
    useEffect(()=>{
        dispatch({ type: "CART_TOTAL_ITEM" });  
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("ProductCart", JSON.stringify(state.cart)) //state.cart is because we cant access cart it is inside th initialState
    },[state.cart]) //importent to passs dependency

    return(
    <CartContext.Provider value={{...state, addToCart, removeCartProducr, setDecrease, setIncrease}}>
        {children}
    </CartContext.Provider>
    )
}

 const  useCartContext = ()=>{
    return useContext(CartContext)
}

export {CartProvider, useCartContext }