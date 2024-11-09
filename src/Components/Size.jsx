import React, { useState, useEffect } from "react";
import { useProductContext } from "../Context/ProductContext";
import { useCartContext } from "../Context/CartContext";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Style";
import { useFirebaseContext } from "../Context/Firebase";

const Size = () => {
  // const navigate = useNavigate();
  // const { user, isLoggedIn } = useFirebaseContext();

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

  // const handleAddToCart = () => {
  //   if (!isLoggedIn) {
  //     // Redirect to login page if user is not authenticated
  //     navigate("/login");
  //     return;
  //   }
  //   // Add to cart if user is authenticated
  //   addToCart(_id, color, size, quantity, productDetail);
  //   navigate("/cart");
  // };

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
        </div>
      </div>
    </div>
  );
};

export default Size;
