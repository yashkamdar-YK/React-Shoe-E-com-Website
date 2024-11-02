// import React, { useState, useEffect } from "react";
// import { useProductContext } from "../Context/ProductContext";
// import {useCartContext} from '../Context/CartContext'
// import CartAmountToggle from "./CartAmountToggle";
// import { NavLink } from "react-router-dom";
// import { Button } from "./Style";
// const Size = () => {
//   const { productDetail } = useProductContext(); //productDetail Contain All Detail Of a particular data

//   const {addToCart} =  useCartContext()

//   const { colors = [], sizes = [], _id  } = productDetail || {}; // If productDetail is undefined, colors and sizes will default to empty arrays
//   // console.log(_id);
  
//   const [color, setColor] = useState(colors[0]); //For Colour
//   const [size, setSize] = useState(null); //For Size
//   const [quantity, setQuantity] = useState(1); //For Toggel

//   // Function Toogle Product Quantity
//   const setDecrease = () => {
//     quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
//   };

//   const setIncrease = () => {
//     quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);
//   };

//   // Set initial color when productDetail and colors are available
//   useEffect(() => {
//     if (colors.length > 0) {
//       //first color is default select
//       setColor(colors[0]);
//     }
//     setSize(null); //making setSize Null it doesnot select size in default like colors
//   }, [colors, sizes, _id]);

//   return (
//     <div>
//       {/* Color */}
//       <h1 className="mb-2 text-lg font-medium">Colour:</h1>
//       <div className="flex gap-2 mb-4">
//         {colors?.map((curColor, index) => {
//           return (
//             <button
//               key={index}
//               style={{ backgroundColor: curColor }}
//               //    className="border-2 font-semibold w-20 h-10 text-black rounded-md flex justify-center items-center"
//               className={`border-2 font-semibold w-20 h-10 rounded-md flex justify-center items-center ${
//                 color === curColor ? "border-black" : ""
//               }`}
//               onClick={() => setColor(curColor)}
//             >
//               {curColor}
//             </button>
//           );
//         })}
//       </div>

//       {/* Size */}
//       <h1 className="mb-4 font-medium">Select Size</h1>
//       <div className="flex flex-wrap max-w-[400px] gap-3 ">
//         {sizes?.map((curSize, index) => {
//           return (
//             <button
//               key={index}
//               className={`border-2 font-semibold w-20 h-10 rounded-md flex justify-center items-center ${
//                 size === curSize ? "border-black" : ""
//               }`}
//               onClick={() => setSize(curSize)}
//             >
//               {curSize}
//             </button>
//           );
//         })}
//       </div>

//       {/* Add To Cart Btn */}
//       <div className="mt-4 ml-4 flex gap-12">
//         <div>
//           {/* Quantity  Measure */}
//           <CartAmountToggle
//             quantity={quantity}
//             setIncrease={setIncrease}
//             setDecrease={setDecrease}
//           />

//           {/* Add to Cart */}
//           <div className="flex gap-8 mt-4">
//             {/* Passing Product data for cart Page through a function because we are not pass multiple data using comma */}
//             <NavLink to={"/cart"} onClick={()=>addToCart(_id, color, size, quantity , productDetail)}>
//               <Button
//                title="Add To Cart" />
//             </NavLink>
//             <Button title="Favorite" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Size;


import React, { useState, useEffect } from "react";
import { useProductContext } from "../Context/ProductContext";
import { useCartContext } from '../Context/CartContext';
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "./Style";

const Size = () => {
  const { productDetail } = useProductContext();
  const { addToCart } = useCartContext();

  const { colors = [], sizes = [], _id } = productDetail || {};
  
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);
  };

  useEffect(() => {
    if (colors.length > 0) {
      setColor(colors[0]);
    }
    setSize(null);
  }, [colors, sizes, _id]);

  return (
    <div>
      {/* Color */}
      <h1 className="mb-2 text-base sm:text-lg font-medium">Colour:</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {colors?.map((curColor, index) => (
          <button
            key={index}
            style={{ backgroundColor: curColor }}
            className={`border-2 font-semibold w-16 sm:w-20 h-8 sm:h-10 text-xs sm:text-sm rounded-md flex justify-center items-center ${
              color === curColor ? "border-black" : ""
            }`}
            onClick={() => setColor(curColor)}
          >
            {curColor}
          </button>
        ))}
      </div>

      {/* Size */}
      <h1 className="mb-4 font-medium text-base sm:text-lg">Select Size</h1>
      <div className="flex flex-wrap gap-2 sm:gap-3 max-w-full sm:max-w-[400px]">
        {sizes?.map((curSize, index) => (
          <button
            key={index}
            className={`border-2 font-semibold w-16 sm:w-20 h-8 sm:h-10 text-xs sm:text-sm rounded-md flex justify-center items-center ${
              size === curSize ? "border-black" : ""
            }`}
            onClick={() => setSize(curSize)}
          >
            {curSize}
          </button>
        ))}
      </div>

      {/* Add To Cart Btn */}
      <div className="mt-4 flex flex-col sm:flex-col gap-4">
        <div>
          <CartAmountToggle
            quantity={quantity}
            setIncrease={setIncrease}
            setDecrease={setDecrease}
          />
        </div>
        <div className="flex space-x-4 sm:mt-0">
          <NavLink to={"/cart"} onClick={() => addToCart(_id, color, size, quantity, productDetail)}>
            <Button title="Add To Cart" />
          </NavLink>
          <Button title="Favorite" />
        </div>
      </div>
    </div>
  );
};

export default Size;