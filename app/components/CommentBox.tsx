"use client";

import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Picture from "@/public/icons/picture";
import Smile from "@/public/icons/smile";
import Poll from "@/public/icons/poll";
import Record from "@/public/icons/record";

type CommentBoxProps = {
  ifPoll?: boolean;
  ifRecord?: boolean;
};

const CommentBox = ({ ifPoll = true, ifRecord = true }: CommentBoxProps) => {
  const [text, setText] = useState("");
  const [buttonType, setButtonType] = useState("disabled");
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div className="mb-2 p-4 border border-grey_10 bg-grey_20 drop-shadow-4xl">
      <textarea
        placeholder="Write a Post.."
        cols={5}
        rows={5}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full outline-none pt-3 bg-grey_20"
      ></textarea>
      <div className="flex items-center justify-between py-[5px]">
        <div className="flex items-center gap-x-3">
          <Picture isActive={isActive} />
          <Smile isActive={isActive} />
          {ifPoll && <Poll isActive={isActive} />}
          {ifRecord && <Record isActive={isActive} />}
        </div>

        <div className="w-[62px]">
          <CustomButton
            variant={isActive ? "primary" : "disabled"}
            className="w-full bg-grey_600"
          >
            Post
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
