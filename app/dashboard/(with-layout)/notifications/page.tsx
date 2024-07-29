"use client";
import SearchInput from "@/app/components/SearchInput";
import React, { useState } from "react";
import block from "@/public/icons/block.svg";
import Image from "next/image";
import { notificationSampleData } from "@/app/data";
import verifyBlue from "@/public/icons/verifyBlue.svg";
import Typography from "@/app/components/forms/Typography";

const Notifications = () => {
  const [notificationsTabs, setNotificationsTabs] = useState([
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Promotions",
    },
    {
      id: 3,
      name: "Subscription",
    },
    {
      id: 4,
      name: "Tags",
    },
    {
      id: 5,
      name: "Comments",
    },
    {
      id: 6,
      name: "Mentions",
    },
  ]);

  const [isActiveTab, setIsActiveTab] = useState("All");
  return (
    <div>
      <SearchInput ifBlur={false} />

      <section className="bg-grey_20 drop-shadow-4xl p-4">
        <div className="flex items-center">
          {notificationsTabs.map(({ id, name }) => {
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
          <Image src={block} alt="block" className="w-6 h-6" />
        </div>

        <div className="">
          {notificationSampleData.map(
            ({ id, name, message, photo, tag, time }) => {
              return (
                <div key={id} className="flex py-4 border-b border-grey_10">
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
                      <Typography variant="p2" className="text-grey_400">
                        {time}
                      </Typography>
                    </div>

                    <Typography
                      variant="titleTwo"
                      className="pt-[2px] text-grey_700 font-normal"
                    >
                      {message}
                    </Typography>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
};

export default Notifications;
