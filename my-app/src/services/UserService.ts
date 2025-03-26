import { baseService } from "./baseService";

export interface IUser {
    taiKhoan: string;
    matKhau: string;
}

export interface IErrorResponse {
    content: string;
    statusCode: number;
}

class UserService extends baseService {
    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap: IUser) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    }
}

export const userService = new UserService();