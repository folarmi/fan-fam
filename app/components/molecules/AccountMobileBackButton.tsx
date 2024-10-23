"use client";

import Image from "next/image";
import React from "react";
import leftArrow from "@/public/icons/arrowLeft.svg";
import { useDispatch } from "react-redux";
import { updateAccountShowOnMobile } from "@/app/lib/features/mobileView/settingMobileViewSlice";

type Prop = {
  mobileText?: string | React.ReactNode;
  dispatchFunction?: Function;
};

const AccountMobileBackButton = ({
  mobileText,
  dispatchFunction = updateAccountShowOnMobile,
}: Prop) => {
  const dispatch = useDispatch();

  const toggleView = () => {
    dispatch(dispatchFunction(false));
  };

  return (
    <div className="ml-2 flex items-center h-full md:hidden cursor-pointer ">
      <Image
        src={leftArrow}
        alt="leftArrow"
        className=""
        onClick={toggleView}
      />
      {/* <div className="w-full"> */}
      {mobileText}
      {/* </div> */}
    </div>
  );
};

export { AccountMobileBackButton };
