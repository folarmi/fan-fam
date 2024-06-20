"use client";

import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Picture from "@/public/icons/picture";
import Smile from "@/public/icons/smile";
import Poll from "@/public/icons/poll";
import Record from "@/public/icons/record";

const CommentBox = () => {
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
    <div className="mt-1 p-4 bg-grey_20 drop-shadow-4xl">
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
          <Poll isActive={isActive} />
          <Record isActive={isActive} />
        </div>

        <div>
          <CustomButton
            variant={isActive ? "primary" : "disabled"}
            className="w-[62px] bg-grey_600"
          >
            Post
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
