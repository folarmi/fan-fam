"use client";

import Image from "next/image";
import React from "react";
import Typography from "../forms/Typography";
import leftArrow from "@/public/icons/arrowLeft.svg";
import { useDispatch } from "react-redux";
import { updateShowOnMobile } from "@/app/lib/features/mobileView/settingMobileViewSlice";

type Prop = {
  moduleName: string;
};

const MobileBackButton = ({ moduleName }: Prop) => {
  const dispatch = useDispatch();

  const toggleView = () => {
    dispatch(updateShowOnMobile(false));
  };

  return (
    <div className="flex items-center h-full md:hidden cursor-pointer ">
      <Image
        src={leftArrow}
        alt="leftArrow"
        className=""
        onClick={toggleView}
      />
      <Typography variant="subtitle1" className="text-grey_800 pl-1">
        {moduleName}
      </Typography>
    </div>
  );
};

export default MobileBackButton;
