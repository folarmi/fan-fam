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
import Poll from "@/app/components/molecules/Poll";
// import TimeLineHomeModal from "../components/modals/TimeLineHomeModal";

const Home = () => {
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [showMoreModalTwo, setShowMoreModalTwo] = useState(false);
  const [ifUserIsCreatingPoll, setIfUserIsCreatingPoll] = useState(false);
  const [pollOptions, setPollOptions] = useState([
    {
      id: "1",
      name: "Option One",
    },
    {
      id: "2",
      name: "Option Two",
    },
  ]);
  const [activePoll, setActivePoll] = useState(pollOptions[0].name);

  return (
    <div>
      <SearchInput />
      {ifUserIsCreatingPoll ? (
        <Poll
          pollOptions={pollOptions}
          setPollOptions={setPollOptions}
          activePoll={activePoll}
          setActivePoll={setActivePoll}
        />
      ) : (
        <CommentBox setIfUserIsCreatingPoll={setIfUserIsCreatingPoll} />
      )}

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
