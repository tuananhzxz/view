import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/configStore";
import { getPhim } from "../../redux/actions/QuanLyPhimAction";
import MultipleRows from "../../components/rslick/MultipleRows";
import { ClipLoader } from "react-spinners";
import HomeMenu from "../homemenu";
import { layThongTinLichChieuPhim } from "../../redux/actions/QuanLyRapAction";

const Home = () => {
  const dispatch = useAppDispatch();
  const { danhSachPhim, isLoading, error } = useAppSelector(
    (state) => state.quanLyPhim
  );
  const { danhSachRapChieu } = useAppSelector((state) => state.quanLyRap);

  useEffect(() => {
    dispatch(getPhim());
    dispatch(layThongTinLichChieuPhim());
  }, [dispatch]);

  console.log("danhSachRapChieu", danhSachRapChieu); // Thêm dòng này để kiểm tra giá trị danhSachRapChieu

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <ClipLoader color="#36D7B7" size={50} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24">
          <MultipleRows danhSachPhim={danhSachPhim} />
        </div>
        <div className="mx-auto mt-20">
          <HomeMenu danhSachRapChieu={danhSachRapChieu} />
        </div>
      </section>
    </div>
  );
};

export default Home;
