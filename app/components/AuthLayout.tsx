import Image from "next/image";
import React from "react";
import paradise from "@/public/paradise.svg";
import PhotoFrame from "../test/page";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-cover bg-center custom-background h-screen w-screen max-w[1440px] overflow-x-hidden">
      <div className="bg-white/40 flex justify-center m-4 lg:m-12 rounded-3xl drop-shadow-3xl h-[670px]">
        <div className=" hidden lg:flex flex-col w-4/6 h-full">
          <div className="flex items-center mt-20 ml-[87px]">
            <Image src={paradise} alt="paradise logo" loading="lazy" />
          </div>
          <div className="mt-auto justify-start">
            <PhotoFrame />
          </div>
        </div>

        <div className="px-5 lg:px-0 w-full lg:w-2/6 lg:pr-[106px] pt-10 lg:pt-14">
          <div className="lg:hidden w-full mb-14 flex justify-center items-center">
            <Image
              src={paradise}
              alt="paradise logo"
              className="w-[262px] "
              loading="lazy"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
