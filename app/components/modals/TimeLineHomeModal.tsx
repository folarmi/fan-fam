import React from "react";
import Typography from "../forms/Typography";
import Image from "next/image";
import copy from "@/public/copy.svg";
import ModalContent from "./ModalContent";

const TimeLineHomeModal = () => {
  return (
    <>
      <div className="flex items-center justify-between py-2 hover:bg-blue_200 hover:rounded-lg cursor-pointer px-6">
        <Typography variant="p2" className="text-grey_700">
          Copy link to post
        </Typography>
        <Image src={copy} alt="copy" />
      </div>
      <ModalContent
        content={[
          { id: 1, name: "Add Bookmark" },
          { id: 2, name: "Repost" },
        ]}
      />
    </>
  );
};

export default TimeLineHomeModal;
