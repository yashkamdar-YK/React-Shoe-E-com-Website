import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate(`/productDetail/${product._id}`)
  }

   // Calculate the number of colors
   const numberOfColors = product.colors ? product.colors.length : 0;

  return (
    <div onClick={handleClick} className=" cursor-pointer" >
      <div className="product bg-white w-[332px] h-[520px]">
        
        <div className="w-full h-[332px] overflow-hidden bg-[#f5f5f5]">
          <img className="product_img w-full" src={product.coverImage} alt={product.title} />
        </div>

        <div className="product-details ">
          <p className="info text-[#9e3500] font-medium tracking-wider mt-2.5 text-[18px]">
            {product.about}
          </p>
          <p className="shoe_name mt-2 text-[18.5px] font-medium text-[#111111]">
            {product.name}
          </p>
          <p className="shoe_catogory text-[#707072] mt-1.25 text-[17px]">
          {product.category}
          </p>
          <p className="shoe_colours text-[#707072] mt-[-3px] mb-[6px] text-[17px]">
          {numberOfColors} Colour 
          </p>
          <span className="Shoe_price text-[#111111] font-medium text-[18.5px]">
          MRP: ₹ {product.price}.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
