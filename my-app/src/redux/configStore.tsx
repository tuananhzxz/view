import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { thunk } from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./reducers/Carousel";
import quanLyPhimReducer from "./reducers/QuanLyPhimReducer";
import quanLyRapReducer from "./reducers/QuanLyRapReducer";
import userReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  carousel: carouselReducer,
  quanLyPhim: quanLyPhimReducer,
  quanLyRap: quanLyRapReducer,
  userReducer: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
