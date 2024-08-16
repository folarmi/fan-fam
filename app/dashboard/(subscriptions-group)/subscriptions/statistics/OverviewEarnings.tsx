import CollectionRadioButton from "@/app/components/forms/CollectionRadioButton";
import Typography from "@/app/components/forms/Typography";
import { earningsSampleData } from "@/app/data";
import dropDown from "@/public/icons/dropDown.svg";
import Image from "next/image";
import React from "react";

const OverviewEarnings = () => {
  return (
    <>
      <div className="flex items-center justify-between py-[18px] border-t border-grey_10 border-b">
        <Typography variant="subtitle2" className="text-grey_900">
          All Time Earnings
        </Typography>
        <Typography variant="subtitle2" className="text-grey_900">
          $560.00
        </Typography>
      </div>

      <div className="flex items-center justify-between py-2 mt-2 border-t border-grey_10 border-b">
        <div className="">
          <Typography variant="subtitle2" className="text-grey_900">
            July
          </Typography>
          <Typography variant="p3" className="text-grey_500 pt-[2px]">
            July 18, 2024 - Aug 12, 2024 (local time UTC+01:00)
          </Typography>
        </div>

        <div className="flex items-center">
          <Typography variant="subtitle2" className="text-grey_900 pr-2">
            $0.00
          </Typography>
          <Image src={dropDown} alt="dropDown" className="w-5 h-5" />
        </div>
      </div>

      <section>
        <section className="flex items-center justify-between mt-6 border-b border-grey_10 pb-2">
          <Typography variant="labelOne" className="text-grey_500">
            Earnings
          </Typography>
          <Typography variant="labelOne" className="text-grey_500">
            Gross
          </Typography>
          <Typography variant="labelOne" className="text-grey_500">
            Net
          </Typography>
        </section>

        {earningsSampleData?.map(({ id, amount, earningsType, net }) => {
          return (
            <div
              key={id}
              className="flex items-center py-2 justify-between border-b border-grey_10"
            >
              <div className="flex items-center min-w-[110px]">
                <CollectionRadioButton />
                <Typography variant="p2" className="text-grey_600">
                  {earningsType}
                </Typography>
              </div>
              <Typography variant="p2" className="text-grey_600 ">
                {amount}
              </Typography>
              <Typography variant="p2" className="text-grey_600 ">
                {net}
              </Typography>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default OverviewEarnings;
