"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Image from "next/image";
import Timeline from "@/app/components/cards/Timeline";
import defaultAvatar from "@/public/defaultAvatar.svg";
import timelineImage from "@/public/timelineImage.svg";
import timelineTwo from "@/public/timelineTwo.svg";
import plus from "@/public/icons/plus.svg";
import switchList from "@/public/icons/switchList.svg";
import Modal from "./modals/Modal";
import CreateFolder from "./cards/CreateFolder";

const Post = () => {
  const [isProfileTabActive, setIsProfileTabActive] = useState("All");
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
  const [toggleCreateFolderModal, setToggleCreateFolderModal] = useState(false);

  const toggleModal = () => {
    setToggleCreateFolderModal(!toggleCreateFolderModal);
  };

  return (
    <div>
      <div className={`my-4 flex items-center px-4 mr-[14px] justify-between `}>
        {profileTabs.map(({ id, name, number }) => {
          return (
            <div
              onClick={() => setIsProfileTabActive(name)}
              className={`flex items-center cursor-pointer px-[14px] py-[7px] rounded-3xl hover:bg-blue_200 ${
                isProfileTabActive === name ? "bg-blue_200" : "bg-white"
              }`}
              key={id}
            >
              <Typography variant="p2" className="pr-1 text-grey_500">
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
          className="flex items-center border border-grey_10 drop-shadow-7xl
          py-2 px-3 bg-secondary-btn
           rounded-3xl cursor-pointer"
        >
          <Typography variant="subtitle3">Create Folder</Typography>
          <Image src={plus} alt="plus" />
        </div>

        <Image src={switchList} alt="demo" />
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

      <Modal show={toggleCreateFolderModal} toggleModal={toggleModal}>
        <div className="p-4">
          <CreateFolder toggleModal={toggleModal} />
        </div>
      </Modal>
    </div>
  );
};

export default Post;
