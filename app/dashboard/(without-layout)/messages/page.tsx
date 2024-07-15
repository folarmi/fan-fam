"use client";
import SearchInput from "@/app/components/SearchInput";
import Typography from "@/app/components/Typography";
import Image from "next/image";
import React, { useState } from "react";
import plus from "@/public/icons/plus.svg";
import { notificationSampleData } from "@/app/data";
import verifyBlue from "@/public/icons/verifyBlue.svg";
import horizontalMore from "@/public/icons/ashHorizontalMore.svg";
import ChatInterface from "./ChatInterface";

const Messages = () => {
  const [messagesTab, setMessagesTab] = useState([
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
  ]);

  const [isActiveTab, setIsActiveTab] = useState("All");

  return (
    <section className="flex">
      <div className="bg-grey_20 drop-shadow-4xl p-4 w-[42%]">
        <SearchInput ifBlur={false} />
        <div className="flex items-center justify-between">
          {messagesTab.map(({ id, name }) => {
            return (
              <div
                key={id}
                onClick={() => setIsActiveTab(name)}
                className={`cursor-pointer py-2 px-4 rounded-3xl mr-[14px] drop-shadow-3xl ${
                  isActiveTab === name
                    ? "bg-blue_200 text-black"
                    : "bg-white text-grey_400"
                }`}
              >
                <Typography variant="p1">{name}</Typography>
              </div>
            );
          })}
          <Image src={plus} alt="block" className="w-6 h-6" />
        </div>

        {notificationSampleData.map(
          ({ id, name, message, photo, tag, time }) => {
            return (
              <div
                key={id}
                className="flex items-center py-4 border-b border-grey_10"
              >
                <Image src={photo} alt="demo" className="w-10 h-10" />

                <div className="ml-3">
                  <div className="flex items-center mb-1">
                    <Typography variant="titleTwo" className="text-grey_900">
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
      </div>

      <section className="w-[58%]">
        <ChatInterface />
      </section>
    </section>
  );
};

export default Messages;
