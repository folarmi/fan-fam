"use client";

import React, { useState } from "react";
import CustomInput from "../components/forms/CustomInput";
import { useForm } from "react-hook-form";
import Typography from "../components/forms/Typography";
import CustomButton from "../components/forms/CustomButton";
import TextBetweenLines from "../components/molecules/TextBetweenLines";
import AuthLayout from "../components/AuthLayout";
import Checkbox from "../components/Checkbox";
import SocialMedia from "../components/SocialMedia";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../lib/hook";
import {
  updateEmailType,
  updateUserEmail,
} from "../lib/features/auth/authSlice";
import { phoneRegex } from "../utils/helper";

const Signup = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const signUpMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post("auth/register", data);
      return response;
    },
    onSuccess: (data) => {
      if (data?.data?.statusCode === 991) {
        toast("Kindly check your email for a verification link");
        dispatch(updateUserEmail(data?.data?.data?.email));
        dispatch(updateEmailType("Signup"));
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
      password: data?.password,
      phoneNumber: data?.phoneNumber,
      role: "VIEWER",
    };
    signUpMutation.mutate(formValues);
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(submitForm)}>
        <CustomInput
          label="Phone Number"
          name="phoneNumber"
          control={control}
          rules={{
            required: "Phone Number is required",
            pattern: {
              value: phoneRegex,
              message: "Please enter a valid phone number",
            },
          }}
        />

        <CustomInput
          label="Email"
          name="email"
          type="email"
          control={control}
          rules={{ required: "Email is required" }}
        />

        <CustomInput
          label="Password"
          name="password"
          control={control}
          type="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />

        <Checkbox
          className="mb-10 lg:mb-0"
          text="By checking this box, I certify that I am at least 18-years old, have the capacity to enter into legally binding contracts, and have read and agree to the Terms of Service"
          control={control}
          name="conditions"
          rules={{ required: "Please agree to the terms and conditions" }}
        />

        <CustomButton
          loading={signUpMutation.isPending}
          variant="primary"
          className="shadow-custom mt-10 mb-6"
        >
          Signup
        </CustomButton>

        <TextBetweenLines text="or" />

        <SocialMedia />

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

export default Signup;
