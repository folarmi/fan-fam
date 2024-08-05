import AccountBackButton from "@/app/components/forms/AccountBackButton";
import React from "react";
import facebook from "@/public/facebook.svg";
import SocialButton from "@/app/components/forms/SocialButton";

const Facebook = () => {
  return (
    <div>
      <AccountBackButton />
      <SocialButton buttonText="Sign in to Facebook" image={facebook} />
    </div>
  );
};

export default Facebook;
