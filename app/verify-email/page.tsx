/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Typography from "../components/forms/Typography";
import Cookies from "js-cookie";

import AuthLayout from "../components/AuthLayout";
import CustomInput from "../components/forms/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../components/forms/CustomButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      email: searchParams.get("fanfam") || "",
      token: searchParams.get("mafanf") || "",
    },
  });

  const verifyUserMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await api.get(
        `auth/verify-token?mafanf=${data.token}&fanfam=${data.email}`
      );
      return response;
    },
    onSuccess: (data) => {
      if (data?.data?.statusCode === 991) {
        localStorage.setItem("token", data?.data?.data?.accessToken);
        localStorage.setItem("refreshToken", data?.data?.data?.refreshToken);
        router.push("/dashboard");
      }
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.data?.message);
    },
  });

  const submitForm = (data: any) => {
    verifyUserMutation.mutate(data);
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(submitForm)} className="mt-5">
        <Typography variant="h5" className="pb-4">
          Verify Email
        </Typography>

        <CustomInput
          // label="Email"
          name="email"
          control={control}
          readOnly={true}
        />
        <CustomButton
          loading={verifyUserMutation.isPending}
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

// http://localhost:3456/api/v1/auth/verify-token?mafanf=5Ektz%2BjGyVPUERhYQq6XBZsAyrNecQis%2FYy4W%2FAc%2FQs&fanfam=4yS4pme0op75OjwxrWS7Kx3XdHnsxEPurkU8X6JArog
// http://localhost:3456/api/v1/auth/verify-token?mafanf=FANFAM-20240725R820ABR9ZN&fanfam=paradiseUser@mailinator.com
