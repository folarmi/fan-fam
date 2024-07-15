"use client";

import React from "react";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../components/CustomButton";
import AuthLayout from "../components/AuthLayout";
import Typography from "../components/Typography";

const CreateNewPassword = () => {
  const { control } = useForm();
  return (
    <AuthLayout>
      <Typography variant="h5">Create new password</Typography>
      <Typography variant="p1" className="pt-4 pb-8">
        Create your new password and make sure it is different from your old
        password.
      </Typography>
      <form className="">
        <CustomInput
          label="New Password"
          name="newPassword"
          control={control}
          rules={{ required: "New Password is required" }}
        />

        <CustomInput
          label="Retype Password"
          name="retypePassword"
          control={control}
          rules={{ required: "Email is required" }}
        />

        <CustomButton variant="primary" className="shadow-custom mb-6">
          Reset Password
        </CustomButton>
      </form>
    </AuthLayout>
  );
};

export default CreateNewPassword;
