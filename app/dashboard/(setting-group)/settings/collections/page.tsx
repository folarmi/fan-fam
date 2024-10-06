"use client";

import AccountBackButton from "@/app/components/forms/AccountBackButton";
import CustomSwitchButton from "@/app/components/forms/CustomSwitchButton";
import Typography from "@/app/components/forms/Typography";
import { useAppSelector } from "@/app/lib/hook";
import { RootState } from "@/app/lib/store";
import React from "react";

const CollectionSettings = () => {
  const { showOnMobile } = useAppSelector(
    (state: RootState) => state.settingMobile
  );

  return (
    <div className={`${showOnMobile ? "w-full" : "hidden md:block"}`}>
      <AccountBackButton
        showBack={false}
        showMobileBack
        moduleName="Collections"
      />

      <div className="flex items-center justify-between mt-4 ml-4">
        <Typography variant="p2" className="text-grey_800">
          Auto follow back my fans
        </Typography>
        <CustomSwitchButton />
      </div>

      <div className="flex items-center justify-between mt-4 ml-4">
        <Typography variant="p2" className="text-grey_800">
          Unfollow when the subscription has ended
        </Typography>
        <CustomSwitchButton />
      </div>

      <div className="flex items-center justify-between mt-4 ml-4">
        <div>
          <Typography variant="subtitle2" className="text-grey_800 pb-[2px]">
            1 Free month for referrer
          </Typography>
          <Typography variant="p2" className="text-grey_500">
            When a subscribed fan shares your profile, they will receive
            additional 1 month subscription
          </Typography>
        </div>

        <CustomSwitchButton />
      </div>
    </div>
  );
};

export default CollectionSettings;
