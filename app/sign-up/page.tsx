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

const Signup = () => {
  const { control } = useForm();
  return (
    <AuthLayout>
      <form className="">
        <CustomInput
          label="User name"
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
        />

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
        />

        <Checkbox
          className="mb-10 lg:mb-0"
          text="By checking this box, I certify that I am at least 18-years old, have the capacity to enter into legally binding contracts, and have read and agree to the Terms of Service"
        />

        <CustomButton variant="primary" className="shadow-custom mb-6">
          Signup
        </CustomButton>

        <TextBetweenLines text="or" />

        <SocialMedia />

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

export default Signup;
