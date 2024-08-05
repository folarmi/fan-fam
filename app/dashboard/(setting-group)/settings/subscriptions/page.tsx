"use client";

import AccountBackButton from "@/app/components/forms/AccountBackButton";
import CustomButton from "@/app/components/forms/CustomButton";
import CustomInput from "@/app/components/forms/CustomInput";
import Typography from "@/app/components/forms/Typography";
import FreeTrialLink from "@/app/components/modals/FreeTrialLink";
import Modal from "@/app/components/modals/Modal";
import PromotionalCampaign from "@/app/components/modals/PromotionalCampaign";
import Tag from "@/app/components/molecules/Tag";
import {
  happyPeopleFeed,
  limitedOfferData,
  subscriptionSettings,
} from "@/app/data";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Subscriptions = () => {
  const { control } = useForm();
  const [isPromotionalCampaign, setIsPromotionalCampaign] = useState(false);
  const [isFreeTrialLink, setIsFreeTrialLink] = useState(false);
  const [isPromotion, setIsPromotion] = useState(false);
  const [isFreeTrial, setIsFreeTrial] = useState(true);

  const toggleModal = (buttonText: string) => {
    if (buttonText === "Start promotion campaign")
      setIsPromotionalCampaign(!isPromotionalCampaign);
    else if (buttonText === "Create new free trial link")
      setIsFreeTrialLink(!isFreeTrialLink);
  };

  return (
    <div>
      <AccountBackButton showBack={false} />

      <section className="mt-4 ml-4">
        <CustomInput
          label="Price per month"
          name="phoneNumber"
          control={control}
          rules={{
            required: "Price per month is required",
          }}
        />

        <div className="flex items-center justify-between -mt-3">
          <Typography variant="p3" className="text-grey_500">
            Minimum $5 or free
          </Typography>

          <div className="flex items-center">
            <CustomButton
              //   onClick={toggleModal}
              variant="secondary"
              className="text-xs mr-4 w-[84px]"
            >
              Cancel
            </CustomButton>
            <CustomButton variant="primary" className="text-xs px-3 w-[84px]">
              Save
            </CustomButton>
          </div>
        </div>
      </section>

      <div className="ml-4">
        {subscriptionSettings?.map(({ id, buttonText, desc, name }) => {
          return (
            <div key={id} className="mt-6">
              <Typography variant="subtitle2" className="text-grey_800">
                {name}
              </Typography>
              <Typography variant="p2" className="text-grey_500 pb-[2px]">
                {desc}
              </Typography>
              <div className="flex ml-auto justify-end w-1/2 mt-2">
                <CustomButton
                  onClick={() => toggleModal(buttonText)}
                  variant="secondary"
                  className="text-xs w-fit cursor-pointer"
                >
                  {buttonText}
                </CustomButton>
              </div>

              {id === 1 && isPromotion && (
                <div className="">
                  <Typography variant="titleTwo" className="text-grey_800 py-4">
                    Limited offer for 7 days
                  </Typography>

                  <div className="flex items-center mb-4">
                    <Tag text="Free trial" />
                    <Tag text="New subscribers only" />
                  </div>

                  {limitedOfferData?.map(({ id, date, name }) => {
                    return (
                      <div
                        key={id}
                        className="flex items-center justify-between border-b border-grey_10 py-2"
                      >
                        <Typography variant="p2" className="text-grey_500">
                          {name}
                        </Typography>
                        <Typography variant="p2" className="text-grey_800">
                          {date}
                        </Typography>
                      </div>
                    );
                  })}

                  <div className="flex items-center justify-end mt-8 ml-auto">
                    <CustomButton
                      //   onClick={toggleModal}
                      onClick={() => setIsPromotion(false)}
                      variant="secondary"
                      className="text-xs mr-4 w-fit"
                    >
                      Stop promotion
                    </CustomButton>
                    <CustomButton
                      variant="primary"
                      className="text-xs px-3 w-fit"
                    >
                      Copy link to profile
                    </CustomButton>
                  </div>
                </div>
              )}

              {id === 3 && isFreeTrial && (
                <div className="">
                  <Typography variant="titleTwo" className="text-grey_800 py-4">
                    Happy people ( 2 days free trial )
                  </Typography>

                  <div className="flex items-center mb-4">
                    <Tag text="Free trial" />
                    <Tag text="New subscribers only" />
                  </div>

                  {happyPeopleFeed?.map(({ id, date, name }) => {
                    return (
                      <div
                        key={id}
                        className="flex items-center justify-between border-b border-grey_10 py-2"
                      >
                        <Typography variant="p2" className="text-grey_500">
                          {name}
                        </Typography>
                        <Typography variant="p2" className="text-grey_800">
                          {date}
                        </Typography>
                      </div>
                    );
                  })}

                  <div className="flex items-center justify-end my-8 ml-auto">
                    <CustomButton
                      onClick={() => setIsFreeTrial(false)}
                      variant="secondary"
                      className="text-xs mr-4 w-fit"
                    >
                      Delete
                    </CustomButton>
                    <CustomButton
                      variant="primary"
                      className="text-xs px-3 w-fit"
                    >
                      Copy link
                    </CustomButton>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Modal
        show={isPromotionalCampaign}
        toggleModal={() => toggleModal("Start promotion campaign")}
      >
        <PromotionalCampaign toggleModal={toggleModal} />
      </Modal>

      <Modal
        show={isFreeTrialLink}
        toggleModal={() => toggleModal("Create new free trial link")}
      >
        <FreeTrialLink toggleModal={toggleModal} />
      </Modal>
    </div>
  );
};

export default Subscriptions;
