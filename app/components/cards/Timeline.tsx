"use client";

import React from "react";
import blueVerifiedTick from "@/public/blueVerifiedTick.svg";
import ashMore from "@/public/icons/ashMore.svg";
import Image from "next/image";
import Typography from "../Typography";
import IconAndNumber from "../IconAndNumber";
// import Modal from "../Modal";
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
  showModal?: any;
  setShowModal?: any;
  ifIcon?: boolean;
  bgColor?: string;
  TimeLineModal?: any;
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
  setShowModal,
  showModal,
  ifIcon = true,
  bgColor = "#FAFAFA",
  TimeLineModal,
}: TimelineProps) => {
  const toggleModal = () => {
    setShowModal(!showModal);
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
              <Typography variant="p2" className="px-[6px] text-grey_500">
                {handle}
              </Typography>
              <Typography variant="p2" className="text-grey_500">
                {time}
              </Typography>
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
          {showModal && (
            <div className="flex flex-col absolute left-[62%] bottom-[78%] bg-modal-gradient shadow-triple w-[262px] rounded-2xl border-2 border-white z-50">
              {TimeLineModal}
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
