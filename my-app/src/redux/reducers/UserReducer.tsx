import { createSlice } from "@reduxjs/toolkit";
import { initStateU } from "../actions/type/UserType";
import { userLoginAction } from "../actions/UserAction";

const userReducer = createSlice({
  name: "user",
  initialState: initStateU,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(userLoginAction.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
    });
    builder.addCase(userLoginAction.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { clearError } = userReducer.actions;
export default userReducer.reducer;
