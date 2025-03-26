import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapService } from "../../services/QuanLyRapService";

export const layThongTinLichChieuPhim = createAsyncThunk(
  "quanLyRap/layThongTinLichChieuPhim",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyRapService.layThongTinLichChieuPhim();
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);
