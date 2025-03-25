import { createSlice } from "@reduxjs/toolkit";
import { initialStateC } from "../actions/type/CaraouselType";
import { getCarousel } from "../actions/CarouselAction";

const carouselReducer = createSlice({
  name: "carousel",
  initialState: initialStateC,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarousel.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCarousel.fulfilled, (state, action) => {
      state.isLoading = false;
      state.arrImg = action.payload;
    });
    builder.addCase(getCarousel.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default carouselReducer.reducer;
