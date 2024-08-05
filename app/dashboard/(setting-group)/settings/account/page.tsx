import Typography from "@/app/components/forms/Typography";
import { accountSettingsModules } from "@/app/data";
import Image from "next/image";
import React from "react";
import rightAshArrow from "@/public/icons/rightAshArrow.svg";
import Link from "next/link";

const Settings = () => {
  return (
    <div>
      <div
        className="w-full bg-white h-12 px-4 border
     border-grey_20 shadow-custom-combined mb-2"
      ></div>

      <div className=""></div>
      {accountSettingsModules?.map(({ groupName, items }) => {
        return (
          <div key={groupName} className={`cursor-pointer px-4 pt-2`}>
            <div>
              <Typography variant="subtitle2" className="text-grey_800">
                {groupName}
              </Typography>
            </div>

            {items?.map(({ id, name, path }) => {
              return (
                <Link
                  key={id}
                  className={`flex items-center justify-between cursor-pointer py-3 border-b border-grey_10 hover:bg-blue_200`}
                  href={path}
                >
                  <div>
                    <Typography variant="p2" className="text-grey_500">
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
          </div>
        );
      })}
    </div>
  );
};

export default Settings;
