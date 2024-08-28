import TimelineAndOverview from "@/app/components/forms/TimelineAndOverview";
import Typography from "@/app/components/forms/Typography";
import EmptyState from "@/app/components/molecules/EmptyState";
import React from "react";

const ReachTrackingLink = () => {
  return (
    <div>
      <TimelineAndOverview
        month="July"
        timeframe="July 18, 2024 - Aug 12, 2024 (local time UTC+01:00)"
        amount=""
      />

      <EmptyState text="No activity found during selected period" />
    </div>
  );
};

export default ReachTrackingLink;
