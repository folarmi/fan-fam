import React from "react";
import picture from "@/public/icons/picture.svg";
import smile from "@/public/icons/smile.svg";
import poll from "@/public/icons/poll.svg";
import record from "@/public/icons/record.svg";
import Image from "next/image";
import CustomButton from "./CustomButton";

// bg-grey_20
const CommentBox = () => {
  return (
    <div className="mt-1 bg-grey_20 p-4 drop-shadow-3xl shadow-header-md">
      <textarea
        placeholder="Write a Post.."
        cols={5}
        rows={5}
        className="w-full outline-none pt-3 bg-grey_20"
      ></textarea>
      <div className="flex items-center justify-between py-[5px]">
        <div className="flex items-center gap-x-3">
          <Image src={picture} alt="picture" />
          <Image src={smile} alt="smile" />
          <Image src={poll} alt="poll" />
          <Image src={record} alt="record" />
        </div>

        <div>
          <CustomButton variant="disabled" className="w-[62px] bg-grey_600">
            Post
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
