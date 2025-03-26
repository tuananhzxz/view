import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "./type/UserType";
import { userService } from "../../services/UserService";
import axios from "axios";

export const userLoginAction = createAsyncThunk(
  "user/login",
  async (user: IUser, thunkAPI) => {
    try {
      const res = await userService.dangNhap(user);
      if (res.data.statusCode === 200) {
        return res.data.content;
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(
          error.response.data.content || "Đăng nhập thất bại"
        );
      }
      return thunkAPI.rejectWithValue("Lỗi kết nối đến máy chủ");
    }
  }
);
