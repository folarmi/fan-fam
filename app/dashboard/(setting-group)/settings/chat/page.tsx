import AccountBackButton from "@/app/components/forms/AccountBackButton";
import CustomSwitchButton from "@/app/components/forms/CustomSwitchButton";
import Typography from "@/app/components/forms/Typography";
import React from "react";

const ChatSettings = () => {
  return (
    <div>
      <AccountBackButton showBack={false} />

      <div className="flex items-center pb-2 border-b pt-4 border-grey_10 pl-4">
        <Typography variant="p2" className="text-grey_800 pr-6">
          Don’t accept messages without a tip from free followers whom you don’t
          follow back
        </Typography>
        <CustomSwitchButton />
      </div>

      <div className="flex items-center justify-between mt-4 ml-4">
        <div>
          <Typography variant="subtitle2" className="text-grey_800 pb-[2px]">
            Welcome message
          </Typography>
          <Typography variant="p2" className="text-grey_500">
            Send a welcome message to new fans
          </Typography>
        </div>

        <CustomSwitchButton />
      </div>
    </div>
  );
};

export default ChatSettings;
