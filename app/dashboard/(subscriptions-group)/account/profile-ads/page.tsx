"use client";

import BankingInformation from "@/app/components/molecules/BankingInformation";
import React, { useState } from "react";
import SubscriptionHeader from "../settings/SubscriptionHeader";
import Tabs from "@/app/components/forms/Tabs";
import { profileAdsTabs } from "@/app/data";
import Typography from "@/app/components/forms/Typography";
import calendarTwo from "@/public/icons/calendarTwo.svg";
import usdCoin from "@/public/icons/usdCoin.svg";
import rightAshArrow from "@/public/icons/rightAshArrow.svg";
import Image from "next/image";

const ProfileAds = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Active Ads",
    },
    {
      id: 3,
      name: "Expired Ads",
    },
  ]);
  const [isActiveTab, setIsActiveTab] = useState("All");
  return (
    <div>
      <SubscriptionHeader text="Profile Ad History" />
      <BankingInformation />

      <div className="mx-4">
        <Tabs
          tabsArray={tabs}
          isActiveTab={isActiveTab}
          setIsActiveTab={setIsActiveTab}
        />
      </div>

      <div className="mx-8">
        {profileAdsTabs.map(({ id, name, date, price, status }) => (
          <div
            key={id}
            className="py-3 border-b border-gray-200 flex items-center justify-between"
          >
            <section>
              <div className="flex items-center justify-between">
                <Typography variant="titleTwo" className="text-gray-900">
                  {name}
                </Typography>
              </div>

              <div className="flex items-center mt-1">
                <Image src={calendarTwo} alt="calendarTwo" />
                <Typography variant="p2" className="text-gray-400">
                  {date}
                </Typography>
                <div className="flex items-center ml-4">
                  <Image src={usdCoin} alt="usdCoin" />
                  <Typography
                    variant="subtitle2"
                    className="text-blue_500 pl-[2px]"
                  >
                    {price}
                  </Typography>
                </div>
              </div>
            </section>

            <div className="flex items-center cursor-pointer">
              <div
                className={`border border-blue_100 py-2 px-4 rounded-2xl ${
                  status === "Active" ? "bg-blue_200" : "bg-white"
                }`}
              >
                <Typography variant="p3">{status}</Typography>
              </div>
              <Image src={rightAshArrow} alt="rightAshArrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileAds;
