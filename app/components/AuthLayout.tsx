import Image from "next/image";
import React from "react";
import paradise from "@/public/paradise.svg";
import PhotoFrame from "../test/page";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-cover bg-center custom-background h-screen w-screen max-w[1440px] overflow-x-hidden">
      {/* <p className="pl-8 pt-8 uppercase">Fan fam</p> */}
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

{
  /* <div className="relative h-[69px] w-[292px]">
  <Image
    src={displayImage}
    alt={`suggestionOne`}
    className="w-full h-full object-cover"
  />

  <section className="">
    <div
      onClick={toggleVerticalOptions}
      className="absolute top-2 right-3 cursor-pointer"
    >
      <Image
        src={whiteVerticalIcon}
        alt={`whiteVerticalIcon`}
        className="w-6 h-6"
      />
    </div>
    {showVerticalOptions && (
      <div className="flex flex-col absolute bg-red-200 w-[360px] top-10 right-0 translate-x-[50%] rounded-2xl border-2 border-white z-50">
        <ModalContent content={collectionsOptions} />
      </div>
    )}
  </section>
</div> */
}
