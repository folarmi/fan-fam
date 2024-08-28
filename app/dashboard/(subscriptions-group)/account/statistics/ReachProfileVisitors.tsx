"use client";

import StatTableHeader from "@/app/components/forms/StatTableHeader";
import Tabs from "@/app/components/forms/Tabs";
import TimelineAndOverview from "@/app/components/forms/TimelineAndOverview";
import Typography from "@/app/components/forms/Typography";
import {
  reachStatHeader,
  reachStatHeaderTwo,
  sampleReachStat,
  topCountriesData,
} from "@/app/data";
import Image from "next/image";
import React, { useState } from "react";

const ReachProfileVisitors = () => {
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
          amount={`0 ${
            isProfileVisitorActive === "All"
              ? "Visitors"
              : isProfileVisitorActive === "Guests"
              ? "Guests"
              : "Users"
          }`}
        />
      </div>

      <div className="mt-12 px-4">
        <StatTableHeader data={reachStatHeader} />
        {sampleReachStat.map(({ id, title, guests, users, total }) => {
          return (
            <div
              key={id}
              className="py-4 flex items-center justify-between border-b border-grey_10"
            >
              <Typography variant="subtitle2" className="text-grey_700">
                {title}
              </Typography>
              <Typography variant="p3" className="text-grey_500">
                {guests}
              </Typography>
              <Typography variant="p3" className="text-grey_500">
                {users}
              </Typography>
              <Typography variant="p3" className="text-grey_500">
                {total}
              </Typography>
            </div>
          );
        })}

        <Typography
          variant="subtitle2"
          className="text-grey_900 py-3 border-b border-grey_10"
        >
          Top Countries
        </Typography>
        <StatTableHeader data={reachStatHeaderTwo} />
        {topCountriesData.map(
          ({ id, country, image, guests, users, total }) => {
            return (
              <div
                key={id}
                className="py-4 flex items-center justify-between border-b border-grey_10"
              >
                <div className="flex items-center">
                  <Image alt="image" src={image} className="w-4 h-4" />
                  <Typography variant="labelOne" className="text-grey_700 pl-2">
                    {country}
                  </Typography>
                </div>
                <Typography variant="p3" className="text-grey_500">
                  {guests}
                </Typography>
                <Typography variant="p3" className="text-grey_500">
                  {users}
                </Typography>
                <Typography variant="p3" className="text-grey_500">
                  {total}
                </Typography>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ReachProfileVisitors;
