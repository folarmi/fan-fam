/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Typography from "../components/forms/Typography";

import AuthLayout from "../components/AuthLayout";
import CustomInput from "../components/forms/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../components/forms/CustomButton";
import { useSearchParams } from "next/navigation";

const VerifyEmail = () => {
  const { control, handleSubmit } = useForm();
  const searchParams = useSearchParams();

  console.log(searchParams.get("mafanf") || "");
  console.log(searchParams.get("fanfam"));

  return (
    <AuthLayout>
      <form className="mt-5">
        <Typography variant="h5" className="pb-4">
          Verify Email
        </Typography>

        <CustomInput
          label="Phone Number"
          name="phoneNumber"
          control={control}
          readOnly={true}
        />
        <CustomButton
          // loading={signInMutation.isPending}
          variant="primary"
          className="shadow-custom mb-6"
        >
          Verify Email
        </CustomButton>
      </form>
    </AuthLayout>
  );
};

export default VerifyEmail;
