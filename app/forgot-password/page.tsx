/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import CustomInput from "../components/forms/CustomInput";
import { useForm } from "react-hook-form";
import Typography from "../components/forms/Typography";
import CustomButton from "../components/forms/CustomButton";

import AuthLayout from "../components/AuthLayout";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";
import { toast } from "react-toastify";
import { useAppDispatch } from "../lib/hook";
import {
  updateEmailType,
  updateUserEmail,
} from "../lib/features/auth/authSlice";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const { control, handleSubmit, getValues } = useForm();
  const dispatch = useAppDispatch();

  const forgotPasswordMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post("auth/forgot-password", data);
      return response;
    },
    onSuccess: (data) => {
      if (data?.data?.statusCode === 991) {
        toast("Kindly check your email for a password reset link");
        dispatch(updateUserEmail(getValues("email")));
        dispatch(updateEmailType("Reset"));
        router.push("/email-sent");
      }
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.data?.message);
    },
  });

  const submitForm: any = (data: any) => {
    const formValues = {
      email: data?.email,
    };
    forgotPasswordMutation.mutate(formValues);
  };
  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(submitForm)}>
        <Typography variant="h5" className="pb-4">
          Forgot password
        </Typography>

        <Typography variant="p1" className="pb-8">
          Enter the email you use to create your Fan Fam account and we will
          send you a password reset link.
        </Typography>
        <CustomInput
          label="Email"
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
        />

        <CustomButton
          loading={forgotPasswordMutation.isPending}
          variant="primary"
          className="shadow-custom mb-6"
        >
          Send Link
        </CustomButton>

        <Typography variant="p3" className="pb-10 text-center text-grey_500">
          Already have an account?{" "}
          <Link href="/">
            <span className="text-primary">Sign in</span>
          </Link>
        </Typography>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
