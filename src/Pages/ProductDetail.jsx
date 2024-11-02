import React, { useEffect, useState } from "react";
import { Button, ProductImages } from "../Components";
import { useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useProductContext } from "../Context/ProductContext";

import Size from "../Components/Size";
const API = "https://shoes-rest-api.vercel.app/api/products"; //Get API url

const ProductDetail = () => {
  const { _id } = useParams();
  // console.log(_id);

  const {
    getProductDetail, //It get all product detail
    productDetail, //it contain all data of particular product
    productDetailLoading,
    productDetailError,
  } = useProductContext();

  // console.log(productDetail);

  const {
    name,
    price,
    brand,
    about,
    category,
    colors,
    description,
    gender,
    sizes,
    images,
  } = productDetail;

  useEffect(() => {
    getProductDetail(`${API}?_id=${_id}`);
  }, [_id]);

  return (
    <div className="flex flex-col  min-h-screen">
          {/* OfferBanner */}
           <div className="bg-[#f5f5f5] py-4 flex justify-center">
             <div className="flex items-center px-4 sm:px-0">
             <MdOutlineKeyboardArrowLeft className="text-2xl sm:text-4xl" />
             <h1 className="text-[#313131] font-medium mx-2 sm:mx-56 text-sm sm:text-base text-center">
               New Styles On Sale: Up To 40% Off
             </h1>
             <MdOutlineKeyboardArrowRight className="text-2xl sm:text-4xl" />
           </div>
         </div>
    
         {/* Product Information */}
         <div className="flex-grow pt-8 sm:pt-16 justify-center px-4 sm:px-8 md:px-16 lg:px-28">
           <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
             {/* Product Images */}
             <div className="md:w-1/2 mb-8 md:mb-0">
               <ProductImages imgs={images} />
             </div>
    
             {/* Product Data */}
             <div className="md:w-1/3">
               <h1 className="text-xl sm:text-2xl font-semibold mb-1">{name}</h1>
               <h1 className="text-base sm:text-lg font-semibold">{gender}</h1>
               <br />
               <h1 className="text-base sm:text-lg font-semibold">MRP : ₹{price}.00</h1>
               <p className="text-sm sm:text-base">Inclusive of all taxes</p>
               <p className="text-sm sm:text-base text-[rgb(174,174,174)]">
                 (Also includes all applicable duties)
               </p>
               <br />
    
               {/* Size */}
               <Size />
             </div>
           </div>
         </div>
       </div>
  );
};

export default ProductDetail;

