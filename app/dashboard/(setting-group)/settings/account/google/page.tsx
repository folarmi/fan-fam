import AccountBackButton from "@/app/components/forms/AccountBackButton";
import React from "react";
import gmail from "@/public/gmail.svg";
import SocialButton from "@/app/components/forms/SocialButton";

const Google = () => {
  return (
    <div>
      <AccountBackButton />
      <SocialButton buttonText="Sign in to Google" image={gmail} />
    </div>
  );
};

export default Google;
