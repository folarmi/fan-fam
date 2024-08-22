import React from "react";
import Typography from "./Typography";
import Image from "next/image";
import dropDown from "@/public/icons/dropDown.svg";

type TimelineAndOverviewProps = {
  month: string;
  timeframe: string;
  amount: string | undefined;
};

const TimelineAndOverview = ({
  month,
  timeframe,
  amount,
}: TimelineAndOverviewProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 mt-2 border-t border-grey_10 border-b">
      <div className="">
        <Typography variant="subtitle2" className="text-grey_900">
          {month}
        </Typography>
        <Typography variant="p3" className="text-grey_500 pt-[2px]">
          {timeframe}
        </Typography>
      </div>

      <div className="flex items-center">
        <Typography variant="subtitle2" className="text-grey_900 pr-2">
          {amount}
        </Typography>
        <Image src={dropDown} alt="dropDown" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default TimelineAndOverview;
