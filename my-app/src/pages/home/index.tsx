import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/configStore";
import { getPhim } from "../../redux/actions/QuanLyPhimAction";
import MultipleRows from "../../components/rslick/MultipleRows";
const Home = () => {
  const dispatch = useAppDispatch();
  const { danhSachPhim, isLoading, error } = useAppSelector(
    (state) => state.quanLyPhim
  );

  useEffect(() => {
    dispatch(getPhim());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container mx-44 px-5 py-24">
          <MultipleRows danhSachPhim={danhSachPhim} />
        </div>
      </section>
    </div>
  );
};

export default Home;
