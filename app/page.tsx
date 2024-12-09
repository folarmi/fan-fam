/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import api from "./lib/axios";
import AuthLayout from "./components/AuthLayout";
import CustomInput from "./components/forms/CustomInput";
import Checkbox from "./components/Checkbox";
import Link from "next/link";
import Typography from "./components/forms/Typography";
import CustomButton from "./components/forms/CustomButton";
import TextBetweenLines from "./components/molecules/TextBetweenLines";
import SocialMedia from "./components/SocialMedia";
import { useCustomMutation } from "./hooks/apiCalls";
import {
  fetchDeviceIP,
  getBrowserInfo,
  getDeviceOS,
  getPlatformFromUAParser,
  getReadableLocation,
} from "./utils/helper";
import { useDispatch } from "react-redux";
import { updateUserObject } from "./lib/features/auth/authSlice";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const platform = getPlatformFromUAParser();
  const browser = getBrowserInfo();
  const [ip, setIp] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIP = async () => {
      const deviceIP = await fetchDeviceIP();
      setIp(deviceIP);
    };

    fetchIP();
  }, []);

  useEffect(() => {
    getReadableLocation()
      .then((location) => setLocation(location))
      .catch((err) => setError(err.message));
  }, []);

  const signInMutation = useCustomMutation({
    endpoint: `auth/login`,
    successMessage: (data: any) => data?.message,
    errorMessage: (error: any) => {
      toast.error(error);
    },
    onSuccessCallback: (data) => {
      const userObject = {
        email: data?.data?.email,
        role: data?.data?.role,
        usid: data?.data?.usid,
      };

      localStorage.setItem("token", data?.data?.accessToken);
      localStorage.setItem("refreshToken", data?.data?.refreshToken);
      dispatch(updateUserObject(userObject));
      router.push("/dashboard");
    },
  });

  const submitForm = (data: any) => {
    const formValues = {
      email: data.email,
      password: data.password,
      deviceMeta: {
        deviceOS: getDeviceOS(),
        deviceIP: ip,
        location: location,
        platform: platform,
        browser: browser,
      },
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

        <div className="w-full flex justify-between items-center mb-10">
          <Checkbox
            text="Remember me"
            control={control}
            name="termsAndCondition"
          />
          {/* <p>dfghjm</p> */}
          <Link href="forgot-password">
            <Typography
              variant="subtitle2"
              className="text-blue_500 whitespace-nowrap"
            >
              Forgot password?
            </Typography>
          </Link>
        </div>

        <CustomButton
          loading={signInMutation.isPending}
          variant="primary"
          className="shadow-custom mb-6 px-6 w-full"
        >
          Sign in
        </CustomButton>

        <TextBetweenLines text="or" />

        <SocialMedia />

        <Link href="/sign-up">
          <Typography variant="p3" className="pb-10 text-center text-grey_500">
            Don't have an account?{" "}
            <span className="text-primary">Create one</span>
          </Typography>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
