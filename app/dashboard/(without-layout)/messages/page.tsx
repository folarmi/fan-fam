"use client";

// import SearchInput from "@/app/components/SearchInput";
import Image from "next/image";
import React, { useState } from "react";
import plus from "@/public/icons/plus.svg";
import { notificationSampleData, sampleChatGroups } from "@/app/data";
import verifyBlue from "@/public/icons/verifyBlue.svg";
import horizontalMore from "@/public/icons/ashHorizontalMore.svg";
import ChatInterface from "./ChatInterface";
import Typography from "@/app/components/forms/Typography";
import searchIcon from "@/public/icons/searchIconTwo.svg";
import writeMessage from "@/public/icons/writeMessage.svg";
import rightAshArrow from "@/public/icons/rightAshArrow.svg";
import Modal from "@/app/components/modals/Modal";
import CreateChatGroup from "@/app/components/modals/CreateChatGroup";
import GroupChatInterface from "./GroupChatInterface";

const Messages = () => {
  const [messagesTab] = useState([
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Pinned",
    },
    {
      id: 3,
      name: "Subscription",
    },
    {
      id: 4,
      name: "Unread",
    },
    {
      id: 5,
      name: "Chat groups",
    },
  ]);
  const [isActiveTab, setIsActiveTab] = useState("All");
  const [createNewGroup, setCreateNewGroup] = useState(false);

  const toggleCreateNewChatGroup = () => {
    setCreateNewGroup(!createNewGroup);
  };

  return (
    <section className="flex">
      <div className="bg-grey_20 drop-shadow-4xl w-[42%] mt-4">
        {/* <SearchInput ifBlur={false} /> */}

        <div
          className="flex items-center justify-between w-full bg-grey_20 py-3 px-4  rounded-sm
   border border-grey_20 drop-shadow-3xl shadow-header-md mb-2"
        >
          <div
            onClick={toggleCreateNewChatGroup}
            className="flex items-center border border-grey_10 drop-shadow-7xl
          py-2 px-3 bg-secondary-btn
           rounded-3xl cursor-pointer"
          >
            <Typography variant="subtitle3" className="text-grey_800">
              Create chat group
            </Typography>
            <Image src={plus} alt="plus" className="w-5 h-4" />
          </div>

          <section className="flex items-center">
            <Image src={searchIcon} alt="searchIcon" className="w-6 h-6 mr-4" />
            <Image src={writeMessage} alt="searchIcon" className="w-6 h-6" />
          </section>
        </div>

        <div className="flex items-center justify-between overflow-x-scroll p-4">
          {messagesTab.map(({ id, name }) => {
            return (
              <div
                key={id}
                onClick={() => setIsActiveTab(name)}
                className={`cursor-pointer py-2 px-4 rounded-3xl mr-[14px] drop-shadow-3xl whitespace-nowrap ${
                  isActiveTab === name
                    ? "bg-blue_200 text-blue_500"
                    : "bg-white text-grey_400"
                }`}
              >
                <Typography variant="p2">{name}</Typography>
              </div>
            );
          })}
          <Image src={plus} alt="plus" className="w-6 h-6" />
        </div>

        {isActiveTab !== "Chat groups" && (
          <>
            {notificationSampleData.map(
              ({ id, name, message, photo, tag, time }) => {
                return (
                  <div
                    key={id}
                    className="flex items-center p-4 border-b border-grey_10"
                  >
                    <Image src={photo} alt="demo" className="w-10 h-10" />

                    <div className="ml-3">
                      <div className="flex items-center mb-1">
                        <Typography
                          variant="titleTwo"
                          className="text-grey_900"
                        >
                          {name}
                        </Typography>

                        <Image
                          src={verifyBlue}
                          alt="demo"
                          className="ml-[1px] h-4 w-4"
                        />

                        <Typography variant="p2" className="text-grey_400 pl-2">
                          {tag}
                        </Typography>
                        <div className="w-[2px] h-[2px] bg-grey_300 mx-[6px]"></div>
                      </div>

                      <Typography
                        variant="titleTwo"
                        className="pt-[2px] text-grey_700 font-normal"
                      >
                        {message}
                      </Typography>
                    </div>

                    <div className="ml-auto">
                      <Image
                        src={horizontalMore}
                        alt="demo"
                        // className="w-10 h-10"
                      />
                      <Typography variant="p2" className="text-grey_400">
                        {time}
                      </Typography>
                    </div>
                  </div>
                );
              }
            )}
          </>
        )}

        {isActiveTab === "Chat groups" && (
          <>
            {sampleChatGroups?.map(({ id, groupName, noOfUsers }) => {
              return (
                <div
                  key={id}
                  className="flex items-center justify-between cursor-pointer p-4 border-b border-grey_10 hover:bg-blue_200"
                >
                  <div>
                    <Typography
                      variant="titleTwo"
                      className="pb-[2px] text-grey_900"
                    >
                      {groupName}
                    </Typography>
                    <Typography variant="p2" className="text-grey_400">
                      {noOfUsers}
                    </Typography>
                  </div>

                  <Image
                    src={rightAshArrow}
                    alt="rightAshArrow"
                    className="w-6 h-6"
                  />
                </div>
              );
            })}
          </>
        )}
      </div>

      <section className="w-[58%]">
        {isActiveTab !== "Chat groups" && <ChatInterface />}
        {isActiveTab === "Chat groups" && <GroupChatInterface />}
      </section>

      {
        <Modal show={createNewGroup} toggleModal={toggleCreateNewChatGroup}>
          <CreateChatGroup toggleModal={toggleCreateNewChatGroup} />
        </Modal>
      }
    </section>
  );
};

export default Messages;
