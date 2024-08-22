"use client";

import StatTableHeader from "@/app/components/forms/StatTableHeader";
import Tabs from "@/app/components/forms/Tabs";
import TimelineAndOverview from "@/app/components/forms/TimelineAndOverview";
import Typography from "@/app/components/forms/Typography";
import BankingInformation from "@/app/components/molecules/BankingInformation";
import { reachTypeData } from "@/app/utils/helper";
import React, { useState } from "react";

const Reach = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Profile Visitors",
    },
    {
      id: 2,
      name: "Promotions",
    },
    {
      id: 3,
      name: "Trial Links",
    },
    {
      id: 4,
      name: "Tracking Links",
    },
  ]);

  const [isActiveTab, setIsActiveTab] = useState("Profile Visitors");
  const [profileVisitorsTab, setProfileVisitorsTab] = useState([
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Guests",
    },
    {
      id: 3,
      name: "Users",
    },
  ]);
  const [isProfileVisitorActive, setIsProfileVisitorActive] = useState("All");
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
          {reachTypeData(isActiveTab)?.map(({ extra, id, name }) => {
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

      <section className="px-4">
        <Tabs
          tabsArray={profileVisitorsTab}
          setIsActiveTab={setIsProfileVisitorActive}
          isActiveTab={isProfileVisitorActive}
        />
      </section>

      <div className="">
        <TimelineAndOverview
          month="July"
          timeframe="July 18, 2024 - Aug 12, 2024 (local time UTC+01:00)"
          amount="0 Visitors"
        />
      </div>

      <div className="mt-12 px-4">
        <StatTableHeader />
      </div>
    </div>
  );
};

export default Reach;
