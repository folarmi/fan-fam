import React from "react";
import Typography from "./Typography";
import Image from "next/image";
import plus from "@/public/icons/plus.svg";

const AddToScheduleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center border border-grey_10 drop-shadow-7xl
          py-2 px-3 bg-secondary-btn
           rounded-3xl cursor-pointer mx-4 mt-4"
    >
      <Typography variant="subtitle3">Add to Schedule</Typography>
      <Image src={plus} alt="plus" />
    </div>
  );
};

export default AddToScheduleButton;
