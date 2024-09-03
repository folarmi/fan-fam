import React from "react";
import Typography from "../forms/Typography";
import BlueBorderedButton from "../forms/BlueBorderedButton";
import CustomButton from "../forms/CustomButton";

const AddToSchedule = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <div className="p-4 bg-white rounded-lg w-[358px] z-50">
      <Typography variant="titleOne">Add to Schedule</Typography>
      <Typography variant="p2" className="text-grey_800 pt-4">
        Choose a date and time for your scheduled post or message.
      </Typography>

      <div className="flex justify-between items-center my-8">
        <div className="bg-grey_10 rounded-md p-2 w-1/2 mr-4">
          <input
            aria-label="Date"
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            className="bg-transparent text-grey_800 font-normal text-sm"
          />
        </div>

        <div className="bg-grey_10 rounded-md p-2 w-1/2">
          <input
            aria-label="time"
            type="time"
            defaultValue={new Date().toISOString().split("T")[1]}
            className="bg-transparent text-grey_800 font-normal text-sm"
          />
        </div>
      </div>

      <BlueBorderedButton text="Make a post" className="text-center" />
      <BlueBorderedButton
        text="Send mass message"
        className="text-center mt-4 mb-10"
      />

      <div className="flex justify-end ml-auto">
        <CustomButton
          onClick={toggleModal}
          variant="secondary"
          className="text-xs w-[84px]"
        >
          Cancel
        </CustomButton>
      </div>
    </div>
  );
};

export default AddToSchedule;
