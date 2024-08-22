import TimelineAndOverview from "@/app/components/forms/TimelineAndOverview";
import Typography from "@/app/components/forms/Typography";
import React from "react";

const ReachTrackingLink = () => {
  return (
    <div>
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

export default ReachTrackingLink;
