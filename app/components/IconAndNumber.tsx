import Image from "next/image";
import React from "react";
import Typography from "./Typography";

type IconAndNumberProp = {
  icon: string;
  number?: number;
};

const IconAndNumber = ({ icon, number }: IconAndNumberProp) => {
  return (
    <div className="flex items-center mr-4">
      <Image src={icon} alt="icon" />
      <Typography variant="p2" className="pl-1 text_grey_400">
        {number}
      </Typography>
    </div>
  );
};

export default IconAndNumber;
