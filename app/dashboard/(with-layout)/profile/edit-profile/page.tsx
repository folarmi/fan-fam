"use client";

import React from "react";
import suggestTwo from "@/public/suggestTwo.svg";
import editIcon from "@/public/icons/editIcon.svg";
import profilePicture from "@/public/profilePicture.svg";
import Image from "next/image";
import Link from "next/link";
import moreIcon from "@/public/icons/moreIcon.svg";
import CustomInput from "@/app/components/forms/CustomInput";
import { useForm } from "react-hook-form";
import CustomTextBox from "@/app/components/forms/CustomTextBox";
import Typography from "@/app/components/forms/Typography";

const EditProfile = () => {
  const { control } = useForm();
  return (
    <div className="mb-2">
      <div className="w-full h-full relative">
        <Image src={suggestTwo} alt="demo" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={editIcon} alt="demo" className="w-6 h-6" />
        </div>
      </div>

      <div className="relative flex items-center justify-between px-4 bg-grey_20 drop-shadow-4xl">
        <Image src={profilePicture} alt="demo" />
        <div className="absolute inset-0 flex items-center justify-start mx-14">
          <Image src={editIcon} alt="demo" className="w-6 h-6" />
        </div>

        <section className="flex items-center">
          <div className="border border-blue_500 rounded-3xl py-2 px-3 drop-shadow-6xl bg-subscribe-gradient shadow-inner-white">
            <Link
              href="/dashboard/profile"
              className="block w-full h-full cursor-pointer"
            >
              <Typography variant="subtitle3" className="text-blue_500">
                Save profile
              </Typography>
            </Link>
          </div>

          <Image
            src={moreIcon}
            alt="horizontalMore"
            className="cursor-pointer"
            loading="lazy"
          />
        </section>
      </div>

      <form className="bg-grey_20 drop-shadow-4xl mt-2 px-4 pb-[61px]">
        <CustomInput
          label="Full Name"
          name="fullName"
          control={control}
          // rules={{ required: "Password is required" }}
        />

        <CustomInput
          label="Display name"
          name="displayName"
          control={control}
          // rules={{ required: "Password is required" }}
        />

        <CustomInput
          label="Email"
          name="email"
          control={control}
          // rules={{ required: "Password is required" }}
        />

        <CustomInput
          label="Location"
          name="location"
          control={control}
          placeholder="Location"
          // rules={{ required: "Password is required" }}
        />

        <CustomInput
          label="Interest"
          name="location"
          control={control}
          placeholder="What are your interests?"
          // rules={{ required: "Password is required" }}
        />

        <CustomTextBox
          label="Bio"
          name="bio"
          control={control}
          placeholder="What are your interests?"
        />

        <CustomInput
          label="Website"
          name="website"
          control={control}
          placeholder="https://"
          // rules={{ required: "Password is required" }}
        />
      </form>
    </div>
  );
};

export default EditProfile;
