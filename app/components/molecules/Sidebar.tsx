import { sideBarItems } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Typography from "../forms/Typography";
import CustomButton from "../forms/CustomButton";
import logo from "@/public/icons/logo.svg";

const Sidebar = () => {
  const pathName = usePathname();
  return (
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
                {/* <Image src={image} alt="icon" className="" /> */}
                {image}
                <Typography variant="subtitle2" className="text-grey_400 pl-4">
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
  );
};

export default Sidebar;
