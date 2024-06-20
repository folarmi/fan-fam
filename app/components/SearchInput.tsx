"use client";

import React, { useState } from "react";
import searchIcon from "@/public/icons/searchIcon.svg";
import moreIcon from "@/public/icons/moreIcon.svg";
import Image from "next/image";
import Typography from "./Typography";

const SearchInput = () => {
  const [tabs, setTabs] = useState([
    { id: 1, name: "All" },
    {
      id: 2,
      name: "Blur",
    },
  ]);

  const [isActiveTab, setIsActiveTab] = useState("All");
  //   const toggleActiveTab = () => {

  //   }
  return (
    <div
      className="w-full bg-grey_20 flex 
    items-center py-5 px-4 justify-between rounded-sm
     border-grey_20 drop-shadow-3xl shadow-header-md mb-2"
    >
      <div className="flex items-center">
        <Image src={searchIcon} alt="search icon" className="pr-1" />
        <input
          className="bg-grey_20 outline-none text-grey_200"
          placeholder="Search.."
        />
      </div>

      <div className="flex">
        {tabs.map(({ id, name }) => {
          return (
            <div
              key={id}
              onClick={() => setIsActiveTab(name)}
              className={`cursor-pointer py-2 px-4 rounded-3xl  mr-[14px] drop-shadow-3xl ${
                isActiveTab === name
                  ? "bg-blue_200 text-black"
                  : "bg-white text-grey_400"
              }`}
            >
              <Typography variant="p1">{name}</Typography>
            </div>
          );
        })}
        <Image src={moreIcon} alt="search icon" className="pr-1" />
      </div>
    </div>
  );
};

export default SearchInput;
