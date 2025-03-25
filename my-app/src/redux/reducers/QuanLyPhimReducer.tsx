import { createSlice } from "@reduxjs/toolkit";
import { initialStateP } from "../actions/type/QuanLyPhimType";
import { getPhim } from "../actions/QuanLyPhimAction";

const quanLyPhimReducer = createSlice({
  name: "quanLyPhim",
  initialState: initialStateP,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhim.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPhim.fulfilled, (state, action) => {
      state.isLoading = false;
      state.danhSachPhim = action.payload;
    });
    builder.addCase(getPhim.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default quanLyPhimReducer.reducer;
