"use client";

import CustomButton from "@/app/components/forms/CustomButton";
import Typography from "@/app/components/forms/Typography";
import InterestModal from "@/app/components/modals/InterestModal";
import Modal from "@/app/components/modals/Modal";
import { interestData } from "@/app/data";
import Image from "next/image";
import leftArrow from "@/public/icons/arrowLeft.svg";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateShowOnMobile } from "@/app/lib/features/mobileView/settingMobileViewSlice";

const Preferences = () => {
  const dispatch = useDispatch();
  const [showInterestModal, setShowInterestModal] = useState(false);

  const toggleInterestModal = () => {
    setShowInterestModal(!showInterestModal);
  };

  const toggleView = () => {
    dispatch(updateShowOnMobile(false));
  };

  return (
    <div>
      <div
        className="w-full flex items-center justify-between bg-grey_20 py-3 px-4 h-14 border
     border-grey_20 shadow-custom-combined mb-2"
      >
        <div className="flex items-center">
          <Image
            src={leftArrow}
            alt="leftArrow"
            className="md:hidden"
            onClick={toggleView}
          />
          <Typography variant="subtitle1">Interest’s</Typography>
        </div>
        <CustomButton
          onClick={toggleInterestModal}
          className="px-4 cursor-pointer"
        >
          Update Interests
        </CustomButton>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 mt-6 mx-4">
        {interestData.map(({ id, image }) => {
          return (
            <div key={id} className="mb-4 mr-4">
              <Image src={image} alt="image" />
            </div>
          );
        })}
      </div>

      <Modal show={showInterestModal} toggleModal={toggleInterestModal}>
        <div className="p-4">
          <InterestModal toggleModal={toggleInterestModal} />
        </div>
      </Modal>
    </div>
  );
};

export default Preferences;
