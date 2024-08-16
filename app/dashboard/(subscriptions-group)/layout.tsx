"use client";

import CustomButton from "@/app/components/forms/CustomButton";
import { settingsModule, sideBarItems, subscriptionMenu } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import logo from "@/public/icons/logo.svg";
import Typography from "@/app/components/forms/Typography";
import withAuth from "@/app/hoc/withAuth";
import rightAshArrow from "@/public/icons/rightAshArrow.svg";

const SubscriptionLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  const [isActiveTab, setIsActiveTab] = useState("Add Card");

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-screen pr-12 pl-[109px] border-r border-grey_10">
        <div className="flex items-center my-6 bg-white">
          <Image src={logo} alt="fanFam logo" className="" />
          <Typography variant="subtitle2" className="text-grey_900 pl-2">
            Fan Fam
          </Typography>
        </div>

        <div className="w-[25%]">
          {sideBarItems.map(({ id, name, image, link }) => {
            return (
              <Link
                className={`w-[236px] flex items-center mb-2 py-2 pl-4 rounded-lg ${
                  pathName === link ? " bg-blue_100" : ""
                }`}
                href={link}
                key={id}
              >
                <div className="flex items-center">
                  <Image src={image} alt="icon" className="" />
                  <Typography
                    variant="subtitle2"
                    className="text-grey_400 pl-4"
                  >
                    {name}
                  </Typography>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="drop-shadow-5xl shadow-post-button w-[221px]">
          <CustomButton className="mt-6 w-full">Post</CustomButton>
        </div>
      </div>

      <section className="w-[25%]">
        <div
          className="w-full bg-grey_20 h-14 px-4 border
     border-grey_20 shadow-custom-combined mb-2"
        ></div>

        {subscriptionMenu?.map(({ id, name, path }) => {
          return (
            <Link
              key={id}
              href={path}
              onClick={() => setIsActiveTab(name)}
              className={`flex items-center justify-between cursor-pointer px-4 py-3 border-b border-grey_10 hover:bg-blue_200 ${
                isActiveTab === name ? "bg-blue_200" : ""
              }`}
            >
              <div>
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
      <main className="w-[50%] pr-[88px]">{children}</main>
    </div>
  );
};

export default withAuth(SubscriptionLayout);
