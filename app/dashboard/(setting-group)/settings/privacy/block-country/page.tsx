"use client";

import AccountBackButton from "@/app/components/forms/AccountBackButton";
import CustomButton from "@/app/components/forms/CustomButton";
import CustomSelect from "@/app/components/forms/CustomSelect";
import React from "react";

const BlockCountry = () => {
  return (
    <div>
      <AccountBackButton />

      <div className="mt-4 ml-4">
        <CustomSelect
          ifLabel
          label="Block access to your profile and posts from selected countries"
        />

        <div className="mt-8 w-1/6">
          <CustomButton disabled={true}>Save</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BlockCountry;
