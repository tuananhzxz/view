export interface QuanLyPhim {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}

export interface QuanLyPhimState {
  danhSachPhim: QuanLyPhim[];
  isLoading: boolean;
  error: string | null;
}

export const initialStateP: QuanLyPhimState = {
  danhSachPhim: [],
  isLoading: false,
  error: null,
};
