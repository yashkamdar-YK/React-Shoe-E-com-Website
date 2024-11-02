import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { Button } from './Style';

const OfferBanner = () => {
  return (
    <div className="w-full bg-[#ede734] sm:mt-16 md:mt-24 mb-4 sm:mb-6">
      <div className="container mx-auto px-4 py-8 sm:py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-adihapro font-extrabold tracking-wider m-0">
            JOIN SHOE4U AND GET 15% OFF
          </h1>
          <Button title="SIGN UP FOR FREE" className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
            <span className="mr-2"></span>
            <BsArrowRight className="text-lg sm:text-xl text-white" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OfferBanner