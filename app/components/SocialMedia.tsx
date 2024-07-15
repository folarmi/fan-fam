import Image from "next/image";
import React from "react";
import gmail from "@/public/gmail.svg";
import facebook from "@/public/facebook.svg";

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center mb-10">
      <Image
        src={facebook}
        alt="gmail logo"
        className="w-[72px] h-[72px] mr-8"
      />
      <Image src={gmail} alt="facebook logo" className="w-[72px] h-[72px]" />
    </div>
  );
};

export default SocialMedia;
