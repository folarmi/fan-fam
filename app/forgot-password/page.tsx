/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import Typography from "../components/Typography";
import CustomButton from "../components/CustomButton";

import AuthLayout from "../components/AuthLayout";
import Link from "next/link";

const ForgotPassword = () => {
  const { control } = useForm();
  return (
    <AuthLayout>
      <form className="">
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

        <CustomButton variant="primary" className="shadow-custom mb-6">
          Send Link
        </CustomButton>

        <Typography variant="p3" className="pb-10 text-center">
          Already have an account?{" "}
          <Link href="/sign-in">
            <span className="text-primary">Sign in</span>
          </Link>
        </Typography>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
