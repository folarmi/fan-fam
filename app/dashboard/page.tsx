import React from "react";
import SearchInput from "../components/SearchInput";
import CommentBox from "../components/CommentBox";
import Timeline from "../components/cards/Timeline";
import defaultLiveAvatar from "@/public/defaultLiveAvatar.svg";
import defaultAvatar from "@/public/defaultAvatar.svg";
import timelineImage from "@/public/timelineImage.svg";
import timelineTwo from "@/public/timelineTwo.svg";
import TimelineWithoutText from "../components/cards/TimelineWithoutText";

const Home = () => {
  return (
    <div>
      <SearchInput />
      <CommentBox />
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
      />
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
      />
      <TimelineWithoutText
        profileName="Priscilia yummy"
        avatar={defaultLiveAvatar}
        handle="@yummychill54 ."
        time="3 h ago"
        timeLineImage={timelineImage}
      />
    </div>
  );
};

export default Home;
