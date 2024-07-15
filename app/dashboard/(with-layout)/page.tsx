"use client";

import React, { useState } from "react";
// import SearchInput from "../components/SearchInput";
// import CommentBox from "../components/CommentBox";
// import Timeline from "../components/cards/Timeline";
import defaultLiveAvatar from "@/public/defaultLiveAvatar.svg";
import defaultAvatar from "@/public/defaultAvatar.svg";
import timelineImage from "@/public/timelineImage.svg";
import timelineTwo from "@/public/timelineTwo.svg";
import SearchInput from "@/app/components/SearchInput";
import CommentBox from "@/app/components/CommentBox";
import Timeline from "@/app/components/cards/Timeline";
import TimeLineHomeModal from "@/app/components/modals/TimeLineHomeModal";
// import TimeLineHomeModal from "../components/modals/TimeLineHomeModal";

const Home = () => {
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [showMoreModalTwo, setShowMoreModalTwo] = useState(false);
  const handleBlur = () => {
    console.log("Text area lost focus");
  };

  return (
    <div>
      <SearchInput />
      <CommentBox />
      <div className="relative">
        <Timeline
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
          timeLineImage={timelineImage}
          ifParagraph={true}
          showModal={showMoreModal}
          setShowModal={setShowMoreModal}
          TimeLineModal={<TimeLineHomeModal />}
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
          showModal={setShowMoreModalTwo}
          setShowModal={showMoreModalTwo}
        />
      </div>
      <Timeline
        profileName="Priscilia yummy"
        avatar={defaultLiveAvatar}
        handle="@yummychill54 ."
        time="3 h ago"
        timeLineImage={timelineImage}
        ifParagraph={false}
      />
    </div>
  );
};

export default Home;
