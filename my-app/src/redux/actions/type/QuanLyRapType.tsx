interface lstLichChieuTheoPhim {
  maLichChieu: number;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: Date;
  giaVe: number;
}

interface danhSachPhim {
  lstLichChieuTheoPhim: lstLichChieuTheoPhim[];
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}

interface lstCumRap {
  danhSachPhim: danhSachPhim[];
  diaChi: string;
  hinhAnh: string;
  maCumRap: string;
  tenCumRap: string;
}

export interface QuanLyRapType {
  lstCumRap: lstCumRap[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  mahom: string;
}

export interface QuanLyRapState {
  danhSachRapChieu: QuanLyRapType[];
  isLoading: boolean;
  error: string | null;
}

export const initialStateR: QuanLyRapState = {
  danhSachRapChieu: [],
  isLoading: false,
  error: null,
};
