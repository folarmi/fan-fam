import Image from "next/image";
import React from "react";
import Typography from "../forms/Typography";
import warning from "@/public/icons/warning.svg";
import rightBlueArrow from "@/public/icons/rightBlueArrow.svg";

const BankingInformation = () => {
  return (
    <div className="flex items-center border-b border-grey_10  relative">
      <div className="bg-blue_200 w-6 h-14 rounded-tl-md"></div>
      <Image src={warning} alt="warning" className="w-4 h-4 absolute left-4" />
      <Typography variant="p2" className="text-gray-900 py-[10px] pl-3">
        Please complete filling out your{" "}
        <span className="text-blue_500">Banking Information</span>
      </Typography>
      <Image
        src={rightBlueArrow}
        alt="rightBlueArrow"
        className="w-[14px] h-[14px]"
      />
    </div>
  );
};

export default BankingInformation;
