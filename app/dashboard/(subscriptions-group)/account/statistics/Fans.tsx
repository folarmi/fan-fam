"use client";

import StatTableHeader from "@/app/components/forms/StatTableHeader";
import Tabs from "@/app/components/forms/Tabs";
import TimelineAndOverview from "@/app/components/forms/TimelineAndOverview";
import Typography from "@/app/components/forms/Typography";
import BankingInformation from "@/app/components/molecules/BankingInformation";
import { fanPromotionsSummary, fanSubHeader } from "@/app/data";
import React, { useState } from "react";
import FansSubscription from "./FansSubscription";
import TopFan from "./TopFan";

const Fans = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Subscriptions",
    },
    {
      id: 2,
      name: "Top Fan",
    },
  ]);

  const [isActiveTab, setIsActiveTab] = useState("Subscriptions");

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

        <div className="flex flex-wrap items-center mb-4 w-full">
          {fanPromotionsSummary?.map(({ extra, id, name }) => {
            return (
              <div className="mr-10 w-24" key={id}>
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

      {isActiveTab === "Subscriptions" && <FansSubscription />}
      {isActiveTab === "Top Fan" && <TopFan />}
    </div>
  );
};

export default Fans;
