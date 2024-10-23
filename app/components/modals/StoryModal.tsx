"use client";

import React, { useEffect, useState } from "react";
import closeIcon from "@/public/icons/closeIcon.svg";
import crop from "@/public/icons/crop.svg";
import textBlock from "@/public/icons/textBlock.svg";
import more from "@/public/icons/more.svg";
import undo from "@/public/icons/undo.svg";
import redo from "@/public/icons/redo.svg";
import sticker from "@/public/icons/sticker.svg";
import Image from "next/image";
import timelineImage from "@/public/timelineImage.svg";
import Modal from "./Modal";
import EmojiModal from "./EmojiModal";
import { Emoji } from "emoji-picker-react";

const StoryModal = ({ toggleModal, uploadedFile }: any) => {
  const [emojiModal, setEmojiModal] = useState(false);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  useEffect(() => {
    if (uploadedFile) {
      // Create the object URL
      const objectUrl = URL.createObjectURL(uploadedFile);
      setImageURL(objectUrl);

      // Clean up the object URL when the component is unmounted or when uploadedFile changes
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [uploadedFile]);

  const toggleEmojiModal = () => {
    setEmojiModal(!emojiModal);
  };

  return (
    <div className="h-screen w-screen bg-black_400">
      <div className="flex items-center justify-between pt-4 mx-4">
        <div className="flex items-center gap-x-4">
          <Image src={closeIcon} alt="closeIcon" onClick={toggleModal} />
          <Image src={undo} alt="undo" />
          <Image src={redo} alt="redo" />
        </div>

        <div className="flex items-center gap-x-4">
          <Image src={sticker} alt="sticker" />
          <Image src={crop} alt="crop" />
          <Image src={textBlock} alt="textBlock" />
          <div className="cursor-pointer" onClick={toggleEmojiModal}>
            <Image src={more} alt="more" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-full">
        {uploadedFile && imageURL && (
          <>
            <Image
              src={imageURL}
              //   src={timelineImage}
              width={500}
              height={300}
              alt="uploadedFile"
              className="h-auto "
            />
            <p className="">
              My Favorite emoji is:
              <Emoji unified={selectedEmoji} size={25} />{" "}
            </p>
          </>
        )}
      </div>

      <Modal show={emojiModal} toggleModal={toggleEmojiModal}>
        <div className="p-4">
          <StoryModal
            toggleModal={toggleEmojiModal}
            uploadedFile={uploadedFile}
          />
        </div>
      </Modal>

      {emojiModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={toggleEmojiModal}
        >
          <div className="bg-white" onClick={(e) => e.stopPropagation()}>
            <EmojiModal
              toggleModal={toggleEmojiModal}
              setSelectedEmoji={setSelectedEmoji}
              selectedEmoji={selectedEmoji}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryModal;
