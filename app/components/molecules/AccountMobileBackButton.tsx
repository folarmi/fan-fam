"use client";

import Image from "next/image";
import React from "react";
import leftArrow from "@/public/icons/arrowLeft.svg";
import { useDispatch } from "react-redux";
import { updateAccountShowOnMobile } from "@/app/lib/features/mobileView/settingMobileViewSlice";

const AccountMobileBackButton = () => {
  const dispatch = useDispatch();

  const toggleView = () => {
    dispatch(updateAccountShowOnMobile(false));
  };

  return (
    <div className="ml-2 flex items-center h-full md:hidden cursor-pointer ">
      <Image
        src={leftArrow}
        alt="leftArrow"
        className=""
        onClick={toggleView}
      />
    </div>
  );
};

export { AccountMobileBackButton };
