import React from "react";
import Image from "../../assets/image.png";
import Image1 from "../../assets/image1.png";
import Image2 from '../../assets/image2.jpg'
import { useNavigate } from "react-router-dom";
const FeaturedCard = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-[686px] w-[450px] text-zinc-900 m-0 p-0 ">
        <div className="m-0 p-0">
          <img className="w-full h-[582px]" src='/img-3.png' alt="Featured Image" />
        </div>
        <div className="mt-6 font-medium text-xl ">
          <h3>Air Jordan 1</h3>
          <p 
          onClick={()=>navigate('/productDetail/66e9553e9aede541722a7d1a')}
          className="mt-4 cursor-pointer underline">Shop</p>
        </div>
      </div>
      <div className="h-[686px] w-[450px] text-zinc-900 m-0 p-0 ">
        <div className="m-0 p-0">
          <img className="w-full h-[582px]" src='img-2.png' alt="Featured Image" />
        </div>
        <div className="mt-6 font-medium text-xl ">
          <h3>Air Jordan 4 Retro</h3>
          <button
          onClick={()=>navigate('/productDetail/66e9553e9aede541722a7d19')}
          className="mt-4 cursor-pointer underline">Shop</button>
        </div>
      </div>
      <div className="h-[686px] w-[450px] text-zinc-900 m-0 p-0 ">
        <div className="m-0 p-0">
          <img className="w-full h-[582px]" src='img-4.png' alt="Featured Image" />
        </div>
        <div className="mt-6 font-medium text-xl ">
          <h3>Nike Air Force 1 Low EVO</h3>
          <button
          onClick={()=>navigate('/productDetail/66e9553e9aede541722a7d1b')}
           className="mt-4 cursor-pointer underline">Shop</button>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
