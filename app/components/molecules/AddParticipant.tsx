"use client";

import React, { useState } from "react";
import Typography from "../forms/Typography";
import backArrow from "@/public/icons/backArrow.svg";
import Image from "next/image";
import CustomButton from "../forms/CustomButton";
import { notificationSampleData } from "@/app/data";
import verfied from "@/public/icons/verifyBlue.svg";
import CustomCheckBox from "../forms/CustomCheckBox";
import SearchInput from "../SearchInput";

const AddParticipant = ({ setSelectedChatGroup }: any) => {
  const [showList, setShowList] = useState(true);
  const [checked, setchecked] = useState(false);
  return (
    <section>
      <div
        className="w-full bg-white pl-7 border
    border-grey_20 shadow-custom-combined py-3"
      >
        <div
          onClick={() => setSelectedChatGroup("jfdbjdfbhu")}
          className="flex items-center border border-grey_10 drop-shadow-7xl w-[69px]
          py-2 px-3 bg-secondary-btn
           rounded-3xl cursor-pointer"
        >
          <Image src={backArrow} alt="plus" className="w-5 h-4" />
          <Typography variant="subtitle3" className="text-grey_800">
            Back
          </Typography>
        </div>
      </div>

      {showList ? (
        <div className="bg-grey_20">
          <SearchInput ifBlur={false} />
          {notificationSampleData?.map(({ photo, name, tag }) => {
            return (
              <div className="flex items-center mx-4 justify-between border-b border-grey_200 py-4">
                <div className="flex items-center">
                  <Image
                    src={photo}
                    alt="sampleImage"
                    className="w-10 h-10 mr-2"
                  />

                  <section>
                    <div className="flex items-center">
                      <Typography variant="titleOne" className="text-grey_900">
                        {name}
                      </Typography>
                      <Image src={verfied} className="w-4 h-4" alt="verified" />
                    </div>
                    <Typography variant="p2" className="text-grey_400">
                      {tag}
                    </Typography>
                  </section>
                </div>
                <CustomCheckBox
                  checked={checked}
                  onChange={() => setchecked(!checked)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <Typography variant="subtitle3" className="text-grey_400 pt-[317px]">
            You do not have any participants yet
          </Typography>
          <CustomButton primaryButtonSize="xs" className="mt-6 px-3">
            Add participant
          </CustomButton>
        </div>
      )}
    </section>
  );
};

export default AddParticipant;
