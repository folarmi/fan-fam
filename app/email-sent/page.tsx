/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Typography from "../components/forms/Typography";

import AuthLayout from "../components/AuthLayout";
import Link from "next/link";
import { useAppSelector } from "../lib/hook";
import { RootState } from "../lib/store";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../lib/axios";

const EmailSent = () => {
  const { userEmail, emailType } = useAppSelector(
    (state: RootState) => state.auth
  );

  const resendVerificationLinkMutation = useMutation({
    mutationFn: async () => {
      const response = await api.post(`auth/resend-token?email=${userEmail}`);
      return response;
    },
    onSuccess: (data) => {
      if (data?.data?.statusCode === 991) {
        toast("Kindly check your email for a verification link");
        // dispatch(updateUserEmail(getValues("email")));
        // dispatch(updateEmailType("Reset"));
        // router.push("/email-sent");
      }
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.data?.message);
    },
  });

  return (
    <AuthLayout>
      <form className="">
        <Typography variant="h5" className="pb-4">
          Email sent!
        </Typography>
        <Typography variant="p1" className="pb-8 w-[385px]">
          We have sent an email at {userEmail} Check your inbox and follow the
          instruction to {emailType === "Signup" ? "verify" : "reset"} your{" "}
          {emailType === "Signup" ? "email" : "password"}.
        </Typography>

        <Typography
          onClick={() => resendVerificationLinkMutation.mutate()}
          variant="p2"
          className="pt-10 pb-4 text-grey_500 cursor-pointer"
        >
          Did not receive an email?
          <span className="text-primary"> Resend email</span>
        </Typography>

        <Link href="/forgot-password">
          <Typography variant="p2" className="text-grey_500 cursor-pointer">
            Wrong email address?
            <span className="text-primary">Change email address</span>
          </Typography>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default EmailSent;
