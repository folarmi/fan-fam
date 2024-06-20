"use client";
import React from "react";

import { usePathname } from "next/navigation";
import { sideBarItems } from "../data";
import Image from "next/image";
import logo from "@/public/icons/logo.svg";
import Typography from "../components/Typography";
import Link from "next/link";
import CustomButton from "../components/CustomButton";
import Suggestion from "../components/cards/Suggestion";
import suggestionOne from "@/public/suggestionOne.svg";
import suggestTwo from "@/public/suggestTwo.svg";

// type SidebarType = {
//     id:number,
//     name:string,
//     image: ImageTy
// }

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();

  return (
    <div className="flex  justify-center">
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

        <div className="drop-shadow-5x shadow-post-button w-[221px]">
          <CustomButton className="mt-6 l">Post</CustomButton>
        </div>
      </div>
      <main className="w-[50%]">{children}</main>

      <div className="w-[25%] px-8 mt-20">
        <p className="font-medium text-sm text-grey_800">SUGGESTIONS</p>

        <Suggestion img={suggestionOne} isLive />
        <Suggestion img={suggestTwo} />
        <Suggestion img={suggestionOne} isLive />
        <Suggestion img={suggestTwo} />

        <div className="flex items-center mt-3">
          <Typography variant="labelOne" className="text-grey_400">
            Terms of service
          </Typography>
          <div className="bg-grey_300 w-4 h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
