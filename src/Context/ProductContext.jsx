import {createContext, useContext, useEffect, useReducer} from 'react'
import axios from "axios";
import { initialState, productReducer } from '../Reducers/ProductReducer';
const ProductContext = createContext()   //Create a Context

// const API = 'https://dummyjson.com/products'  
const API = 'https://shoes-rest-api.vercel.app/api/products'  //Get API url


//Create a Provider
const ProductProvider = ({children})=>{
    
    const [state, dispatch] = useReducer(productReducer, initialState) //Use Reducer for state management

    

    //getProduct function fetch data and store products variable
    const getProducts = async (url)=>{

        dispatch({type: 'FETCH_PRODUCTS'})  //For Loading while DATA is fetched 
        try {
            const response = await axios.get(url)
            const products = await response.data.Products 
            dispatch({type: 'FETCH_PRODUCTS_SUCESS', payload:products})  //When data is fetched sucessFully
        } catch (error) {
            dispatch({type: 'FETCH_PRODUCT_ERROR', payload:'Error While Fetching Product Data', error}) //When any error comes
        }
    }

    const getProductDetail = async (url)=>{
        dispatch({type: 'FETCH_PRODUCTS_DETAILS'})
        try {
            const response = await axios.get(url)
            const productDetail = await response.data
            dispatch({type: 'FETCH_PRODUCT_DETAILS_SUCESS', payload:productDetail})
        } catch (error) {
            dispatch({type: 'FETCH_PRODUCT_DETAILS_ERROR', payload:'Error While Fetching Product Data', error})
        }
    }



    //page is render useEffect call getProucts() fun which call api and get data
    useEffect(()=>{
        getProducts(API) //gave api as argument
    },[])

    return (
        <ProductContext.Provider value={{...state, getProducts, getProductDetail}}>
            {children}
        </ProductContext.Provider>
    )
    
}

//Creating Coustom Hook
const useProductContext =  () => {  //Now i dont need to import useContest and AppContext every time in another file
    return useContext(ProductContext);
}


export {ProductProvider, ProductContext , useProductContext}