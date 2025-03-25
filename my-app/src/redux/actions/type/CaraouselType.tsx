export const SET_CAROUSEL = "SET_CAROUSEL";

export interface Carousel {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
}

export interface CarouselState {
  arrImg: Carousel[];
  isLoading: boolean;
  error: string | null;
}

export const initialStateC: CarouselState = {
  arrImg: [],
  isLoading: false,
  error: null,
};
