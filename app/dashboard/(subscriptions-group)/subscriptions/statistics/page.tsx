"use client";

import React, { useState } from "react";
import SubscriptionHeader from "../settings/SubscriptionHeader";
import Typography from "@/app/components/forms/Typography";
import Overview from "./Overview";

const Statistics = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Overview",
    },
    {
      id: 2,
      name: "Engagements",
    },
    {
      id: 3,
      name: "Reach",
    },
    {
      id: 4,
      name: "Fans",
    },
  ]);

  const [isActiveTab, setisActiveTab] = useState("Overview");

  return (
    <div className="border border-grey_10 shadow-chat-interface">
      <SubscriptionHeader text="Subscription Statistics" />

      {/* border-b border-blue_900 */}
      <div className="flex items-center border-b border-grey_10">
        {tabs.map(({ id, name }) => {
          return (
            <div key={id} className="px-4 py-2">
              <Typography
                className={`
                ${isActiveTab === name ? "text-blue_900 " : "text-grey_500"}
                `}
                variant="p2"
              >
                {name}
              </Typography>
            </div>
          );
        })}
      </div>

      {isActiveTab === "Overview" && <Overview />}
    </div>
  );
};

export default Statistics;
