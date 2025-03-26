export interface UserType {
  taiKhoan: string;
  hoTen: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
}

export interface IUser {
  taiKhoan: string;
  matKhau: string;
}

interface UserState {
  user: UserType;
  isLoading: boolean;
  error: string;
}

export const initStateU: UserState = {
  user: {
    taiKhoan: "",
    hoTen: "",
    soDT: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    accessToken: "",
  },
  isLoading: false,
  error: "",
};
