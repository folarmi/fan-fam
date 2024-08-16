import React from "react";
import blueBackArrow from "@/public/icons/blueBackArrow.svg";
import Image from "next/image";

import Typography from "@/app/components/forms/Typography";
import Link from "next/link";

type AccountBackButton = {
  showBack?: boolean;
};

const AccountBackButton = ({ showBack = true }: AccountBackButton) => {
  return (
    //
    <div
      className={`w-full bg-white py-3 px-4 border
 border-grey_20 shadow-custom-combined  ${!showBack && "h-14"}`}
    >
      {showBack && (
        <div
          className={`border w-[72px] border-blue_500 rounded-3xl py-2 px-3 drop-shadow-6xl bg-subscribe-gradient shadow-inner-white
        `}
        >
          <Link
            href="/dashboard/settings/account"
            className="cursor-pointer flex items-center"
          >
            <Image src={blueBackArrow} alt="blueBackArrow" />

            <Typography variant="subtitle3" className="text-blue_500">
              Back
            </Typography>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountBackButton;
