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
// import VerticalCarousel from "../components/VerticalCarousel";

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
    <>
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
      {/* <VerticalCarousel /> */}
    </>
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

/* eslint-disable react/jsx-key */
// import Image from "next/image";
// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";
// import imageOne from "@/public/imageOne.svg";
// import imageTwo from "@/public/imageTwo.svg";
// import imageThree from "@/public/imageThree.svg";
// import imageFour from "@/public/imageFour.svg";
// import Suggestion from "./cards/Suggestion";
// import suggestionOne from "@/public/suggestionOne.svg";
// import suggestTwo from "@/public/suggestTwo.svg";
// import horizontalMore from "@/public/icons/horizontalMore.svg";
// import Typography from "./Typography";
// import verify from "@/public/icons/verify.svg";

// const items = [
//   {
//     img: suggestionOne,
//     isLive: true,
//   },
//   {
//     img: suggestTwo,
//     isLive: false,
//   },
//   {
//     img: suggestionOne,
//     isLive: true,
//   },
//   {
//     img: suggestTwo,
//     isLive: false,
//   },
//   {
//     img: suggestTwo,
//     isLive: false,
//   },
//   {
//     img: suggestionOne,
//     isLive: true,
//   },
//   {
//     img: suggestTwo,
//     isLive: false,
//   },
// ];

// const VerticalCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstItem = currentIndex === 0;
//     const newIndex = isFirstItem ? items.length - 4 : currentIndex - 4;
//     setCurrentIndex(newIndex < 0 ? 0 : newIndex);
//   };

//   const goToNext = () => {
//     const isLastItem = currentIndex >= items.length - 4;
//     const newIndex = isLastItem ? 0 : currentIndex + 4;
//     setCurrentIndex(newIndex >= items.length ? items.length - 4 : newIndex);
//   };

//   const goToItem = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="flex">
//       <div className="relative rounded-lg mb-3 overflow-hidden w-4/5 grid grid-cols-2 gap-4">
//         {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
//           <div key={index} className="relative rounded-lg mb-3 overflow-hidden">
//             <Image
//               src={item.img}
//               alt={`item-${index}`}
//               className="w-full h-auto"
//             />

//             <div className="absolute top-3 right-3 z-10">
//               <Image src={horizontalMore} alt="horizontalMore" />
//             </div>

//             <div className="bg-custom-gradient absolute bottom-0 w-full p-4 z-20">
//               <div className="flex items-center">
//                 <Typography variant="titleTwo" className="text-white pr-1">
//                   Priscilia yummy
//                 </Typography>
//                 <Image src={verify} alt="verify" />
//               </div>

//               <div className="flex items-center">
//                 <Typography variant="p2" className="text-white pt-[2px]">
//                   @yummychill54
//                 </Typography>
//                 {item.isLive && (
//                   <div className="flex items-center ml-2">
//                     <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
//                     <Typography className="text-red-500" variant="p3">
//                       Live
//                     </Typography>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col items-center justify-center space-y-2 w-1/5">
//         <button onClick={goToPrevious} className="text-gray-600">
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M8 0L4 4h8L8 0zm0 16l4-4H4l4 4z" fill="currentColor" />
//           </svg>
//         </button>
//         {Array.from({ length: Math.ceil(items.length / 4) }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToItem(index * 4)}
//             className={`w-2 h-2 rounded-full ${
//               currentIndex >= index * 4 && currentIndex < index * 4 + 4
//                 ? "bg-blue-500"
//                 : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//         <button onClick={goToNext} className="text-gray-600">
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M8 0l4 4H4L8 0zm0 16l-4-4h8l-4 4z" fill="currentColor" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VerticalCarousel;
