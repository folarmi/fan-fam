"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import photoOne from "@/public/paradise.svg";
import imageOne from "@/public/imageOne.svg";
import imageTwo from "@/public/imageTwo.svg";
import imageThree from "@/public/imageThree.svg";
import imageFour from "@/public/imageFour.svg";
import headerOne from "@/public/headerOne.svg";
import headerTwo from "@/public/headerTwo.svg";
import headerThree from "@/public/headerThree.svg";
import headerFour from "@/public/headerFour.svg";
import headerFive from "@/public/headerFive.svg";

const images = [
  [headerOne, headerTwo, headerThree, headerFour, headerFive],
  [photoOne, imageOne, imageTwo, imageThree, imageFour],
  [photoOne, imageThree, imageTwo, imageThree, imageFour],
  [photoOne, imageOne, imageTwo, imageThree, imageFour],
  [photoOne, imageOne, imageTwo, photoOne, imageFour],
];

const PhotoFrame = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change set of images every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-96 h-96 overflow-hidden">
      <div className="absolute grid grid-cols-3 grid-rows-2 gap-2 w-full h-full">
        {images[currentSetIndex].map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="col-span-1 row-span-1 w-full h-full object-cover transition-opacity duration-[3500ms] ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] opacity-100"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoFrame;

// return (
//     <div className="relative w-96 h-96 border-4 border-gray-300">
//       {images.map((image, index) => (
//         <div className="flex" key={index}>
//           <Image
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className={`absolute bottom-0 right-0 w-24 h-24 transition-opacity duration-3000 ${
//               currentImageIndex === index ? "opacity-100" : "opacity-0"
//             }`}
//           />
//           <Image
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className={`absolute bottom-0 right-0 w-24 h-24 transition-opacity duration-3000 ${
//               currentImageIndex === index ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         </div>
//       ))}
//     </div>
//   );
