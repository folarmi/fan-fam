"use client";

import Image from "next/image";
import React, { useState } from "react";
import Typography from "../forms/Typography";
import blueVerifiedTick from "@/public/blueVerifiedTick.svg";
import ashMore from "@/public/icons/ashMore.svg";
import defaultLiveAvatar from "@/public/defaultLiveAvatar.svg";
import graphIcon from "@/public/icons/graphIcon.svg";
import listIcon from "@/public/icons/listIcon.svg";
import { samplePollData } from "@/app/data";
import IconAndNumber from "../IconAndNumber";
import Like from "@/public/icons/like";
import Comment from "@/public/icons/comment";
import Pay from "@/public/icons/pay";
import sampleGraph from "@/public/sampleGraph.svg";

const AnsweredPoll = ({ isPollAnswered }: any) => {
  const [isGraph, setIsGraph] = useState(false);

  return (
    <>
      {isPollAnswered && (
        <>
          <div className=" px-4 bg-grey_20 my-2 shadow-chat-interface py-4">
            <section className="flex items-center">
              <Image src={defaultLiveAvatar} alt="default avatar" />

              <div className="flex justify-between w-full items-center">
                <section className="ml-2">
                  <section className="flex items-center justify-between w-full">
                    <Typography variant="titleTwo" className="pr-1">
                      Priscilia yummy
                    </Typography>
                    <Image src={blueVerifiedTick} alt="default avatar" />
                    <Typography variant="p2" className="px-[6px] text-grey_500">
                      @yummychill54
                    </Typography>
                    <Typography variant="p2" className="text-grey_500">
                      3 h ago
                    </Typography>
                  </section>
                </section>
                <Image
                  src={ashMore}
                  alt="default avatar"
                  // onClick={toggleModal}
                  className="cursor-pointer"
                />
                {/* {showModal && (
        <div className="flex flex-col absolute left-[62%] bottom-[73%] bg-modal-gradient shadow-triple w-[262px] rounded-2xl border-2 border-white z-50">
          {TimeLineModal}
        </div>
      )} */}
              </div>
            </section>

            <section className="ml-12">
              <div className="flex items-center justify-between mb-4">
                <Typography variant="p2" className="text-grey_700">
                  Hey guys! take part in my poll
                </Typography>

                <div className="flex items-center">
                  <Image
                    src={listIcon}
                    alt="listIcon"
                    className="mr-2 cursor-pointer"
                    onClick={() => setIsGraph(false)}
                  />
                  <Image
                    src={graphIcon}
                    alt="graphIcon"
                    className="cursor-pointer"
                    onClick={() => setIsGraph(true)}
                  />
                </div>
              </div>

              {!isGraph && (
                <>
                  {samplePollData?.map(({ id, name, percent }) => {
                    return (
                      <div
                        key={id}
                        className="flex items-center justify-between mb-[12px]"
                      >
                        <section className="flex items-center ">
                          <div className="h-2 w-2 bg-blue_500 rounded-full"></div>
                          <Typography
                            variant="p2"
                            className="text-grey_800 pl-2"
                          >
                            {name}
                          </Typography>
                        </section>

                        <Typography variant="p2" className="text-grey_800">
                          {percent}
                        </Typography>
                      </div>
                    );
                  })}

                  <div className="flex items-center">
                    <Typography variant="p2" className="text-grey_500">
                      10 votes
                    </Typography>
                    <div className="w-1 h-1 bg-grey_200 mx-1 rounded-full"></div>
                    <Typography variant="p2" className="text-grey_500">
                      4h 26minutes left
                    </Typography>
                  </div>
                </>
              )}

              {isGraph && (
                <Image src={sampleGraph} alt="sampleGraph" className="my-4" />
              )}
            </section>

            <div className="pl-4 flex items-center mt-4">
              <IconAndNumber Icon={Like} number={52} />
              <IconAndNumber Icon={Comment} number={24} />
              <IconAndNumber Icon={Pay} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AnsweredPoll;
