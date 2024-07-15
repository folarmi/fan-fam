/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import Typography from "../components/Typography";
import CustomButton from "../components/CustomButton";
import TextBetweenLines from "../components/molecules/TextBetweenLines";

import AuthLayout from "../components/AuthLayout";
import Checkbox from "../components/Checkbox";
import SocialMedia from "../components/SocialMedia";
import Link from "next/link";

const SignIn = () => {
  const { control } = useForm();
  return (
    <AuthLayout>
      <form className="">
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
          <Checkbox text="Remember me" />
          <Link href="forgot-password">
            <Typography variant="subtitle2" className="text-blue_500">
              Forgot password?
            </Typography>
          </Link>
        </div>

        <CustomButton variant="primary" className="shadow-custom mb-6">
          Sign in
        </CustomButton>

        <TextBetweenLines text="or" />

        <SocialMedia />

        <Typography variant="p3" className="pb-10 text-center">
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
