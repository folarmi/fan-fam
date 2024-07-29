"use client";

import SearchInput from "@/app/components/SearchInput";
import React, { useState } from "react";
import suggestTwo from "@/public/suggestTwo.svg";
import Image from "next/image";
import IconAndNumber from "@/app/components/IconAndNumber";
import profilePicture from "@/public/profilePicture.svg";
import location from "@/public/icons/location.svg";
import circleStar from "@/public/icons/circleStar.svg";
import moreIcon from "@/public/icons/moreIcon.svg";
import blueVerifiedTick from "@/public/blueVerifiedTick.svg";
import Pictures from "@/public/icons/pictures";
import Videos from "@/public/icons/videos";
import Live from "@/public/icons/live";
import ProfileLike from "@/public/icons/profileLike";
import CircleChat from "@/public/icons/circleChat";
import CirclePay from "@/public/icons/circlePay";
import copy from "@/public/copy.svg";
import defaultAvatar from "@/public/defaultAvatar.svg";
import { commentOptions } from "@/app/data";
import Post from "@/app/components/Post";
import Replies from "@/app/components/Replies";
import Media from "@/app/components/Media";
import Link from "next/link";
import SubscriptionButton from "@/app/components/molecules/SubscriptionButton";
import CustomButton from "@/app/components/forms/CustomButton";
import CustomInput from "@/app/components/forms/CustomInput";
import { useForm } from "react-hook-form";
import verifyBlue from "@/public/icons/verifyBlue.svg";
import PaymentMethod from "@/app/components/PaymentMethod";
import ModalContent from "@/app/components/modals/ModalContent";
import Typography from "@/app/components/forms/Typography";
import AmountInput from "@/app/components/forms/AmountInput";

const Profile = () => {
  const { control } = useForm();
  const [isExpanded, setIsExpanded] = useState(false);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Post",
    },
    {
      id: 2,
      name: "Media",
    },
    {
      id: 3,
      name: "Replies",
    },
    {
      id: 2,
      name: "Likes",
    },
  ]);
  const [isActiveTab, setIsActiveTab] = useState("Post");
  const [commentModal, setCommentModal] = useState(false);
  const [linkToProfileModal, setLinkToProfileModal] = useState(false);
  const [subscription, setSubscription] = useState(true);
  const [tipModal, setTipModal] = useState(false);

  const toggleCommentModal = () => {
    setCommentModal(!commentModal);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleLinkToProfile = () => {
    setLinkToProfileModal(!linkToProfileModal);
  };

  const toggleTipModal = () => {
    setTipModal(!tipModal);
  };

  return (
    <div>
      <SearchInput ifBlur={false} />
      <div className="w-full relative">
        <Image src={suggestTwo} alt="demo" className="w-full" />
        <div className="flex items-center absolute top-3 pl-4">
          <IconAndNumber
            Icon={Pictures}
            number={24}
            numberColor="#ffffff"
            className="cursor-pointer"
          />
          <IconAndNumber Icon={Videos} number={56} numberColor="#ffffff" />
          <IconAndNumber Icon={Live} number={16} numberColor="#ffffff" />
          <IconAndNumber
            Icon={ProfileLike}
            number={847}
            numberColor="#ffffff"
          />
        </div>

        <section className="px-4 bg-grey_20 drop-shadow-4xl mb-2">
          <div className="relative flex items-center">
            <div className="absolute -top-8">
              <Image src={profilePicture} alt="profilePicture" />
            </div>
            <div className="w-full mt-6 flex items-center justify-between">
              <div className="flex items-center ml-28">
                <Image src={location} alt="location" />
                <Typography className="text-grey_400 pl-1" variant="p3">
                  Nigeria
                </Typography>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="cursor-pointer">
                  <CircleChat className="cursor-pointer hover:fill-blue_200" />
                </div>

                <div className="cursor-pointer" onClick={toggleTipModal}>
                  <CirclePay className="cursor-pointer hover:fill-blue_200" />
                </div>

                {tipModal && (
                  <div className="flex flex-col absolute left-[55%] top-[100%] bg-modal-gradient shadow-triple w-[368px] rounded-2xl border-2 border-white z-50 p-6">
                    <Typography variant="titleOne" className="text-grey_800">
                      Send Tip
                    </Typography>
                    <div className="flex my-6">
                      <Image
                        src={defaultAvatar}
                        alt="demo"
                        className="w-10 h-10"
                      />

                      <div className="ml-3">
                        <div className="flex items-center mb-1">
                          <Typography
                            variant="titleTwo"
                            className="text-grey_900"
                          >
                            Priscilia yummy
                          </Typography>

                          <Image
                            src={verifyBlue}
                            alt="demo"
                            className="ml-[1px] h-4 w-4"
                          />
                        </div>

                        <Typography variant="p2" className="text-grey_400">
                          @yummychill54
                        </Typography>
                      </div>
                    </div>

                    <AmountInput />
                    <PaymentMethod />
                    <CustomInput
                      name="Folder"
                      control={control}
                      label="Message(Optional)"
                    />

                    <div className="flex items-center ml-[141px]">
                      <CustomButton
                        variant="secondary"
                        className="text-xs mr-6 w-[84px]"
                      >
                        Cancel
                      </CustomButton>
                      <CustomButton
                        variant="primary"
                        className="text-xs px-3 w-[84px]"
                      >
                        Send Tip
                      </CustomButton>
                    </div>
                  </div>
                )}

                <Image src={circleStar} alt="circleStar" />

                <div className="border border-blue_500 rounded-3xl py-2 px-3 drop-shadow-6xl bg-subscribe-gradient shadow-inner-white">
                  <Link
                    href="/dashboard/profile/edit-profile"
                    className="cursor-pointer"
                  >
                    <Typography variant="subtitle3" className="text-blue_500">
                      {isActiveTab === "Media" ? "Edit profile" : "Subscribe"}
                    </Typography>
                  </Link>
                </div>

                <div className="relative">
                  <Image
                    src={moreIcon}
                    alt="horizontalMore"
                    className="cursor-pointer"
                    onClick={toggleCommentModal}
                    loading="lazy"
                  />
                  {commentModal && (
                    <div className="mt-5 flex flex-col absolute right-[95%] top-[100%] bg-modal-gradient shadow-triple w-[262px] rounded-2xl border-2 border-white z-50">
                      <div className="flex items-center justify-between py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6">
                        <Typography variant="p2" className="text-grey_700">
                          Copy link to profile
                        </Typography>
                        <Image src={copy} alt="copy" />
                      </div>
                      <ModalContent content={commentOptions} />
                    </div>
                  )}
                  {/* {linkToProfileModal && (
                    <div className="flex flex-col absolute -right-[100%] top-[140%] bg-modal-gradient shadow-triple w-[262px] rounded-2xl border-2 border-white">
                      <div className="flex items-center justify-between py-[9px] hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6">
                        <Typography variant="p2" className="text-grey_700">
                          Copy link to profile
                        </Typography>
                        <Image src={copy} alt="copy" />
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="flex items-center mt-4">
              <Typography
                variant="titleTwo"
                className="text-grey_800 font-bold pr-1"
              >
                Priscilia yummy
              </Typography>
              <Image src={blueVerifiedTick} alt="verify" />
            </div>

            <Typography variant="p2" className="text-grey_800 pt-[2px]">
              @yummychill54
            </Typography>

            <Typography variant="p2" className="text-grey_700 py-4">
              Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
              mi. Nulla sed cursus quis mas sa nato que at adip iscing{" "}
              {isExpanded && (
                <>
                  <span>
                    {" "}
                    .... Duis lacinia ligula sit amet lacus egestas, non cursus
                    magna vestibulum. Sed malesuada, eros ut blandit vehicula,
                    nisi sapien volutpat turpis, non fermentum lectus ligula sit
                    amet odio. Suspendisse potenti. Nullam aliquet tincidunt
                    erat, ut condimentum ligula luctus eu. Nam vitae turpis non
                    urna fermentum volutpat sit amet a odio. Sed auctor, ex nec
                    blandit aliquam, nisl nunc dignissim lorem, sed efficitur
                    orci justo ut justo.{" "}
                  </span>
                </>
              )}
              {isActiveTab === "Replies" && (
                <span
                  onClick={toggleReadMore}
                  className="font-medium text-sm text-blue_500 cursor-pointer"
                >
                  read {isExpanded ? "less" : "more"}
                </span>
              )}
            </Typography>
          </section>
        </section>

        {subscription && (
          <div className="bg-white drop-shadow-4xl mb-2 py-2">
            <section className="border-b border-grey_10 pb-4 px-4">
              <Typography variant="subtitle2">Current subscription</Typography>
              <Typography variant="p3" className="pb-2 pt-3 text-grey_500">
                Ends: 10 June 2024
              </Typography>

              <SubscriptionButton textOne="RENEW" textTwo="$15 per month" />
            </section>

            <section className="pt-4 px-4">
              <Typography variant="subtitle2" className="pb-4">
                Subscription bundles
              </Typography>

              <SubscriptionButton
                textOne="1 month"
                textTwo="$15"
                className="mb-4"
              />
              <SubscriptionButton
                textOne="2 months"
                textTwo="$100"
                className="mb-4"
              />
              <SubscriptionButton
                textOne="12 months"
                textTwo="$150"
                className="mb-2"
              />
            </section>
          </div>
        )}

        <div className="flex items-center justify-between bg-grey_20 border-b border-grey_40 mt-2">
          {tabs.map(({ id, name }) => {
            return (
              <div
                key={id}
                className="cursor-pointer"
                onClick={() => setIsActiveTab(name)}
              >
                <Typography
                  variant="subtitle3"
                  className={`px-12 pt-3 pb-1 ${
                    isActiveTab === name
                      ? "text-grey_800 border-b-2 border-grey_800"
                      : "text-grey_500"
                  }`}
                >
                  {name}
                </Typography>
              </div>
            );
          })}
        </div>

        {isActiveTab === "Post" && <Post />}
        {isActiveTab === "Replies" && <Replies />}
        {isActiveTab === "Media" && <Media />}
      </div>
    </div>
  );
};

export default Profile;
