import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  // Define options for each category
  const footerData = {
    PRODUCTS: ["Clothing", "Accessories", "New Arrivals", "Shoes", "Bags"],
    SPORTS: ["Running", "Training", "Basketball", "Football", "Tennis"],
    COLLECTIONS: [
      "Summer Collection",
      "Winter Collection",
      "Limited Edition",
      "Best Sellers",
      "Eco-Friendly",
    ],
    SUPPORT: ["Customer Service", "FAQ", "Returns", "Order Status", "Shipping"],
    SHOU4U: ["About Us", "Careers", "Press", "Affiliates", "Store Locator"],
    "FOLLOW US": ["Instagram"],
  };

  // className=" whitespace-nowrap block font-adiha text-[15px] leading-6
  return (
    <div className="w-full pt-8 sm:pt-16">
      <hr className="mb-8" />
      <div className="container mx-auto justify-center flex px-4">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Footer columns */}
          {Object.keys(footerData).map((title, index) => (
            <li key={index} className="mb-8">
              <h5 className="font-adihapro text-lg font-bold tracking-wide mb-4">
                {title}
              </h5>
              <ul className="space-y-1">
                {/* Display custom options for each category */}
                {footerData[title].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="font-adiha text-sm hover:underline">
                      {/* Display Instagram icon for FOLLOW US, otherwise the custom item */}
                      {title === "FOLLOW US" && i === 0 ? (
                        <FaInstagram className="text-2xl" />
                      ) : (
                        <span>{item}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full bg-[#282c31] py-6 mt-8">
        <div className="container  mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center gap-4 mb-4">
            {["Privacy Policy", "Terms and Conditions", "Cookies"].map(
              (item, index) => (
                <li key={index} className="text-[#d3d7da] font-adiha text-xs">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="text-center text-[#d3d7da] font-adiha text-xs">
            <span>©2024 shue4u India Marketing Pvt. Ltd</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import { FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="min-w-[960px] pt-16 ">
//       <hr className=" mb-8"/>
//       <ul className="flex flex-row max-w-[1010px] mx-auto ">
//         <li className=" basis-[100%] pt-5 px-[15px] pb-[30px]">
//           <h5 className="font-adihapro text-[18px] font-bold tracking-[1px] leading-6 mb-[10px] ">
//             PRODUCTS
//           </h5>
//           <ul className="m-0 p-0">
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Footware</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Clothing</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Accessories</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span className="text-white">hello</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Outlate-Sale</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>NewArrivals</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Special Offer</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Flat 50% Off!</span>
//               </a>
//             </li>
//           </ul>
//         </li>

//         <li className=" basis-[100%] pt-5 px-[15px] pb-[30px]">
//           <h5 className="font-adihapro text-[18px] font-bold tracking-[1px] leading-6 mb-[10px] ">
//             SPORTS
//           </h5>
//           <ul className="m-0 p-0">
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>CRICKET</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Running</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Football</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Gym/Training</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Outdoor</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Bsaketball</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Tennis</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span></span>
//               </a>
//             </li>
//           </ul>
//         </li>

//         <li className=" basis-[100%] pt-5 px-[15px] pb-[30px]">
//           <h5 className="font-adihapro text-[18px] font-bold tracking-[1px] leading-6 mb-[10px] ">
//             COLLECTIONS
//           </h5>
//           <ul className="m-0 p-0">
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Ultraboost</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Superstar</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Air Max</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Stan Smith</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Air Jorde</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Parley</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Adicolor</span>
//               </a>
//             </li>
//           </ul>
//         </li>

//         <li className=" basis-[100%] pt-5 px-[15px] pb-[30px]">
//           <h5 className="font-adihapro text-[18px] font-bold tracking-[1px] leading-6 mb-[10px] ">
//             SUPPORT
//           </h5>
//           <ul className="m-0 p-0">
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Help</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Coustomer Services</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Return & Exchanges</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Shipping</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Order Tracker</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Store Finder</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Terms and Conditions</span>
//               </a>
//             </li>
//           </ul>
//         </li>

//         <li className=" basis-[100%] pt-5 px-[15px] pb-[30px]">
//           <h5 className="font-adihapro text-[18px] font-bold tracking-[1px] leading-6 mb-[10px] ">
//             SHOU4U
//           </h5>
//           <ul className="m-0 p-0">
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>About Us</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Entity Details</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Press</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span>Careers</span>
//               </a>
//             </li>
//           </ul>
//         </li>

//         <li className="basis-[100%] pt-5 px-[15px] pb-[30px]">
//           <h5 className="font-adihapro text-[18px] font-bold tracking-[1px] leading-6 mb-[10px] ">
//             FOLLOW US
//           </h5>
//           <ul className="m-0 p-0">
//             <li>
//               <a
//                 href="#"
//                 className=" whitespace-nowrap block font-adiha text-[15px] leading-6 "
//               >
//                 <span className="text-[22px]">
//                   <FaInstagram />
//                 </span>
//               </a>
//             </li>
//           </ul>
//         </li>
//       </ul>

//       <div className="w-full bg-[#282c31] h-[113px] border-t-[1px]-solid-[#767677] py-[15px] flex flex-col">
//         <ul className="flex flex-row flex-wrap justify-center max-w-[1010px] mx-auto text-center overflow-hidden p-0">
//           <li className="w-auto border-r-[1px] border-[#d3d7da] inline-block my-[15px] px-[15px] text-[#d3d7da] font-adiha text-[12px] font-medium leading-4 ">
//             <a href="#">Privacy Policy</a>
//           </li>
//           <li className="w-auto border-r-[1px] border-[#d3d7da] inline-block my-[15px] px-[15px] text-[#d3d7da] font-adiha text-[12px] font-medium leading-4 ">
//             <a href="#">Terms and Conditions</a>
//           </li>
//           <li className="w-auto inline-block my-[15px] px-[15px] text-[#d3d7da] font-adiha text-[12px] font-medium leading-4 ">
//             <a href="#">Cookies</a>
//           </li>
//         </ul>

//         <div className="flex text-center items-center justify-center pt-5 px-[15px] font-adiha text-[12px] font-medium leading-4 text-[#d3d7da]">
//           <span>©2024 shue4u India Marketing Pvt. Ltd</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
