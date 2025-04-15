import React from "react";
import bannerImg from "../assets/banner.jpeg";
import Form from "./Form";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-end"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Form Overlay Right */}
      <div className="relative z-10 w-full md:w-1/2 pt-24 px-4 md:px-12">
        <Form />
      </div>
    </div>
  );
};

export default HeroSection;
