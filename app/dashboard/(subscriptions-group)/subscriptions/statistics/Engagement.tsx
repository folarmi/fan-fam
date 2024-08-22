"use client";

import Typography from "@/app/components/forms/Typography";
import Image from "next/image";
import React, { useState } from "react";
import Tabs from "@/app/components/forms/Tabs";
import { engagementTypeData } from "@/app/utils/helper";
import EngagementPost from "./EngagementPost";
import Messages from "./Messages";
import Streaming from "./Streaming";
import Stories from "./Stories";
import BankingInformation from "@/app/components/molecules/BankingInformation";

const Engagement = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Posts",
    },
    {
      id: 2,
      name: "Messages",
    },
    {
      id: 3,
      name: "Streaming",
    },
    {
      id: 4,
      name: "Stories",
    },
  ]);

  const [isActiveTab, setIsActiveTab] = useState("Posts");
  return (
    <div>
      <BankingInformation />

      <section className="px-4">
        <Tabs
          tabsArray={tabs}
          setIsActiveTab={setIsActiveTab}
          isActiveTab={isActiveTab}
        />
      </section>

      <section className="mx-4 border border-grey_10 rounded p-4">
        <Typography variant="subtitle3" className="text-grey_800 pb-4">
          Summary
        </Typography>

        <div className="flex items-center mb-4">
          {engagementTypeData(isActiveTab)?.map(({ extra, id, name }) => {
            return (
              <div className="mr-6 w-24" key={id}>
                <Typography
                  variant="p3"
                  className="text-grey_600 whitespace-nowrap"
                >
                  {name}
                </Typography>
                <Typography
                  variant="titleTwo"
                  className="text-grey_800 pt-[2px]"
                >
                  {extra}
                </Typography>
              </div>
            );
          })}
        </div>
      </section>

      {isActiveTab === "Posts" && <EngagementPost />}
      {isActiveTab === "Messages" && <Messages />}
      {isActiveTab === "Streaming" && <Streaming />}
      {isActiveTab === "Stories" && <Stories />}
    </div>
  );
};

export default Engagement;
