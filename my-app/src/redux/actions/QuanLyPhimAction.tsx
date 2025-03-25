import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuanLyPhim } from "./type/QuanLyPhimType";
import { quanLyPhimService } from "../../services/QuanLyPhimService";

export const getPhim = createAsyncThunk<QuanLyPhim[], void>(
  "quanLyPhim/getPhim",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimService.layDanhSachPhim();
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
