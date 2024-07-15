"use client";
import Typography from "@/app/components/Typography";
import { dummyCollectionData } from "@/app/data";
import Image from "next/image";
import plus from "@/public/icons/plus.svg";
import React, { useState } from "react";
import CollectionsSearchInput from "@/app/components/forms/CollectionsSearchInput";
import CollectionCard from "@/app/components/cards/CollectionCard";
import suggestionOne from "@/public/suggestionOne.svg";
import defaultLiveAvatar from "@/public/defaultLiveAvatar.svg";
import defaultAvatar from "@/public/defaultAvatar.svg";

const Collections = () => {
  const [collectionsTab, setCollectionsTab] = useState([
    {
      id: 1,
      name: "User List",
    },
    {
      id: 2,
      name: "Bookmarks",
    },
  ]);
  const [followingTabs, setFollowingTabs] = useState([
    { id: 1, name: "Users" },
    { id: 2, name: "Following" },
  ]);
  const [isActiveTab, setIsActiveTab] = useState("User List");
  const [followingActiveTab, setFollowingActiveTab] = useState("User");
  const [isOptionsShown, setIsOptionsShown] = useState(true);
  const [blockUserModal, setBlockUserModal] = useState(false);
  const [restrictUserModal, setRestrictUserModal] = useState(false);
  const [reportUserModal, setReportUserModal] = useState(true);

  return (
    <div className="flex">
      <section className="mt-6 border-r border-r-grey_10">
        <div className="flex items-center px-4 mb-6">
          <CollectionsSearchInput placeholder="Search user list" />

          <div
            className="flex items-center border border-grey_10 drop-shadow-7xl
          py-2 px-3 bg-secondary-btn rounded-3xl cursor-pointer"
          >
            <Typography variant="subtitle3">Create New List</Typography>
            <Image src={plus} alt="plus" />
          </div>
        </div>

        <div className="flex items-center  w-full justify-between border-b border-grey_10">
          {collectionsTab?.map(({ id, name }) => {
            return (
              <div
                key={id}
                onClick={() => setIsActiveTab(name)}
                className={`w-1/2 cursor-pointer pb-1 ${
                  isActiveTab === name ? "border-b-2 border-b-grey_800" : ""
                }`}
              >
                <Typography
                  className={`text-center ${
                    isActiveTab === name ? "text-grey_800" : "text-grey_500"
                  }`}
                  variant="subtitle3"
                >
                  {name}
                </Typography>
              </div>
            );
          })}
        </div>

        {dummyCollectionData?.map(
          ({ id, folderName, noOfPosts, noOfUsers }) => {
            return (
              <div
                key={id}
                className="flex items-center justify-between py-[14px] px-4 border-b border-grey_10"
              >
                <section>
                  <Typography variant="titleTwo" className="text-grey_900 pb-1">
                    {folderName}
                  </Typography>
                  <Typography variant="p2" className="text-grey_400">
                    {noOfUsers}
                  </Typography>
                </section>

                <Typography variant="p2" className="text-grey_400">
                  {noOfPosts}
                </Typography>
              </div>
            );
          }
        )}
      </section>

      <section className="w-[632px]">
        <Typography variant="titleOne" className="my-[30px] text-grey_900 pl-4">
          Following
        </Typography>
        <div className="flex items-center  w-full justify-between border-b border-grey_10">
          {followingTabs?.map(({ id, name }) => {
            return (
              <div
                key={id}
                onClick={() => setFollowingActiveTab(name)}
                className={`w-1/2 cursor-pointer pb-1 ${
                  followingActiveTab === name
                    ? "border-b-2 border-b-grey_800"
                    : ""
                }`}
              >
                <Typography
                  className={`text-center ${
                    followingActiveTab === name
                      ? "text-grey_800"
                      : "text-grey_500"
                  }`}
                  variant="subtitle3"
                >
                  {name}
                </Typography>
              </div>
            );
          })}
        </div>

        <div className="w-full ">
          <CollectionsSearchInput
            className="m-4 w-full"
            placeholder="Search user"
          />
        </div>

        <div className="flex flex-wrap w-full">
          <CollectionCard
            profileName="Priscilia yummy"
            tag="@yummychill54"
            displayImage={suggestionOne}
            avatar={defaultLiveAvatar}
            ifSubscribe
            blockUserModal={blockUserModal}
            setBlockUserModal={setBlockUserModal}
            restrictUserModal={restrictUserModal}
            setRestrictUserModal={setRestrictUserModal}
            reportUserModal={reportUserModal}
            setReportUserModal={setReportUserModal}
          />

          <CollectionCard
            profileName="Priscilia yummy"
            tag="@yummychill54"
            displayImage={suggestionOne}
            avatar={defaultAvatar}
            ifRenew
          />

          <CollectionCard
            profileName="Priscilia yummy"
            tag="@yummychill54"
            displayImage={suggestionOne}
            avatar={defaultLiveAvatar}
            ifSubscribedForFree
          />
          <CollectionCard
            profileName="Priscilia yummy"
            tag="@yummychill54"
            displayImage={suggestionOne}
            avatar={defaultAvatar}
            ifSubscribedWithOption
          />
          <CollectionCard
            profileName="Priscilia yummy"
            tag="@yummychill54"
            displayImage={suggestionOne}
            avatar={defaultAvatar}
            ifSubscribedWithOption
            setIsOptionsShown={setIsOptionsShown}
            isOptionsShown={isOptionsShown}
          />
        </div>
      </section>
    </div>
  );
};

export default Collections;
