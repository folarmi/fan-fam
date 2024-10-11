import CommentBox from "@/app/components/CommentBox";
import Typography from "@/app/components/forms/Typography";
import React from "react";
import timelineImage from "@/public/timelineImage.svg";
import Image from "next/image";
import ScheduleButton from "@/app/components/molecules/ScheduleButton";

const SchedulePost = ({
  setShowSchedulePost,
}: {
  setShowSchedulePost: any;
}) => {
  return (
    <div className="flex flex-col">
      <div className="order-2 md:order-1">
        <CommentBox />
      </div>
      <div className="order-3 md:order-2">
        <Image src={timelineImage} alt="timeline" />
      </div>
      <div className="order-1 md:order-3">
        <ScheduleButton
          isPost={true}
          setShowSchedulePost={setShowSchedulePost}
        />
      </div>
    </div>
  );
};

export default SchedulePost;
