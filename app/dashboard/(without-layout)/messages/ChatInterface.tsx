"use client";

import Image from "next/image";
import React, { useState } from "react";
import defaultAvatar from "@/public/defaultAvatar.svg";
import verifyBlue from "@/public/icons/verifyBlue.svg";
import moreIcon from "@/public/icons/moreIcon.svg";
import realNotification from "@/public/icons/realNotification.svg";
import star from "@/public/icons/star.svg";
import pin from "@/public/icons/pin.svg";
// import searchIcon from "@/public/icons/searchIcon.svg";
import timelineImage from "@/public/timelineImage.svg";
import CommentBox from "@/app/components/CommentBox";
import Typography from "@/app/components/forms/Typography";

const ChatInterface = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section className="mt-8 w-full pr-[88px] pl-4">
        <div className="flex items-center bg-white drop-shadow-4xl">
          <Image src={defaultAvatar} alt="demo" className="w-10 h-10" />

          <div className="ml-2">
            <div className="flex items-center mb-1">
              <Typography variant="titleTwo" className="text-grey_900">
                Priscilia yummy
              </Typography>

              <Image
                src={verifyBlue}
                alt="demo"
                className="ml-[4px] mr-2 h-4 w-4"
              />

              <Typography variant="p2" className="text-grey_400">
                @Timmy88
              </Typography>
              <div className="w-[2px] h-[2px] bg-grey_300 mx-[6px]"></div>
            </div>
          </div>

          <div className="ml-auto cursor-pointer" onClick={toggleModal}>
            <Image src={moreIcon} alt="demo" className="w-6 h-6" />
          </div>

          {showModal && (
            <div className="flex flex-col absolute left-[75%] bottom-[77%] bg-modal-gradient shadow-triple w-[262px] rounded-2xl border-2 border-white z-50">
              <div className="flex items-center justify-between py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6">
                <Typography variant="p2" className="text-grey_700">
                  Pin message
                </Typography>
              </div>
              <Typography
                variant="p2"
                className="text-grey_700 py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6"
              >
                Mute message
              </Typography>
              <Typography
                variant="p2"
                className="text-grey_700 py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6"
              >
                Delete user
              </Typography>
            </div>
          )}
        </div>

        <div className="flex items-center mt-3 border-b border-grey_10 pb-6">
          <div className="flex gap-x-4 items-center">
            <Typography variant="p2" className="pl-10">
              3h ago
            </Typography>

            <Image src={star} alt="demo" className="w-5 h-5" />
            <Image src={realNotification} alt="demo" className="w-5 h-5" />
            <Image src={pin} alt="demo" className="w-5 h-5" />

            <Typography variant="subtitle2" className="text-primary">
              Gallery
            </Typography>
          </div>

          {/* <div className="flex items-center ml-auto border border_grey_60 bg-white">
          <Image src={searchIcon} alt="search icon" className="pr-1" />
          <input
            className="bg-white drop-shadow-4xl outline-none text-black"
            placeholder="Search.."
          />
        </div> */}
          <div className="flex ml-auto">
            <div className="relative w-[212px]">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-lg shadow-xl focus:outline-none"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.5 9.65a7.5 7.5 0 010 10.6z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <section className="my-3 chat-section">
          <Typography variant="p3" className="text-center text-grey_300">
            May 18
          </Typography>

          <section>
            <div className="flex items-center">
              <Image
                src={defaultAvatar}
                alt="defaultAvatar"
                className="h-8 w-8"
              />
              <div className="bg-blue_100 p-2 w-full ml-4">
                <Typography className="text-grey_700" variant="p2">
                  Hey! Jones, how are you doing
                </Typography>
              </div>
            </div>

            <Image src={timelineImage} alt="timelineImage" className="mt-3" />

            <div className="flex items-center mt-6">
              <div className="bg-green_10 p-2 w-full mr-4">
                <Typography className="text-grey_700" variant="p2">
                  Hello
                </Typography>
              </div>

              <Image
                src={defaultAvatar}
                alt="defaultAvatar"
                className="h-8 w-8"
              />
            </div>

            <div className="flex items-center mt-6">
              <Image
                src={defaultAvatar}
                alt="defaultAvatar"
                className="h-8 w-8 mr-4"
              />
              <div className="">
                <Image
                  src={timelineImage}
                  alt="timelineImage"
                  className="mt-3"
                />
                <div className="bg-blue_100 p-2 w-full">
                  <Typography className="text-grey_700" variant="p2">
                    Check out this!
                  </Typography>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <div className="bg-green_10 p-2 w-1/2 mr-4 ml-auto">
                <Typography className="text-grey_700" variant="p2">
                  Hello
                </Typography>
                <Typography className="text-grey_700" variant="p2">
                  How are you doing today
                </Typography>
              </div>

              <Image
                src={defaultAvatar}
                alt="defaultAvatar"
                className="h-8 w-8"
              />
            </div>
          </section>
        </section>
      </section>

      <div className="w-full mt-7">
        <CommentBox ifPoll={false} ifRecord={false} />
      </div>
    </>
  );
};

export default ChatInterface;
