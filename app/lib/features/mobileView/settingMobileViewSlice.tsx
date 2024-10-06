import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SettingProp {
  showOnMobile: boolean;
}

const initialState: SettingProp = {
  showOnMobile: false,
};

export const settingMobileViewSlice = createSlice({
  name: "settingMobileView",
  initialState,
  reducers: {
    updateShowOnMobile: (state, action: PayloadAction<boolean>) => {
      state.showOnMobile = action.payload;
    },
  },
});

export const { updateShowOnMobile } = settingMobileViewSlice.actions;

export default settingMobileViewSlice.reducer;
