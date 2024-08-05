import AccountBackButton from "@/app/components/forms/AccountBackButton";
import React from "react";
import twitter from "@/public/icons/twitter.svg";
import SocialButton from "@/app/components/forms/SocialButton";

const TikTok = () => {
  return (
    <div>
      <AccountBackButton />
      <SocialButton buttonText="Sign in to X App" image={twitter} />
    </div>
  );
};

export default TikTok;
