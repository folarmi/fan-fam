import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type EmailType = "Reset" | "Signup" | "";

export interface AuthState {
  userEmail: string;
  emailType: EmailType;
}

const initialState: AuthState = {
  userEmail: "",
  emailType: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    updateEmailType: (state, action: PayloadAction<EmailType>) => {
      state.emailType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserEmail, updateEmailType } = authSlice.actions;

export default authSlice.reducer;
