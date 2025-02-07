"use client";

import AccountBackButton from "@/app/components/forms/AccountBackButton";
import CustomSwitchButton from "@/app/components/forms/CustomSwitchButton";
import Typography from "@/app/components/forms/Typography";
import { privacyAndSafety, privacyAndSafetyItems } from "@/app/data";
import { useGetData } from "@/app/hooks/apiCalls";

import rightArrow from "@/public/icons/rightAshArrow.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Privacy = () => {
  const [checkedBox, setCheckedBox] = useState(true);
  const { data: privacyAndSafetyData, isLoading } = useGetData({
    url: `/profile/settings/view/privacy-safety`,
    queryKey: ["ViewPrivacySafety"],
  });

  const toggleChange = () => {
    setCheckedBox(!checkedBox);
  };

  return (
    <div>
      <AccountBackButton
        showBack={false}
        showMobileBack
        moduleName="Privacy and Safety"
      />

      <section className="mt-2 ml-4">
        {privacyAndSafetyItems?.map(({ groupName, items }) => {
          return (
            <div key={groupName}>
              <Typography variant="subtitle2" className="text-grey_800 pt-2">
                {groupName}
              </Typography>

              {items?.map(({ id, isOn, name }) => {
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between my-2 border-b border-grey_10"
                  >
                    <Typography variant="p2" className="text-grey_500">
                      {name}
                    </Typography>

                    <CustomSwitchButton
                      isChecked={isOn}
                      onChange={toggleChange}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}

        <Typography variant="subtitle2" className="text-grey_800 pt-2">
          Safety
        </Typography>

        {privacyAndSafety?.map(({ id, name, path }) => {
          return (
            <Link
              key={id}
              href={path}
              className="flex items-center justify-between my-2 border-b border-grey_10 cursor-pointer"
            >
              <Typography variant="p2" className="text-grey_500">
                {name}
              </Typography>

              <Image src={rightArrow} alt="rightArrow" />
            </Link>
          );
        })}

        <Typography variant="subtitle2" className="text-grey_800 pt-2">
          Enable DRM video protection
        </Typography>
        <div className="flex items-center justify-between my-2 border-b border-grey_10 mb-4">
          <Typography variant="p2" className="text-grey_500">
            DRM protection helps to protect video content from being copied or
            downloaded. After you enable it, DRM protection will be applied to
            uploads after that date.
          </Typography>

          <CustomSwitchButton isChecked={true} />
        </div>
      </section>
    </div>
  );
};

export default Privacy;
