"use client";

import React from "react";

import CustomInput from "@/app/components/forms/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/app/components/forms/CustomButton";
import AccountBackButton from "@/app/components/forms/AccountBackButton";

const ChangePassword = () => {
  const { control, handleSubmit } = useForm();

  return (
    <div>
      <AccountBackButton />

      <form className="mt-[22px] mx-4">
        <CustomInput
          label="Current password"
          name="currentPassword"
          control={control}
          type="password"
          className="mb-4"
        />

        <CustomInput
          label="New password"
          name="newPassword"
          type="password"
          control={control}
          className="mb-4"
        />

        <CustomInput
          label="Confirm new password"
          name="confirmPassword"
          type="password"
          control={control}
          //   className="mb-4"
        />

        <div className="drop-shadow-5x shadow-post-button w-[104px] text-sm">
          <CustomButton primaryButtonSize="xs" className="">
            Save password
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
