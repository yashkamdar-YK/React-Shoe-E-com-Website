import React from "react";
import { Hero, OfferBanner, About, Features, Spotlight } from "../Components";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-full ">
        <Hero />
        <Features />
        <Spotlight />
        <About />
        <OfferBanner />
      </div>
    </>
  );
};

export default HomePage;

{
  /* <div className='flex gap-8 items-center justify-center'>
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        </div> */
}
