import React from "react";
import activeFire from "@/public/icons/activeFire.svg";
import Image from "next/image";
import Typography from "../forms/Typography";
import { sampleStreakData } from "@/app/data";

const StreakModal = ({ toggleModal }: any) => {
  return (
    <div
      onClick={toggleModal}
      className="bg-white rounded-lg relative w-[294px] cursor-pointer"
    >
      <div className="flex items-center border-b border-grey_10 mb-4">
        <div className="bg-blue_200 w-6 h-14 rounded-tl-md"></div>
        <Image
          src={activeFire}
          alt="activeFire"
          className="w-6 h-6 absolute left-3"
        />
        <Typography variant="p2" className="w-[170px] pl-2">
          Take action each day so your streak won't reset!
        </Typography>
      </div>

      <div className="pb-4">
        {sampleStreakData?.map(({ id, image, name }) => {
          return (
            <div key={id} className="flex items-center px-4 mb-4">
              <Image src={image} alt="image" className="w-4 h-4" />
              <Typography variant="p2" className="text-grey_400 pl-2">
                {name}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StreakModal;
