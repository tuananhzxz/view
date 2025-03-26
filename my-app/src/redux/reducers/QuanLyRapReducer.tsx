import { createSlice } from "@reduxjs/toolkit";
import { layThongTinLichChieuPhim } from "../actions/QuanLyRapAction";
import { initialStateR } from "../actions/type/QuanLyRapType";

const quanLyRapReducer = createSlice({
  name: "quanLyRap",
  initialState: initialStateR,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layThongTinLichChieuPhim.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(layThongTinLichChieuPhim.fulfilled, (state, action) => {
      state.isLoading = false;
      state.danhSachRapChieu = action.payload;
    });
    builder.addCase(layThongTinLichChieuPhim.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default quanLyRapReducer.reducer;
