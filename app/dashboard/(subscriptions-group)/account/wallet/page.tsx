import React from "react";
import SubscriptionHeader from "../settings/SubscriptionHeader";
import Typography from "@/app/components/forms/Typography";
import CustomButton from "@/app/components/forms/CustomButton";
import { walletSampleData } from "@/app/data";
import CustomSwitchButton from "@/app/components/forms/CustomSwitchButton";
import EmptyState from "@/app/components/molecules/EmptyState";

const Wallet = () => {
  return (
    <div>
      <SubscriptionHeader />

      <div className="bg-grey_10 p-4">
        <div className="flex items-center justify-between">
          <Typography variant="subtitle2" className="text-grey_800">
            Wallet Credit
          </Typography>

          <CustomButton primaryButtonSize="xs" className="px-3">
            Add Funds to Wallet
          </CustomButton>
        </div>

        <Typography variant="h6" className="py-4">
          $0.00
        </Typography>
      </div>

      <div className="mt-1 px-4">
        {walletSampleData.map(({ id, name }) => {
          return (
            <div key={id} className="flex items-center justify-between mt-3">
              <Typography variant="p3" className="text-grey_600">
                {name}
              </Typography>

              <CustomSwitchButton isChecked />
            </div>
          );
        })}
      </div>

      <Typography variant="subtitle2" className="text-grey_800 pt-6 pl-4">
        Transaction History
      </Typography>

      <EmptyState
        text="No transactions made yet, when you make a transaction, 
it would display here"
        width="400"
      />
    </div>
  );
};

export default Wallet;
