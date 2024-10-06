"use client";

import { settingsModule } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Typography from "@/app/components/forms/Typography";
import withAuth from "@/app/hoc/withAuth";
import rightAshArrow from "@/public/icons/rightAshArrow.svg";
import Sidebar from "@/app/components/molecules/Sidebar";
import { useAppSelector } from "@/app/lib/hook";
import { RootState } from "@/app/lib/store";
import { useDispatch } from "react-redux";
import { updateShowOnMobile } from "@/app/lib/features/mobileView/settingMobileViewSlice";

const SettingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useDispatch();
  const [isActiveTab, setIsActiveTab] = useState("Account");
  const { showOnMobile } = useAppSelector(
    (state: RootState) => state.settingMobile
  );

  const toggleView = () => {
    dispatch(updateShowOnMobile(true));
  };

  return (
    <div className="flex md:justify-center">
      <Sidebar />

      <section className={`${showOnMobile ? "hidden" : "w-full md:w-[25%]"} `}>
        <div
          className="w-full bg-grey_20 py-3 px-4 h-14 border
     border-grey_20 shadow-custom-combined mb-2"
        >
          <Typography variant="subtitle1">Settings</Typography>
        </div>

        {settingsModule?.map(({ id, name, path }) => {
          return (
            <Link
              key={id}
              href={path}
              onClick={() => setIsActiveTab(name)}
              className={`flex items-center justify-between cursor-pointer px-4 py-3 border-b border-grey_10 hover:bg-blue_200 ${
                isActiveTab === name ? "bg-blue_200" : ""
              }`}
            >
              <div onClick={toggleView}>
                <Typography variant="p2" className="text-grey_800">
                  {name}
                </Typography>
              </div>

              <Image
                src={rightAshArrow}
                alt="rightAshArrow"
                className="w-6 h-6"
              />
            </Link>
          );
        })}
      </section>
      <main className={`w-full md:w-[50%] md:pr-[88px]`}>{children}</main>
    </div>
  );
};

export default withAuth(SettingLayout);
