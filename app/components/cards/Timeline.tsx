import React from "react";
import blueVerifiedTick from "@/public/blueVerifiedTick.svg";
import ashMore from "@/public/icons/ashMore.svg";
import Image from "next/image";
import Typography from "../Typography";
import IconAndNumber from "../IconAndNumber";
import like from "@/public/icons/like.svg";
import comment from "@/public/icons/comment.svg";
import pay from "@/public/icons/pay.svg";

type TimelineProps = {
  avatar: string;
  profileName: string;
  handle: string;
  time: string;
  paragraphOne: string;
  paragraphTwo: string;
  timeLineImage: string;
};

const Timeline = ({
  avatar,
  profileName,
  handle,
  time,
  paragraphOne,
  paragraphTwo,
  timeLineImage,
}: TimelineProps) => {
  return (
    <div className=" bg-grey_10 pt-4 mb-2 drop-shadow-4xl">
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

            <p className="pt-[2px] font-normal text-sm text-grey_30 leading-5 pb-4">
              {paragraphOne}
            </p>

            <p className="font-normal text-sm text-grey_700 leading-5">
              {paragraphTwo}
            </p>
          </section>
          <Image src={ashMore} alt="default avatar" />
        </div>
      </section>

      <div className="w-full my-4">
        <Image
          src={timeLineImage}
          alt="timelineImage"
          className="w-full h-full"
        />
      </div>

      <div className="pb-4 pl-4 flex items-center">
        <IconAndNumber icon={like} number={52} />
        <IconAndNumber icon={comment} number={24} />
        <IconAndNumber icon={pay} />
      </div>
    </div>
  );
};

export default Timeline;
