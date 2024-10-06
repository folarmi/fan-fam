import AccountBackButton from "@/app/components/forms/AccountBackButton";
import CollectionRadioButton from "@/app/components/forms/CollectionRadioButton";
import Typography from "@/app/components/forms/Typography";
import { displaySettings } from "@/app/data";

import React from "react";

const Display = () => {
  return (
    <div>
      <AccountBackButton showBack={false} showMobileBack moduleName="Display" />

      <section className="pl-4 mt-5">
        {displaySettings?.map(({ items, groupName }) => {
          return (
            <div key={groupName} className="mb-3">
              <Typography variant="subtitle2" className="text-grey_800">
                {groupName}
              </Typography>

              {items?.map(({ id, name }) => {
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between py-2 border-b border-grey_10"
                  >
                    <Typography variant="p2" className="text-grey_500">
                      {name}
                    </Typography>
                    <CollectionRadioButton />
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Display;
