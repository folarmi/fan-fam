"use client";
import CustomButton from "@/app/components/forms/CustomButton";
import Typography from "@/app/components/forms/Typography";
import InterestModal from "@/app/components/modals/InterestModal";
import Modal from "@/app/components/modals/Modal";
import { interestData } from "@/app/data";
import Image from "next/image";
import React, { useState } from "react";

const Preferences = () => {
  const [showInterestModal, setShowInterestModal] = useState(false);

  const toggleInterestModal = () => {
    setShowInterestModal(!showInterestModal);
  };

  return (
    <>
      <div
        className="w-full flex items-center justify-between bg-grey_20 py-3 px-4 h-14 border
     border-grey_20 shadow-custom-combined mb-2"
      >
        <Typography variant="subtitle1">Interest’s</Typography>
        <CustomButton
          onClick={toggleInterestModal}
          className="px-4 cursor-pointer"
        >
          Update Interests
        </CustomButton>
      </div>
      <div className="grid grid-cols-5 mt-6 mx-4">
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
    </>
  );
};

export default Preferences;
