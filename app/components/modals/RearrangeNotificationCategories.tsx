import React from "react";
import Typography from "../forms/Typography";
import closeIcon from "@/public/icons/closeIcon.svg";
import Image from "next/image";
import { notificationTabs } from "@/app/data";
import block from "@/public/icons/block.svg";
import CustomButton from "../forms/CustomButton";

const RearrangeNotificationCategories = ({ toggleRearrangeModal }: any) => {
  return (
    <div className="bg-modal-gradient shadow-triple rounded-2xl border-2 border-white z-50 w-[360px] px-4">
      <div className="flex items-center justify-between my-4">
        <Typography variant="titleOne" className="">
          Rearrange categories
        </Typography>
        <Image
          src={closeIcon}
          alt="closeicon"
          className="cursor-pointer"
          onClick={toggleRearrangeModal}
        />
      </div>

      {notificationTabs?.map(({ id, name }) => {
        return (
          <div key={id} className="flex items-center justify-between">
            <Typography variant="p2" className="py-3">
              {name}
            </Typography>
            <Image
              src={block}
              alt="block"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleRearrangeModal}
            />
          </div>
        );
      })}

      <div className="ml-[128px] flex items-center mt-8 mb-2">
        <CustomButton
          onClick={toggleRearrangeModal}
          variant="secondary"
          className="text-xs mr-6 w-[84px]"
        >
          Cancel
        </CustomButton>
        <CustomButton variant="primary" className="text-xs px-3 w-[84px]">
          Save Edit
        </CustomButton>
      </div>
    </div>
  );
};

export default RearrangeNotificationCategories;
