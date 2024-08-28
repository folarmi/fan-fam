import StatTableHeader from "@/app/components/forms/StatTableHeader";
import TimelineAndOverview from "@/app/components/forms/TimelineAndOverview";
import Typography from "@/app/components/forms/Typography";
import { reachPromotionHeader } from "@/app/data";
import gift from "@/public/icons/gift.svg";
import link from "@/public/icons/link.svg";
import Image from "next/image";
import React from "react";

type props = {
  isActiveTab: string;
};

const ReachPromotions = ({ isActiveTab }: props) => {
  return (
    <div>
      <TimelineAndOverview
        month="July"
        timeframe="July 18, 2024 - Aug 12, 2024 (local time UTC+01:00)"
        amount={`${
          isActiveTab === "Promotions"
            ? "0 Claims 1 offer"
            : "0 Claims 1 Trials"
        }`}
      />

      <div className="mt-12 px-4">
        <StatTableHeader data={reachPromotionHeader} />

        <div className="flex justify-between py-4 border-b border-grey_10">
          <section className="flex items-center justify-between ">
            <Image
              src={isActiveTab === "Promotions" ? gift : link}
              alt="gift"
              className="w-4 h-4"
            />
            <Typography variant="subtitle3" className="text-grey_500 pl-2">
              {isActiveTab === "Promotions"
                ? " Limited offer free trial for 1 day"
                : "happy link (trial for 1 day)"}
            </Typography>
          </section>

          <Typography variant="labelOne" className="text-grey_500">
            Expired
          </Typography>
        </div>

        <div className="flex items-center justify-between  py-4">
          <Typography variant="p3" className="text-grey_500">
            25 June, 2024
          </Typography>
          <Typography variant="p3" className="text-grey_500">
            25 June, 2024
          </Typography>
          <Typography variant="p3" className="text-grey_500">
            1
          </Typography>
          <Typography variant="p3" className="text-grey_500">
            0
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ReachPromotions;
