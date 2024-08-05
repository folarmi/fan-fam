"use client";

import AccountBackButton from "@/app/components/forms/AccountBackButton";
import CustomButton from "@/app/components/forms/CustomButton";
import CustomCheckBox from "@/app/components/forms/CustomCheckBox";
import Typography from "@/app/components/forms/Typography";
import React, { useState } from "react";

const ConfirmDelete = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <AccountBackButton />

      <section className=" pl-4">
        <Typography variant="subtitle2" className="text-gray_100 py-4">
          Confirm account deletion
        </Typography>

        <Typography variant="p2" className="text-grey_800 leading-5 pb-4">
          You will still have access to your account for the next 30 days after
          which your account will be permanently deleted.
        </Typography>

        <CustomCheckBox
          checked={isSelected}
          onChange={() => setIsSelected(!isSelected)}
          labelText="I understand that my account cannot be recovered and will be deleted on the 18th of April 2024."
          labelStyles="text-sm text-grey_800 pt-1"
          iflabel
        />

        <div className="w-1/3 mt-8">
          <CustomButton disabled={true} variant="error">
            Delete Account
          </CustomButton>
        </div>
      </section>
    </div>
  );
};

export default ConfirmDelete;
