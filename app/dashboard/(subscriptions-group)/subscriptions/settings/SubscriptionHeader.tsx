import React from "react";

import Typography from "@/app/components/forms/Typography";

type SubscriptionHeaderProps = {
  text: string;
};

const SubscriptionHeader = ({ text }: SubscriptionHeaderProps) => {
  return (
    //
    <div
      className={`w-full bg-white py-[18px] pl-7 border
 border-grey_20 shadow-custom-combined h-14 `}
    >
      <Typography variant="subtitle1" className="text-black">
        {text}
      </Typography>
    </div>
  );
};

export default SubscriptionHeader;
