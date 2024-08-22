"use client";

import Tabs from "@/app/components/forms/Tabs";
import TimelineAndOverview from "@/app/components/forms/TimelineAndOverview";
import Typography from "@/app/components/forms/Typography";
import React, { useState } from "react";

const Streaming = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Purchases",
    },
    {
      id: 2,
      name: "Tips",
    },
    {
      id: 3,
      name: "Views",
    },
    {
      id: 4,
      name: "Likes",
    },
    {
      id: 5,
      name: "Comments",
    },
  ]);
  const [isActiveTab, setIsActiveTab] = useState("Purchases");

  return (
    <div>
      <section className="px-4">
        <Tabs
          tabsArray={tabs}
          setIsActiveTab={setIsActiveTab}
          isActiveTab={isActiveTab}
        />
      </section>

      <TimelineAndOverview
        month="July"
        timeframe="July 18, 2024 - Aug 12, 2024 (local time UTC+01:00)"
        amount=""
      />

      <div className="flex items-center justify-center">
        <Typography
          variant="p2"
          className="text-grey_600 text-center py-20 w-52"
        >
          No activity found during selected period
        </Typography>
      </div>
    </div>
  );
};

export default Streaming;
