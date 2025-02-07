"use client";

import React from "react";

import CustomInput from "@/app/components/forms/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/app/components/forms/CustomButton";
import AccountBackButton from "@/app/components/forms/AccountBackButton";
import { useCustomMutation } from "@/app/hooks/apiCalls";
import { RootState } from "@/app/lib/store";
import { useAppSelector } from "@/app/lib/hook";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const { userObject } = useAppSelector((state: RootState) => state.auth);

  const submitForm = (data: any) => {
    console.log(data);
    const formData = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
      email: userObject.email,
    };

    changePasswordMutation.mutate(formData);
  };

  const changePasswordMutation = useCustomMutation({
    endpoint: "auth/update-password",
    successMessage: (data: any) => data?.data?.message,
    errorMessage: (error: any) => error,
    onSuccessCallback: (data) => {
      toast(data?.message);
      router.push("/dashboard/settings/account");
    },
  });

  return (
    <div>
      <AccountBackButton />

      <form className="mt-[22px] mx-4" onSubmit={handleSubmit(submitForm)}>
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
          <CustomButton
            primaryButtonSize="xs"
            className="px-4"
            disabled={changePasswordMutation.isPending}
          >
            Save password
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
