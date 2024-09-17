import React from "react";
import DayAndTimeInput from "../forms/DayAndTimeInput";
import CustomButton from "../forms/CustomButton";

type ScheduleButtonProps = {
  setShowSchedulePost?: (value: boolean) => void;
  setShowMessagePost?: (value: boolean) => void;
  isPost: boolean;
};

const ScheduleButton: React.FC<ScheduleButtonProps> = ({
  setShowSchedulePost,
  setShowMessagePost,
  isPost,
}) => {
  // Dynamic onClick handler
  const handleClick = () => {
    if (isPost) {
      setShowSchedulePost(false);
    } else {
      setShowMessagePost(false);
    }
  };

  return (
    <div className="flex justify-between items-center border border-grey-50 rounded-lg p-4 my-3 mx-4">
      <DayAndTimeInput />
      <CustomButton
        primaryButtonSize="xs"
        className="rounded-lg px-3"
        onClick={handleClick} // Use the dynamic handler
      >
        {isPost ? "Schedule Post" : "Schedule Message"}{" "}
        {/* Dynamic button text */}
      </CustomButton>
    </div>
  );
};

export default ScheduleButton;
