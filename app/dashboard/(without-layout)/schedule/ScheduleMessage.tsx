import CommentBox from "@/app/components/CommentBox";
import Typography from "@/app/components/forms/Typography";
import ScheduleButton from "@/app/components/molecules/ScheduleButton";
import { notificationSampleData } from "@/app/data";
import Image from "next/image";
import React from "react";
import verifyBlue from "@/public/icons/verifyBlue.svg";
import horizontalMore from "@/public/icons/ashHorizontalMore.svg";
import CustomCheckBox from "@/app/components/forms/CustomCheckBox";
import CollectionRadioButton from "@/app/components/forms/CollectionRadioButton";

const ScheduleMessage = ({
  setShowMessagePost,
}: {
  setShowMessagePost: (show: boolean) => void;
}) => {
  return (
    <div>
      <CommentBox />

      <section>
        <div className="flex justify-between items-center px-2">
          <Typography variant="subtitle2" className="text-grey_500">
            Select Mass Message Participants
          </Typography>
          <Typography variant="subtitle2" className="text-grey_500">
            0 Selected
          </Typography>
        </div>

        {notificationSampleData.map(
          ({ id, name, message, photo, tag, time }) => {
            return (
              <div
                key={id}
                className="flex items-center justify-between p-4 border-b border-grey_10"
              >
                <div className="flex items-center">
                  <Image src={photo} alt="demo" className="w-10 h-10" />

                  <div className="ml-3">
                    <div className="flex items-center mb-1">
                      <Typography variant="titleTwo" className="text-grey_900">
                        {name}
                      </Typography>

                      <Image src={verifyBlue} alt="demo" className=" h-4 w-4" />
                    </div>
                    <Typography variant="p2" className="text-grey_400">
                      {tag}
                    </Typography>
                  </div>
                </div>

                <CollectionRadioButton />
              </div>
            );
          }
        )}
      </section>

      <ScheduleButton isPost={false} setShowMessagePost={setShowMessagePost} />
    </div>
  );
};

export default ScheduleMessage;
