"use client";

import React, { useState } from "react";
import blueVerifiedTick from "@/public/blueVerifiedTick.svg";
import ashMore from "@/public/icons/ashMore.svg";
import Image from "next/image";
import Typography from "../Typography";
import IconAndNumber from "../IconAndNumber";
// import Modal from "../Modal";
import copy from "@/public/copy.svg";
import Like from "@/public/icons/like";
import Comment from "@/public/icons/comment";
import Pay from "@/public/icons/pay";

type TimelineProps = {
  avatar: string;
  profileName: string;
  handle: string;
  time: string;
  paragraphOne?: string;
  paragraphTwo?: string;
  timeLineImage: string;
  ifParagraph?: boolean;
  showMoreModal?: any;
  setShowMoreModal?: any;
  ifIcon?: boolean;
  bgColor?: string;
};

const Timeline = ({
  avatar,
  profileName,
  handle,
  time,
  paragraphOne,
  paragraphTwo,
  timeLineImage,
  ifParagraph,
  setShowMoreModal,
  showMoreModal,
  ifIcon = true,
  bgColor = "#ECEEFB",
}: TimelineProps) => {
  const toggleModal = () => {
    setShowMoreModal(!showMoreModal);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="pt-4 mb-2 drop-shadow-4xl"
    >
      <section className="flex items-start px-4">
        <Image src={avatar} alt="default avatar" />

        <div className="flex justify-between w-full items-start">
          <section className="ml-2">
            <section className="flex items-center">
              <Typography variant="titleTwo" className="pr-1">
                {profileName}
              </Typography>
              <Image src={blueVerifiedTick} alt="default avatar" />
              <Typography variant="p2" className="px-[6px]">
                {handle}
              </Typography>
              <Typography variant="p2">{time}</Typography>
            </section>

            {ifParagraph && (
              <>
                {" "}
                <p className="pt-[2px] font-normal text-sm text-grey_30 leading-5 pb-4">
                  {paragraphOne}
                </p>
                <p className="font-normal text-sm text-grey_700 leading-5">
                  {paragraphTwo}
                </p>
              </>
            )}
          </section>
          <Image
            src={ashMore}
            alt="default avatar"
            onClick={toggleModal}
            className="cursor-pointer"
          />
          {showMoreModal && (
            <div className="flex flex-col absolute left-[62%] bottom-[78%] bg-modal-gradient shadow-triple w-[262px] rounded-2xl border-2 border-white z-50">
              <div className="flex items-center justify-between py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6">
                <Typography variant="p2" className="text-grey_700">
                  Copy link to post
                </Typography>
                <Image src={copy} alt="copy" />
              </div>
              <Typography
                variant="p2"
                className="text-grey_700 py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6"
              >
                Add Bookmark
              </Typography>
              <Typography
                variant="p2"
                className="text-grey_700 py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6"
              >
                Repost
              </Typography>
            </div>
          )}
        </div>
      </section>

      <div className="w-full my-4">
        <Image
          src={timeLineImage}
          alt="timelineImage"
          className="w-full h-full"
        />
      </div>

      {ifIcon && (
        <div className="pb-4 pl-4 flex items-center">
          <IconAndNumber Icon={Like} number={52} />
          <IconAndNumber Icon={Comment} number={24} />
          <IconAndNumber Icon={Pay} />
        </div>
      )}
    </div>
  );
};

export default Timeline;
