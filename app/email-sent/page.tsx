/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Typography from "../components/Typography";
import CustomButton from "../components/CustomButton";

import AuthLayout from "../components/AuthLayout";
import Link from "next/link";

const EmailSent = () => {
  return (
    <AuthLayout>
      <form className="">
        <Typography variant="h5" className="pb-4">
          Email sent!
        </Typography>

        <Typography variant="p1" className="pb-8 w-[385px]">
          We have sent an email at nathanjones234@gmail.com. Check your inbox
          and follow the information to reset your password.
        </Typography>

        <Typography variant="p2" className="pt-10 pb-4 text-grey_500">
          Did not receive an email address?
          <Link href="/create-new-password">
            <span className="text-primary"> Resend email</span>
          </Link>
        </Typography>

        <Typography variant="p2" className="text-grey_500">
          Wrong email address?
          <Link href="/create-new-password">
            <span className="text-primary">Change email address</span>
          </Link>
        </Typography>
      </form>
    </AuthLayout>
  );
};

export default EmailSent;
