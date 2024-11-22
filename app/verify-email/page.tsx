"use client";

import React, { Suspense } from "react"; // Import Suspense
import Typography from "../components/forms/Typography";
import AuthLayout from "../components/AuthLayout";
import CustomInput from "../components/forms/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../components/forms/CustomButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const router = useRouter();

  // Wrap useSearchParams with Suspense
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailForm />
    </Suspense>
  );
};

const VerifyEmailForm = () => {
  const searchParams = useSearchParams(); // Extracted to be inside Suspense
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: searchParams.get("fanfam") || "",
      token: searchParams.get("mafanf") || "",
    },
  });

  const verifyUserMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(
        `auth/verify-token?mafanf=${searchParams.get(
          "mafanf"
        )}&fanfam=${searchParams.get("fanfam")}`,
        data
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

  const userAgent = navigator.userAgent;
  const platform = navigator.platform;

  console.log(userAgent, platform);

  const submitForm = (data: any) => {
    const formData = {
      deviceOS: "Windows 10",
      deviceIP: "192.168.1.41",
      location: "New York, USA",
      platform: "Desktop",
      browser: "Chrome",
    };

    verifyUserMutation.mutate(formData);
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(submitForm)} className="mt-5">
        <Typography variant="h5" className="pb-4">
          Verify Email
        </Typography>

        <CustomInput name="email" control={control} readOnly={true} />
        <CustomButton
          loading={verifyUserMutation.isPending}
          variant="primary"
          className="shadow-custom mb-6 px-6"
        >
          Verify Email
        </CustomButton>
      </form>
    </AuthLayout>
  );
};

export default VerifyEmail;
