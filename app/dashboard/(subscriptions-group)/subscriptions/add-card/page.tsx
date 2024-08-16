"use client";

import React, { useState } from "react";
import AddCardHeader from "./AddCardHeader";
import visa from "@/public/icons/visa.svg";
import masterCard from "@/public/icons/masterCard.svg";
import americanExpress from "@/public/icons/americanExpress.svg";
import paypal from "@/public/icons/paypal.svg";
import Image from "next/image";
import CardSample from "./CardSample";
import Typography from "@/app/components/forms/Typography";
import AddNewCardForm from "./AddNewCardForm";

const AddCard = () => {
  const [isCardAdded, setIsCardAdded] = useState(false);
  const [addNewCard, setAddNewCard] = useState(true);

  return (
    <div className="">
      <AddCardHeader addNewCard={addNewCard} setAddNewCard={setAddNewCard} />

      <div className="bg-grey_10 p-4 mt-4 mx-[14px]">
        <Typography variant="p2" className="text-grey_800  pb-4">
          We are fully compliant with Payment Card Industry Data Security
          Standards. The charges on your credit card statement will appear as
          FanFam
        </Typography>

        <div className="flex items-center gap-x-2">
          <Image src={visa} alt="visa" className="w-12 h-4" />
          <Image src={masterCard} alt="masterCard" className="w-10 h-6" />
          <Image
            src={americanExpress}
            alt="americanExpress"
            className="w-8 h-8"
          />
          <Image src={paypal} alt="visa" className="w-[92px] h-6" />
        </div>
      </div>

      {!isCardAdded && !addNewCard && (
        <p
          onClick={() => setIsCardAdded(true)}
          className="text-grey_800 font-normal text-sm text-center pt-[70px] cursor-pointer"
        >
          No Card added, click add card to add your cards
        </p>
      )}

      {isCardAdded && !addNewCard && (
        <div
          onClick={() => setIsCardAdded(false)}
          className="mt-6 cursor-pointer mx-[14px]"
        >
          <CardSample
            cardImage={visa}
            status=" Status: Active / Default Card"
          />

          <CardSample
            setAsDefault
            cardImage={masterCard}
            status="Status: Inactive"
          />
        </div>
      )}

      {addNewCard && <AddNewCardForm />}
    </div>
  );
};

export default AddCard;
