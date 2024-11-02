import React from "react";
import { useCartContext } from "../Context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import CartAmountToggle from "./CartAmountToggle";

const CartProduct = ({
  id,
  color,
  size,
  name,
  quantity,
  category,
  price,
  image,
}) => {
  const { removeCartProducr, setDecrease, setIncrease } = useCartContext();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center sm:py-6 sm:pr-6 border-b border-gray-200">
      {/* Product Information */}
      <div className="w-full sm:w-auto sm:min-w-[715px] sm:h-[172px] text-sm sm:text-base text-[#707072]">
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Image and Data Container */}
          <div className="flex">
            {/* Image */}
            <figure className="flex-shrink-0">
              <img
                className="w-[100px] h-[100px] sm:w-[164px] sm:h-[164px] object-cover bg-[#f5f5f5]"
                src={image}
                alt={name}
              />
            </figure>

            {/* Data */}
            <div className="ml-4 sm:pl-4 mt-  sm:mt-0">
              <div>
                <p className="text-black font-medium">{name}</p>
                <p>{category}</p>
                <p>Colour: {color}</p>

                <div className="flex flex-col sm:flex-row sm:gap-5 items-start sm:items-center sm:mt-2 ">
                  {/* Size */}
                  <div className="flex items-center">
                    <p className="pr-2">Size </p>
                    <div className="underline">{size}</div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center">
                    <p className="pr-2">Quantity </p>
                    <div className="sm:text-sm text-xs  pl-3">
                      <CartAmountToggle
                        quantity={quantity}
                        setIncrease={() => setIncrease(id)}
                        setDecrease={() => setDecrease(id)}
                      />
                    </div>
                  </div>
                </div>

              </div>

              <div className=" hidden sm:flex mt-4 sm:mt-8 gap-4 text-black text-xl sm:text-2xl cursor-pointer">
                <IoTrashOutline onClick={() => removeCartProducr(id)} />
                <IoHeartOutline />
              </div>

            </div>
          </div>

          {/* Price */}
          <div className=" hidden sm:block text-base sm:text-lg  text-black font-medium mt-4 sm:mt-0 sm:pr-4">
            <p>MRP :₹{price * quantity}.00</p>
          </div>

           {/* MRP and Trash Icon - Mobile Only */}
           <div className="flex justify-between items-center mt-4 sm:hidden">
                <p className="text-base text-black font-medium">
                  MRP :₹{price * quantity}.00
                </p>
                <div className="flex gap-4 text-black text-xl cursor-pointer">
                  <IoTrashOutline onClick={() => removeCartProducr(id)} />
                  <IoHeartOutline />
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
