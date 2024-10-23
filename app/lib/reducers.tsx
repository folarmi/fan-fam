import { Reducer, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import settingMobileViewSlice from "./features/mobileView/settingMobileViewSlice";

const appReducer = combineReducers({
  auth: authSlice,
  settingMobile: settingMobileViewSlice,
});

const rootReducer: Reducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
