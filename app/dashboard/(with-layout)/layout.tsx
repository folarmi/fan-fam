"use client";
import React, { useState } from "react";

import { usePathname } from "next/navigation";
import { sideBarItems } from "../../data";
import Image from "next/image";
import logo from "@/public/icons/logo.svg";
import Typography from "../../components/Typography";
import Link from "next/link";
import CustomButton from "../../components/CustomButton";
import VerticalCarousel from "../../components/VerticalCarousel";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  const [isUserSubscribed] = useState(true);

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
          <CustomButton className="mt-6">Post</CustomButton>
        </div>
      </div>
      <main className="w-[50%]">{children}</main>

      <div className="w-[25%] px-8 mt-20">
        {isUserSubscribed && (
          <div className="">
            <p className="font-medium text-sm text-grey_800">SUGGESTIONS</p>
            <VerticalCarousel />
          </div>
        )}
        <div
          className={`flex items-center justify-between mt-3 ${
            !isUserSubscribed ? "h-[674px]" : ""
          }`}
        >
          <Typography variant="labelOne" className="text-grey_400">
            Terms of service
          </Typography>
          <div className="bg-grey_300 w-[2px] h-[2px]"></div>
          <Typography variant="labelOne" className="text-grey_400">
            Privacy
          </Typography>
          <div className="bg-grey_300 w-[2px] h-[2px]"></div>
          <Typography variant="labelOne" className="text-grey_400">
            Cookie notice
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
