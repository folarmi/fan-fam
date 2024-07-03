"use client";

import Image from "next/image";
import React, { useState } from "react";
import audioFile from "@/public/icons/audioFile.svg";

const AudioMedia = () => {
  const [potraitOrLandScape, setPotraitOrLandScape] = useState(true);

  const audioImages = [
    audioFile,
    audioFile,
    audioFile,
    audioFile,
    audioFile,
    audioFile,
    audioFile,
    audioFile,
    audioFile,
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {audioImages.map((src, index) => (
        <div
          key={index}
          //   className="bg-grey_500 w-[209px] h-[209px] flex items-center justify-center"
          className="bg-grey_500 h-[209px] flex items-center justify-center mr-[2px] mb-[2px]"
        >
          <Image
            src={src}
            alt={`Gallery ${index}`}
            className=""
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default AudioMedia;
