import React, { useEffect, useState } from "react";
import imageLeft from "../assets/test4.png";

// const imageList = [img1, img2, img3];
const imageList = [imageLeft, imageLeft, imageLeft];

const LeftImageSection = ({ altText = "Matrimony" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block w-full h-full rounded-3xl overflow-hidden">
      <img
        src={imageList[currentIndex]}
        alt={altText}
        className="w-full h-full object-cover rounded-3xl transition-all duration-1000 ease-in-out"
      />
    </div>
  );
};

export default LeftImageSection;
