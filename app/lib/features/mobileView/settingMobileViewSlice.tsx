import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SettingProp {
  showOnMobile: boolean;
  showAccountOnMobile: boolean;
}

const initialState: SettingProp = {
  showOnMobile: false,
  showAccountOnMobile: false,
};

export const settingMobileViewSlice = createSlice({
  name: "settingMobileView",
  initialState,
  reducers: {
    updateShowOnMobile: (state, action: PayloadAction<boolean>) => {
      state.showOnMobile = action.payload;
    },
    updateAccountShowOnMobile: (state, action: PayloadAction<boolean>) => {
      state.showAccountOnMobile = action.payload;
    },
  },
});

export const { updateShowOnMobile, updateAccountShowOnMobile } =
  settingMobileViewSlice.actions;

export default settingMobileViewSlice.reducer;
