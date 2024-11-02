import React from "react";
import vdo from "../assets/vdo.mp4";
import { Button } from "./Style/index";
// import { useFirebaseContext } from "../Context/Firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Hero = () => {
  // const { isLoggedIn } = useFirebaseContext();
  // const navigate = useNavigate();

  // const handleShopNow = () => {
  // if (!isLoggedIn) {
  // navigate("/login"); // Redirect to login if not logged in
  // } else {
  // navigate("/products"); // Redirect to products if logged in
  // }
  // };

  return (
    <section className="hero container bg-[#ecede2] mx-auto px-4 py-8 relative overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Text and Button */}
        <div className="w-full lg:w-1/2 sm:ml-8 space-y-4 lg:text-left z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">YEEZY</h2>
          <p className="text-lg lg:text-xl pb-5 mb-6 tracking-wide leading-relaxed">
            Keep checking back to see if the one you've been waiting for is
            coming to your country. Availability varies by region.
          </p>
          <NavLink to={"/products"}>
            <Button>SHOP NOW</Button>
          </NavLink>
        </div>

        {/* Video */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <video
              src={vdo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
