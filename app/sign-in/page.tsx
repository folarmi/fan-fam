/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Cookies from "js-cookie";
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
import { useRouter } from "next/navigation";
import api from "../lib/axios";
import { toast } from "react-toastify";

const SignIn = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm();

  const signInMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post("auth/login", data);
      return response;
    },
    onSuccess: (data) => {
      if (data?.data?.statusCode === 991) {
        // Set the token in a cookie
        Cookies.set(
          "auth-token",
          data?.data?.data?.accessToken
          // {
          //   secure: true,
          // }
        );
        Cookies.set("refresh-token", data?.data?.data?.refreshToken);
        router.push("/dashboard");
      }
      console.log(data?.data?.data?.accessToken);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.data?.message);
    },
  });
  // 090564783546
  const submitForm = (data: any) => {
    const formValues = {
      email: data.email,
      password: data.password,
    };

    signInMutation.mutate(formValues);
  };
  return (
    <AuthLayout>
      <form className="" onSubmit={handleSubmit(submitForm)}>
        <CustomInput
          label="Email"
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
        />

        <CustomInput
          label="Password"
          name="password"
          control={control}
          type="password"
          rules={{ required: "Password is required" }}
          className="-mb-2"
        />

        <div className="flex items-center justify-between mb-10">
          <Checkbox
            text="Remember me"
            control={control}
            name="termsAndCondition"
          />
          <Link href="forgot-password">
            <Typography variant="subtitle2" className="text-blue_500">
              Forgot password?
            </Typography>
          </Link>
        </div>

        <CustomButton
          loading={signInMutation.isPending}
          variant="primary"
          className="shadow-custom mb-6"
        >
          Sign in
        </CustomButton>

        <TextBetweenLines text="or" />

        <SocialMedia />

        <Typography variant="p3" className="pb-10 text-center text-grey_500">
          Don't have an account?{" "}
          <Link href="sign-up">
            <span className="text-primary">Create one</span>
          </Link>
        </Typography>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
