/* eslint-disable react/jsx-key */
import Image from "next/image";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
// import imageOne from "@/public/imageOne.svg";
// import imageTwo from "@/public/imageTwo.svg";
// import imageThree from "@/public/imageThree.svg";
// import imageFour from "@/public/imageFour.svg";
// import Suggestion from "./cards/Suggestion";
import suggestionOne from "@/public/suggestionOne.svg";
import suggestionFour from "@/public/suggestionFour.svg";
import modelOne from "@/public/modelOne.svg";
import suggestionFive from "@/public/suggestionFive.svg";
import suggestTwo from "@/public/suggestTwo.svg";
import horizontalMore from "@/public/icons/horizontalMore.svg";
import Typography from "./forms/Typography";
import verify from "@/public/icons/verify.svg";

const items = [
  {
    img: suggestionOne,
    isLive: true,
  },
  {
    img: modelOne,
    isLive: true,
  },
  {
    img: suggestTwo,
    isLive: false,
  },
  {
    img: suggestionFive,
    isLive: true,
  },
  {
    img: suggestionFour,
    isLive: false,
  },
  {
    img: modelOne,
    isLive: true,
  },
  {
    img: suggestTwo,
    isLive: true,
  },
  {
    img: suggestionOne,
    isLive: false,
  },
  {
    img: suggestionFour,
    isLive: true,
  },
  {
    img: suggestionFive,
    isLive: false,
  },
  {
    img: suggestionOne,
    isLive: true,
  },
  {
    img: modelOne,
    isLive: true,
  },
  {
    img: suggestTwo,
    isLive: false,
  },
  {
    img: suggestionFive,
    isLive: true,
  },
  {
    img: suggestionFour,
    isLive: false,
  },
];

const VerticalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? items.length - 5 : currentIndex - 5;
    setCurrentIndex(newIndex < 0 ? 0 : newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex >= items.length - 5;
    const newIndex = isLastItem ? 0 : currentIndex + 5;
    setCurrentIndex(newIndex >= items.length ? items.length - 5 : newIndex);
  };

  const goToItem = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex">
      <div className="relative rounded-lg mb-3 overflow-hidden w-4/5 flex flex-col space-y-4">
        {items.slice(currentIndex, currentIndex + 5).map((item, index) => (
          <div key={index} className="relative rounded-lg mb-3 overflow-hidden">
            <Image
              src={item.img}
              alt={`item-${index}`}
              className="w-full h-auto"
            />

            <div className="absolute top-0 right-3 z-10">
              <Image src={horizontalMore} alt="horizontalMore" />
            </div>

            <div className="bg-custom-gradient absolute w-full px-4 py-[11px] bottom-0 z-20">
              <div className="flex items-center">
                <Typography variant="titleTwo" className="text-white pr-1">
                  Priscilia yummy
                </Typography>
                <Image src={verify} alt="verify" />
              </div>

              <div className="flex items-center">
                <Typography variant="p2" className="text-white pt-[2px]">
                  @yummychill54
                </Typography>
                {item.isLive && (
                  <div className="flex items-center ml-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                    <Typography className="text-red-500" variant="p3">
                      Live
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center justify-center space-y-2 w-1/5">
        <button onClick={goToPrevious} className="text-gray-600">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0L4 4h8L8 0zm0 16l4-4H4l4 4z" fill="currentColor" />
          </svg>
        </button>
        {Array.from({ length: Math.ceil(items.length / 4) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToItem(index * 4)}
            className={`w-2 h-2 rounded-full ${
              currentIndex >= index * 4 && currentIndex < index * 4 + 4
                ? "bg-blue-500"
                : "bg-gray-300"
            }`}
          ></button>
        ))}
        <button onClick={goToNext} className="text-gray-600">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0l4 4H4L8 0zm0 16l-4-4h8l-4 4z" fill="currentColor" />
          </svg>
        </button>{" "}
      </div>
    </div>
  );
};

export default VerticalCarousel;
