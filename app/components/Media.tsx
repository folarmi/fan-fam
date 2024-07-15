"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Image from "next/image";
import filter from "@/public/icons/filter.svg";
import mediaToggle from "@/public/icons/mediaToggle.svg";
import switchList from "@/public/icons/switchList.svg";
import gridOne from "@/public/gridOne.svg";
import gridTwo from "@/public/gridTwo.svg";
import gridThree from "@/public/gridThree.svg";
import gridFour from "@/public/gridFour.svg";
import gridFive from "@/public/gridFive.svg";
import gridSix from "@/public/gridSix.svg";
import Timeline from "./cards/Timeline";
import defaultAvatar from "@/public/defaultAvatar.svg";
import timelineImage from "@/public/timelineImage.svg";
import timelineTwo from "@/public/timelineTwo.svg";
import { sortOptions } from "../data";
import RadioButton from "./RadioButtonLabel";
import AudioMedia from "./AudioMedia";
import AudioFilesWhenList from "./AudioFilesWhenList";
import defaultLiveAvatar from "@/public/defaultLiveAvatar.svg";
import VideoMedia from "./VideoMedia";
import PotraitOrLandScapeModal from "./PotraitOrLandScapeModal";

const Media = () => {
  const [mediaTabs, setMediaTabs] = useState([
    {
      id: 1,
      name: "All",
      number: "",
    },
    {
      id: 2,
      name: "Photos",
      number: "25",
    },
    {
      id: 3,
      name: "Videos",
      number: "36",
    },
    {
      id: 4,
      name: "Audio",
      number: "8",
    },
  ]);
  const [isMediaTabActive, setIsMediaTabActive] = useState("Photos");
  const [ifList, setIfList] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [potraitOrLandScape, setPotraitOrLandScape] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    gridOne,
    timelineTwo,
    gridThree,
    gridFour,
    gridFive,
    gridSix,
    gridOne,
    gridTwo,
    gridThree,
    gridFour,
    gridFive,
    gridSix,
  ];

  const toggleList = () => {
    setIfList(!ifList);
  };

  const toggleSortModal = () => {
    setSortModal(!sortModal);
  };

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const toggleProtraitModal = (image: any) => {
    setPotraitOrLandScape(!potraitOrLandScape);
    setCurrentImage(image);
  };

  return (
    <div>
      <div className={`py-4 flex items-center px-4 justify-between`}>
        <div className="flex items-center">
          {mediaTabs.map(({ id, name, number }) => {
            return (
              <div
                onClick={() => setIsMediaTabActive(name)}
                className={`flex items-center cursor-pointer px-[14px] py-[7px] rounded-3xl hover:bg-blue_200 ${
                  isMediaTabActive === name ? "bg-blue_200" : "bg-white"
                }`}
                key={id}
              >
                <Typography
                  variant="p2"
                  className={`pr-1 ${
                    isMediaTabActive === name
                      ? "text-blue_500"
                      : "text-grey_400"
                  }`}
                >
                  {name}
                </Typography>
                {number && (
                  <Typography
                    className={`${
                      isMediaTabActive === name
                        ? "text-blue_500"
                        : "text-grey_400"
                    }`}
                    variant="subtitle2"
                  >
                    {number}
                  </Typography>
                )}
              </div>
            );
          })}
        </div>

        <section className="flex items-center">
          <div
            onClick={toggleSortModal}
            className="flex items-center border border-grey_10 drop-shadow-7xl
        py-2 px-3 bg-secondary-btn
         rounded-3xl cursor-pointer mr-6 relative"
          >
            <Typography variant="subtitle3" className="pr-1">
              Sort
            </Typography>
            <Image src={filter} alt="filter" loading="lazy" />
          </div>

          {sortModal && (
            <div className="flex flex-col left-[80%] top-[22%] absolute bg-modal-gradient shadow-triple w-[262px] rounded-2xl border-2 border-white z-50">
              {sortOptions?.map(({ id, name }) => {
                return (
                  <div
                    className="hover:bg-blue_200 hover:rounded-lg cursor-pointer"
                    key={id}
                  >
                    <RadioButton
                      label={name}
                      name="options"
                      value={name}
                      checked={selectedValue === name}
                      onChange={handleChange}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {ifList ? (
            <Image
              onClick={toggleList}
              src={switchList}
              alt="switchList"
              className="cursor-pointer"
            />
          ) : (
            <Image
              onClick={toggleList}
              src={mediaToggle}
              alt="mediaToggle"
              className="cursor-pointer"
            />
          )}
        </section>
      </div>

      {!ifList && isMediaTabActive !== "Audio" && (
        <div className="flex items-center flex-wrap gap-[1px] cursor-pointer">
          {images.map((src, index) => (
            <div
              className="w-[210px] h-[210px] overflow-hidden"
              key={index}
              onClick={() => toggleProtraitModal(src)}
            >
              <Image
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      {ifList && isMediaTabActive === "All" && (
        <>
          <div className="relative">
            <Timeline
              profileName="Priscilia yummy"
              avatar={defaultAvatar}
              handle="@yummychill54 ."
              time="3 h ago"
              paragraphOne="Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
              paragraphTwo="Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
              timeLineImage={timelineImage}
              ifParagraph={true}
              ifIcon={false}
              bgColor="#fafafa"
              //   setShowMoreModal={setShowMoreModalTwo}
              //   showMoreModal={showMoreModalTwo}
            />
          </div>

          <div className="relative">
            <Timeline
              profileName="Priscilia yummy"
              avatar={defaultAvatar}
              handle="@yummychill54 ."
              time="3 h ago"
              paragraphOne="Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
              paragraphTwo="Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
              timeLineImage={timelineTwo}
              ifParagraph={true}
              bgColor="#fafafa"
              //   setShowMoreModal={setShowMoreModalTwo}
              //   showMoreModal={showMoreModalTwo}
            />
          </div>
        </>
      )}

      {!ifList && isMediaTabActive === "Audio" && <AudioMedia />}

      {ifList && isMediaTabActive === "Audio" && (
        <>
          <div className="relative">
            <AudioFilesWhenList
              profileName="Priscilia yummy"
              avatar={defaultLiveAvatar}
              handle="@yummychill54 ."
              time="3 h ago"
              paragraphOne="   Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
              paragraphTwo="   Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
              // showMoreModal={showMoreModal}
              // setShowMoreModal={setShowMoreModal}
            />
          </div>

          <div className="relative">
            <AudioFilesWhenList
              profileName="Priscilia yummy"
              avatar={defaultLiveAvatar}
              handle="@yummychill54 ."
              time="3 h ago"
              paragraphOne="   Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
              paragraphTwo="   Lorem ipsum dolor sit amet consectetur. Amet dolor arcu praesent
        mi. Nulla sed cursus quis mas sa nato que at adip iscing. Phar
        etra justo pretium sollic itudin digni ssim non solli citudin sit
        pellentesque ipsum. Molestie dui tempus nec maecenas eget justo
        dictum a."
              // showMoreModal={showMoreModal}
              // setShowMoreModal={setShowMoreModal}
            />
          </div>
        </>
      )}

      {isMediaTabActive === "Videos" && <VideoMedia />}

      {potraitOrLandScape && (
        <PotraitOrLandScapeModal
          potraitOrLandScapeModal={potraitOrLandScape}
          toggleProtraitModal={toggleProtraitModal}
          image={currentImage}
        />
      )}
    </div>
  );
};

export default Media;
