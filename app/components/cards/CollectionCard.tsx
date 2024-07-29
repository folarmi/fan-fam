"use client";

import Image from "next/image";
import React, { useState } from "react";
import Typography from "../forms/Typography";
import whiteVerticalIcon from "@/public/icons/whiteVerticalIcon.svg";
import ashVerifiedTick from "@/public/icons/ashVerifiedTick.svg";
import CircleChat from "@/public/icons/circleChatIcon.svg";
import CirclePay from "@/public/icons/circlePayIcon.svg";
import tinyArrow from "@/public/icons/tinyArrow.svg";
import SubscriptionButton from "../molecules/SubscriptionButton";
import ModalContent from "../modals/ModalContent";
import { collectionsOptions } from "@/app/data";
import Modal from "../modals/Modal";
import BlockUser from "./BlockUser";
import RestrictUser from "./RestrictUser";
import ReportUser from "./ReportUser";

type props = {
  displayImage: string;
  avatar: string;
  profileName: string;
  tag: string;
  ifSubscribe?: boolean;
  ifRenew?: boolean;
  ifSubscribedForFree?: boolean;
  ifSubscribedWithOption?: boolean;
  isOptionsShown?: boolean;
  setIsOptionsShown?: any;
  setBlockUserModal?: any;
  blockUserModal?: any;
  restrictUserModal?: any;
  setRestrictUserModal?: any;
  reportUserModal?: any;
  setReportUserModal?: any;
};

const CollectionCard = ({
  displayImage,
  avatar,
  profileName,
  tag,
  ifSubscribe,
  ifRenew,
  ifSubscribedForFree,
  ifSubscribedWithOption,
  isOptionsShown,
  setIsOptionsShown,
  setBlockUserModal,
  blockUserModal,
  restrictUserModal,
  setRestrictUserModal,
  reportUserModal,
  setReportUserModal,
}: props) => {
  const [showVerticalOptions, setShowVerticalOptions] = useState(false);
  const toggleState = () => {
    setIsOptionsShown(!isOptionsShown);
  };

  const toggleVerticalOptions = () => {
    setShowVerticalOptions(!showVerticalOptions);
  };

  const getModalValue = (name: string) => {
    if (name === "Block") {
      setShowVerticalOptions(false);
      setBlockUserModal(!blockUserModal);
    } else if (name === "Restrict") {
      setShowVerticalOptions(false);
      setRestrictUserModal(!restrictUserModal);
    } else if (name === "Report") {
      setShowVerticalOptions(false);
      setReportUserModal(!reportUserModal);
    }
  };

  const toggleBlockUserModal = () => {
    setBlockUserModal(!blockUserModal);
  };

  const toggleRestrictUserModal = () => {
    setRestrictUserModal(!restrictUserModal);
  };

  const toggleReportUserModal = () => {
    setReportUserModal(!reportUserModal);
  };

  return (
    <div className="relative rounded-lg overflow-hidden w-[292px] ml-4 mr-2 mb-4">
      <div className="relative h-[69px] w-[292px]">
        <Image
          src={displayImage}
          alt={`suggestionOne`}
          className="w-full h-full object-cover"
        />

        <section className="">
          <div
            onClick={toggleVerticalOptions}
            className="absolute top-2 right-3 cursor-pointer"
          >
            <Image
              src={whiteVerticalIcon}
              alt={`whiteVerticalIcon`}
              className="w-6 h-6"
            />
          </div>
          {showVerticalOptions && (
            <div className="flex flex-col absolute bg-modal-gradient shadow-triple w-full top-[70%] right-0  rounded-2xl border-2 border-white z-50">
              <ModalContent
                content={collectionsOptions}
                onClick={getModalValue}
              />
            </div>
          )}
        </section>
      </div>
      <section className="border border-grey_10">
        <div className="relative flex items-center">
          <div className="absolute bottom-[10%] left-4">
            <Image src={avatar} alt={`avatar`} className="w-14 h-14" />
          </div>
          <div className="ml-20 mt-1">
            <section className="flex items-center mb-[2px]">
              <Typography variant="titleTwo" className="text-grey_800 pr-1">
                {profileName}
              </Typography>
              <Image src={ashVerifiedTick} alt="ashVerifiedTick" />
            </section>
            <Typography variant="p3" className="text-grey_500">
              {tag}
            </Typography>
          </div>
        </div>

        <div className="my-4 mx-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src={CircleChat} alt={`item`} className="w-8 h-8 mr-4" />
            <Image src={CirclePay} alt={`item`} className="w-8 h-8" />
          </div>

          {ifSubscribe && (
            <div className="cursor-pointer border border-blue_500 rounded-3xl py-2 px-3 drop-shadow-6xl bg-subscribe-gradient shadow-inner-white">
              <Typography variant="subtitle3" className="text-blue_500">
                Subscribe
              </Typography>
            </div>
          )}
        </div>

        {ifRenew && (
          <SubscriptionButton
            textOne="RENEW"
            textTwo="$15 per month"
            className="mb-4 mx-4"
          />
        )}

        {ifSubscribedForFree && (
          <div className="cursor-pointer border border-blue_500 rounded-3xl py-2 px-3 drop-shadow-6xl bg-subscribe-gradient shadow-inner-white mx-4 mb-4">
            <Typography
              variant="subtitle3"
              className="text-blue_500 text-center"
            >
              Subscribed for free
            </Typography>
          </div>
        )}
        {ifSubscribedWithOption && (
          <section>
            <SubscriptionButton
              textOne="RENEW"
              textTwo=" $15 per month"
              className="mb-4 mx-4"
            />

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <div
                className="flex items-center mx-2 cursor-pointer"
                onClick={toggleState}
              >
                <Typography
                  variant="subtitle3"
                  className="text-xs text-grey_400"
                >
                  Show discounted options
                </Typography>
                <Image src={tinyArrow} alt="tinyArrow" className="h-4 w-4" />
              </div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {isOptionsShown && (
              <div>
                <SubscriptionButton
                  textOne="1 month"
                  textTwo="$15"
                  className="mb-4 mx-4"
                />
                <SubscriptionButton
                  textOne="2 months"
                  textTwo="$100"
                  className="mb-4 mx-4"
                />
                <SubscriptionButton
                  textOne="12 months"
                  textTwo="$150"
                  className="mb-4 mx-4"
                />
              </div>
            )}
          </section>
        )}

        {
          <Modal show={blockUserModal} toggleModal={toggleBlockUserModal}>
            <div className="p-4">
              <BlockUser toggleModal={toggleBlockUserModal} />
            </div>
          </Modal>
        }
        {
          <Modal show={restrictUserModal} toggleModal={toggleRestrictUserModal}>
            <div className="p-4">
              <RestrictUser toggleModal={toggleRestrictUserModal} />
            </div>
          </Modal>
        }
        {
          <Modal show={reportUserModal} toggleModal={toggleReportUserModal}>
            <div className="p-4">
              <ReportUser toggleModal={toggleReportUserModal} />
            </div>
          </Modal>
        }
      </section>
    </div>
  );
};

export default CollectionCard;
