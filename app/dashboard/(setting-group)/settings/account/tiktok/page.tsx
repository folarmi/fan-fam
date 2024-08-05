import AccountBackButton from "@/app/components/forms/AccountBackButton";
import React from "react";
import tiktok from "@/public/icons/tiktok.svg";
import SocialButton from "@/app/components/forms/SocialButton";

const TikTok = () => {
  return (
    <div>
      <AccountBackButton />
      <SocialButton buttonText="Sign in to TikTok" image={tiktok} />
    </div>
  );
};

export default TikTok;
