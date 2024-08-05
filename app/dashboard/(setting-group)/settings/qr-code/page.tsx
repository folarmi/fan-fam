import AccountBackButton from "@/app/components/forms/AccountBackButton";
import CustomButton from "@/app/components/forms/CustomButton";
import Typography from "@/app/components/forms/Typography";
import qrCode from "@/public/QRCode.svg";
import Image from "next/image";
import React from "react";

const QRCode = () => {
  return (
    <div className="">
      <AccountBackButton showBack={false} />
      <Typography variant="p2" className="text-grey_800 pt-4 pl-4">
        This QR code will lead to your profile page when scanned
      </Typography>

      <div className="flex flex-col items-center justify-center mt-6">
        <Image src={qrCode} alt="qrCode" />

        <div className="mt-8 flex w-1/4">
          <CustomButton primaryButtonSize="xs">Download QR code</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
