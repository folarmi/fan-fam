"use client";

import SearchInput from "@/app/components/SearchInput";
import React, { useState } from "react";
import suggestTwo from "@/public/suggestTwo.svg";
import Image from "next/image";
import IconAndNumber from "@/app/components/IconAndNumber";
import profilePicture from "@/public/profilePicture.svg";
import location from "@/public/icons/location.svg";
import circleStar from "@/public/icons/circleStar.svg";
import moreIcon from "@/public/icons/moreIcon.svg";
import Typography from "@/app/components/Typography";
import blueVerifiedTick from "@/public/blueVerifiedTick.svg";
import Timeline from "@/app/components/cards/Timeline";
import defaultAvatar from "@/public/defaultAvatar.svg";
import timelineImage from "@/public/timelineImage.svg";
import timelineTwo from "@/public/timelineTwo.svg";
import plus from "@/public/icons/plus.svg";
import switchList from "@/public/icons/switchList.svg";
import Modal from "@/app/components/Modal";
import CreateFolder from "@/app/components/cards/CreateFolder";
import Pictures from "@/public/icons/pictures";
import Videos from "@/public/icons/videos";
import Live from "@/public/icons/live";
import Like from "@/public/icons/like";
import ProfileLike from "@/public/icons/profileLike";
import CircleChat from "@/public/icons/circleChat";
import CirclePay from "@/public/icons/circlePay";
import copy from "@/public/copy.svg";
import { commentOptions } from "@/app/data";
// import timelineImage from "@/public/timelineImage.svg";

type ProfileProps = {
  ifPersonal: boolean;
};

const Profile = ({ ifPersonal = false }: ProfileProps) => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Post",
    },
    {
      id: 2,
      name: "Media",
    },
    {
      id: 3,
      name: "Replies",
    },
    {
      id: 2,
      name: "Likes",
    },
  ]);
  const [profileTabs, setProfileTabs] = useState([
    {
      id: 1,
      name: "All",
      number: "",
    },
    {
      id: 2,
      name: "Archive",
      number: "23",
    },
    {
      id: 3,
      name: "Best of 2023",
      number: "56",
    },
    {
      id: 3,
      name: "Best of 2024",
      number: "37",
    },
  ]);
  const [isActiveTab, setIsActiveTab] = useState("Post");
  const [isProfileTabActive, setIsProfileTabActive] = useState("Archive");
  const [toggleCreateFolderModal, setToggleCreateFolderModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  useState;

  const toggleModal = () => {
    setToggleCreateFolderModal(!toggleCreateFolderModal);
  };

  const toggleCommentModal = () => {
    setCommentModal(!commentModal);
  };

  return (
    <div>
      <SearchInput ifBlur={false} />
      <div className="w-full relative ">
        <Image src={suggestTwo} alt="demo" className="w-full" />
        <div className="flex items-center absolute top-3 pl-4">
          <IconAndNumber
            Icon={Pictures}
            number={24}
            numberColor="#ffffff"
            className="cursor-pointer"
          />
          <IconAndNumber Icon={Videos} number={56} numberColor="#ffffff" />
          <IconAndNumber Icon={Live} number={16} numberColor="#ffffff" />
          <IconAndNumber
            Icon={ProfileLike}
            number={847}
            numberColor="#ffffff"
          />
        </div>

        <section className="px-4 bg-grey_20 drop-shadow-4xl mb-2">
          <div className=" relative flex items-center">
            <div className="absolute -top-8">
              <Image src={profilePicture} alt="profilePicture" />
            </div>
            <div className="ml-auto flex items-center justify-between mt-6">
              <div className="flex items-center">
                <Image src={location} alt="demo" />
                <Typography className="text-grey_400 pl-1" variant="p3">
                  Nigeria
                </Typography>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="cursor-pointer" onClick={toggleCommentModal}>
                  <CircleChat className="cursor-pointer hover:fill-blue_200" />
                </div>

                {commentModal && (
                  <div className="flex flex-col absolute left-[55%] top-[100%] bg-modal-gradient shadow-triple w-[262px] rounded-2xl border-2 border-white z-50">
                    <div className="flex items-center justify-between py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6">
                      <Typography variant="p2" className="text-grey_700">
                        Copy link to profile
                      </Typography>
                      <Image src={copy} alt="copy" />
                    </div>
                    {commentOptions?.map(({ id, name }) => {
                      return (
                        <Typography
                          key={id}
                          variant="p2"
                          className="text-grey_700 py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6"
                        >
                          {name}
                        </Typography>
                      );
                    })}
                  </div>
                )}

                <CirclePay className="cursor-pointer hover:fill-blue_200" />
                <Image src={circleStar} alt="circleStar" />

                <div className="border border-blue_500 rounded-3xl py-2 px-3 drop-shadow-6xl bg-subscribe-gradient shadow-inner-white">
                  <Typography variant="subtitle3" className="text-blue_500">
                    Subscribe
                  </Typography>
                </div>

                <Image src={moreIcon} alt="horizontalMore" />
              </div>
            </div>
          </div>

          <section>
            <div className="flex items-center mt-4">
              <Typography
                variant="titleTwo"
                className="text-grey_800 font-bold pr-1"
              >
                Priscilia yummy
              </Typography>
              <Image src={blueVerifiedTick} alt="verify" />
            </div>

            <Typography variant="p2" className="text-grey_800 pt-[2px]">
              @yummychill54
            </Typography>

            <Typography variant="p2" className="text-grey_700 py-4">
              Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
              mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
              etra justo pretium sollic itudin digni ssim non solli citudin sit.
            </Typography>
          </section>
        </section>

        <div className="flex items-center justify-between bg-grey_20 border-b border-grey_40">
          {tabs.map(({ id, name }) => {
            return (
              <div
                key={id}
                className="cursor-pointer"
                onClick={() => setIsActiveTab(name)}
              >
                <Typography
                  variant="subtitle3"
                  className={`px-12 pt-3 pb-1 ${
                    isActiveTab === name
                      ? "text-grey_800 border-b-2 border-grey_800"
                      : "text-grey_500"
                  }`}
                >
                  {name}
                </Typography>
              </div>
            );
          })}
        </div>

        {ifPersonal && (
          <div
            className={`my-4 flex items-center px-4 mr-[14px] justify-between `}
          >
            {profileTabs.map(({ id, name, number }) => {
              return (
                <div
                  onClick={() => setIsProfileTabActive(name)}
                  className={`flex items-center cursor-pointer px-[14px] py-[7px] rounded-3xl hover:bg-blue_200 ${
                    isProfileTabActive === name ? "bg-blue_200" : "bg-white"
                  }`}
                  key={id}
                >
                  <Typography variant="p2" className="pr-1">
                    {name}
                  </Typography>
                  {number && (
                    <Typography
                      className={`${
                        isProfileTabActive === name
                          ? "text-grey_400"
                          : "text-grey_900"
                      }`}
                      variant="subtitle2"
                    >
                      {number}
                    </Typography>
                  )}
                </div>
              );
            })}

            <div
              onClick={toggleModal}
              className="flex items-center border border-grey_10 py-2 px-3 drop-shadow-7xl bg-create-folder rounded-3xl cursor-pointer"
            >
              <Typography variant="subtitle3">Create Folder</Typography>
              <Image src={plus} alt="plus" />
            </div>

            <Image src={switchList} alt="demo" />
          </div>
        )}

        <div className="relative">
          <Timeline
            profileName="Priscilia yummy"
            avatar={defaultAvatar}
            handle="@yummychill54 ."
            time="3 h ago"
            paragraphOne="Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
            paragraphTwo="Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
            timeLineImage={timelineImage}
            ifParagraph={true}
            ifIcon={false}
            bgColor="#fafafa"
            //   setShowMoreModal={setShowMoreModalTwo}
            //   showMoreModal={showMoreModalTwo}
          />
        </div>

        <div className="relative">
          <Timeline
            profileName="Priscilia yummy"
            avatar={defaultAvatar}
            handle="@yummychill54 ."
            time="3 h ago"
            paragraphOne="Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
            paragraphTwo="Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
            timeLineImage={timelineTwo}
            ifParagraph={true}
            bgColor="#fafafa"
            //   setShowMoreModal={setShowMoreModalTwo}
            //   showMoreModal={showMoreModalTwo}
          />
        </div>
      </div>

      <Modal show={toggleCreateFolderModal} toggleModal={toggleModal}>
        <div className="p-4">
          <CreateFolder toggleModal={toggleModal} />
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
