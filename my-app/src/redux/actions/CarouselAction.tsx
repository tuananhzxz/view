import { createAsyncThunk } from "@reduxjs/toolkit";
import { Carousel } from "./type/CaraouselType";
import { quanLyPhimService } from "../../services/QuanLyPhimService";

export const getCarousel = createAsyncThunk<Carousel[], void>(
  "carousel/getCarousel",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimService.layDanhSachBanner();
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
