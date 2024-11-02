import React, { useState } from "react";

const ProductImages = ({ imgs = [""] }) => {
  // console.log(imgs);

  // const {mainImg, setMainImg } = useState(imgs[0])

  return (
    // <div className="flex justify-between gap-5">
    //   <div className="grid grid-rows-5 gap-2">
    //     {imgs?.map((image, index) => {
    //       return (
    //         <figure key={index} className="w-28 h-28 object-cover rounded-lg bg-[#aeafac]">
    //           <img onClick={()=>setMainImg(image)} src={image}  />
    //         </figure>
    //       );
    //     })}
    //   </div>
    //   {/* Second Coloum */}
    //   <div className="w-full min-h-full mr-5">
    //     <img
    //     className="bg-[#aeafac] w-full h-full object-cover rounded-lg  "
    //     src={imgs[0]} alt="Somthing Wrong"
    //     />
    //   </div>
    // </div>
    <div className="flex flex-col sm:flex-row justify-between gap-5">
      <div className="flex sm:flex-col overflow-x-auto sm:overflow-x-visible gap-2 mb-4 sm:mb-0">
        {imgs?.map((image, index) => (
          <figure
            key={index}
            className="w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 bg-[#aeafac] rounded-lg overflow-hidden"
          >
            <img
              onClick={() => setMainImg(image)}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </figure>
        ))}
      </div>
      {/* Main Image */}
      <div className="w-full sm:w-3/4 h-64 sm:h-auto">
        <img
          className="w-full h-full object-cover rounded-lg bg-[#aeafac]"
           src={imgs[0]} alt="Somthing Wrong"
        />
      </div>
    </div>
  );
};

export default ProductImages;

