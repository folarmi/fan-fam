"use client";

import CustomButton from "@/app/components/forms/CustomButton";
import Typography from "@/app/components/forms/Typography";
import React, { useState } from "react";
import Image from "next/image";
import { earningsSampleData } from "@/app/data";
import CollectionRadioButton from "@/app/components/forms/CollectionRadioButton";
import OverviewEarnings from "./OverviewEarnings";
import OverviewHighlights from "./OverviewActivityStreak";
import OverviewActivityStreak from "./OverviewActivityStreak";

const Overview = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Earnings",
    },
    {
      id: 2,
      name: "Top Highlights",
    },
    {
      id: 3,
      name: "Activity Streak",
    },
  ]);
  const [isActiveTab, setIsActiveTab] = useState("Activity Streak");
  //   border border-grey_10 shadow-chat-interface
  return (
    <div className="mx-4 bg-white ">
      <div className=" border border-grey_10 rounded mt-6 p-4">
        <div className="flex items-center justify-around">
          <div className="">
            <Typography variant="h4" className="text-grey_800 text-center">
              $0.00
            </Typography>
            <Typography variant="p3" className="text-grey_600 pt-4">
              Available Balance
            </Typography>
          </div>

          <div className="">
            <Typography variant="h4" className="text-grey_800 text-center">
              $0.00
            </Typography>
            <Typography variant="p3" className="text-grey_600 pt-4">
              Available Balance
            </Typography>
          </div>
        </div>

        <div className="py-2 px-4 bg-grey_10 my-4">
          <Typography className="text-grey_800 " variant="p2">
            Minimum withdrawal amount is $20
          </Typography>
        </div>

        <CustomButton className="w-full">REQUEST WITHDRAWAL</CustomButton>
      </div>

      <div className="flex items-center my-4">
        {tabs?.map(({ id, name }) => {
          return (
            <div
              key={id}
              onClick={() => setIsActiveTab(name)}
              className={`mr-2 py-2 px-4 cursor-pointer rounded-2xl ${
                isActiveTab === name
                  ? "bg-blue_200 border border-blue_100"
                  : "bg-white border border-grey_10"
              }`}
            >
              <Typography variant="p3" className="text-grey_800">
                {name}
              </Typography>
            </div>
          );
        })}
      </div>

      {isActiveTab === "Earnings" && <OverviewEarnings />}
      {isActiveTab === "Activity Streak" && <OverviewActivityStreak />}
    </div>
  );
};

export default Overview;
