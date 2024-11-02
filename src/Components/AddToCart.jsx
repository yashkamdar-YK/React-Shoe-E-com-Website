// import React from 'react'
// import { useState } from 'react'
// import CartAmountToggle from './CartAmountToggle'
// import { NavLink } from 'react-router-dom'
// import { Button } from './Style'

// const AddToCart = ({product}) => {

//     const [amount , setAmount] = useState(1)
    
//     const setDecrease = ()=>{
//         amount > 1 ? setAmount(amount - 1) : setAmount(1)
//     }

//     const setIncrease = ()=>{
//         amount < 10 ? setAmount(amount + 1) : setAmount(10)
//     }

//   return (
//     <div>
//         {/* Quantity  Measure */}
//         <CartAmountToggle
//         amount={amount}
//         setIncrease={setIncrease}
//         setDecrease={setDecrease}
//         />

//         {/* Add to Cart */}
//        <div className='flex gap-8 mt-4'>
//        <NavLink to={"/cart"}>
//          <Button title="Add To Cart" />
//         </NavLink>
//         <Button title="Favorite" />
//        </div>
//     </div>
//   )
// }

// export default AddToCart