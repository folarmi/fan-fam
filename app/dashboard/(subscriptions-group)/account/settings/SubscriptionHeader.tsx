import React from "react";

import Typography from "@/app/components/forms/Typography";
import { AccountMobileBackButton } from "@/app/components/molecules/AccountMobileBackButton";

type SubscriptionHeaderProps = {
  text?: string | React.ReactNode;
};

const SubscriptionHeader = ({ text }: SubscriptionHeaderProps) => {
  return (
    //
    <div
      className={`w-full bg-white py-[18px] md:pl-7 border
 border-grey_20 shadow-custom-combined h-14 flex items-center`}
    >
      <AccountMobileBackButton />
      <Typography variant="subtitle1" className="text-black">
        {text}
      </Typography>
    </div>
  );
};

export default SubscriptionHeader;
