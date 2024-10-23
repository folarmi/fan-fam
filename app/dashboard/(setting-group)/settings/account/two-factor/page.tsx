"use client";

import AccountBackButton from "@/app/components/forms/AccountBackButton";
import CustomSwitchButton from "@/app/components/forms/CustomSwitchButton";
import Typography from "@/app/components/forms/Typography";
import { sampleTwoFactor, twoFAInstructions } from "@/app/data";
import React, { useState } from "react";
import copyIcon from "@/public/icons/copyIcon.svg";
import Image from "next/image";
import CustomInput from "@/app/components/forms/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/app/components/forms/CustomButton";
import Modal from "@/app/components/modals/Modal";
import TwoFAModal from "@/app/components/modals/TwoFAModal";

const TwoFactor = () => {
  const { control } = useForm();
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const toggleTwoFactorModal = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  return (
    <div>
      <AccountBackButton />

      <section className="mt-4 ml-4">
        {sampleTwoFactor?.map(({ id, name, desc }) => {
          return (
            <div key={id} className="flex items-center justify-between mb-6">
              <div>
                <Typography
                  variant="subtitle2"
                  className="text-grey_800 pb-[2px]"
                >
                  {name}
                </Typography>
                <Typography variant="p2" className="text-grey_500">
                  {desc}
                </Typography>
              </div>

              <CustomSwitchButton />
            </div>
          );
        })}

        <div className="mt-6">
          <div className="flex flex-col rounded-xl items-center justify-center bg-primary py-5">
            <Typography variant="p2" className="text-white">
              2FA Key
            </Typography>
            <div className="flex items-center">
              <Typography variant="titleOne" className="text-slate_100 pr-1">
                345678987654
              </Typography>
              <Image src={copyIcon} alt="copyIcon" />
            </div>
          </div>
        </div>

        <div className="mt-5 border border-slate_600 rounded-xl p-5">
          <Typography variant="titleTwo" className="text-bloomTextHeading pb-1">
            Instructions
          </Typography>
          <ul>
            {twoFAInstructions.map(({ id, text }) => {
              return (
                <li className="list-disc marker:text-slate_1100 ml-5" key={id}>
                  <Typography variant="p1" className="text-slate_1100 pb-1">
                    {text}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </div>

        <form className="mt-8">
          <CustomInput
            label="Input Code"
            name="input code"
            control={control}
            type="text"
          />

          <div className="flex items-center justify-center">
            <CustomButton
              variant="primary"
              className="shadow-custom mt-10 mb-4 px-16"
            >
              Set 2FA
            </CustomButton>
          </div>
        </form>

        {
          <Modal show={twoFactorAuth} toggleModal={toggleTwoFactorModal}>
            <div className="p-4">
              <TwoFAModal toggleModal={toggleTwoFactorModal} />
            </div>
          </Modal>
        }
      </section>
    </div>
  );
};

export default TwoFactor;
