// import React from "react";
// import { useCartContext } from "../Context/CartContext";
// import CartProduct from "../Components/CartProduct";
// import Payment from "../Components/Payment";
// const ProductCart = () => {
//   const { cart, total_amount, shipping_fee } = useCartContext(); //getting cart which contain data of cart page from cart[]
//   console.log("Cart Data", cart);

//   if (cart?.length === 0) {
//     return (
//       <div>
//         <h1>Your Cart is Empty</h1>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="flex justify-center gap-4 mt-16">
//         {/* Product  Section*/}
//         <div>
//           {cart?.map((curElem) => {
//             return <CartProduct key={curElem.id} {...curElem} />; //Through CurElem We pass all data to that components
//           })}
//         </div>
//         {/* Total */}
//         <div className="lg:flex-row flex flex-row"> 
//           <div className="w-[350px] h-[172px] tracking-wide text-lg mt-6 ">
//             <div className="flex justify-between mb-3 ">
//               <h1>Subtotal</h1>
//               <h1>₹ {total_amount}.00</h1>
//             </div>
//             <div className="flex justify-between mb-5">
//               <h1>Estimated Delivery & Handling</h1>
//               <h1>₹ {shipping_fee}.00</h1>
//             </div>
//             <hr />
//             <div className="flex justify-between my-4">
//               <h1>Total</h1>
//               <h1>₹ {total_amount + shipping_fee}.00</h1>
//             </div>
//             <hr />
//             <Payment/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCart;


import React from "react";
import { useCartContext } from "../Context/CartContext";
import CartProduct from "../Components/CartProduct";
import Payment from "../Components/Payment";
import { useNavigate } from "react-router-dom";

const ProductCart = () => {
  const navigate = useNavigate()
  const { cart, total_amount, shipping_fee } = useCartContext();

  if (cart?.length === 0) {
    return (
      <div>
        <h1>Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-1 mb-12 sm:mt-16">
        {/* Product Section */}
        <div className="w-full sm:w-3/4">
          {cart?.map((curElem) => {
            return <CartProduct key={curElem.id} {...curElem} />;
          })}
        </div>

        {/* Total Section */}
        <div className="w-full ml-6 sm:w-1/4 pt-6 sm:mt-0">
          <div className="tracking-wide  text-lg">
            <div className="flex justify-between mb-3">
              <h1>Subtotal</h1>
              <h1>₹ {total_amount}.00</h1>
            </div>
            <div className="flex justify-between mb-5">
              <h1 className="">Delivery Charge</h1>
              <h1>₹ {shipping_fee}.00</h1>
            </div>
            <hr />
            <div className="flex justify-between my-4">
              <h1>Total</h1>
              <h1>₹ {total_amount + shipping_fee}.00</h1>
            </div>
            <hr />
            <button onClick={()=>navigate('/Payment')} className="border-2 border-black rounded-xl px-4 hover:bg-zinc-500 bg-zinc-100 py-2 mt-8">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;

