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
    <div>
      <CommentBox />
      <Image src={timelineImage} alt="timeline" />
      <ScheduleButton isPost={true} setShowSchedulePost={setShowSchedulePost} />
    </div>
  );
};

export default SchedulePost;
