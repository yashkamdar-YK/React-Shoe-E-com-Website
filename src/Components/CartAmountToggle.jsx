import React from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
const CartAmountToggle = ({ quantity, setIncrease, setDecrease }) => {
  return (
    <div>
      <div className="amount-toggel flex gap-5">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="text-xl text-purple-600 font-semibold">{quantity}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
