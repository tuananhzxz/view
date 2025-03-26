import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/configStore";
import { getCarousel } from "../../../redux/actions/CarouselAction";
import { Carousel as CarouselType } from "../../../redux/actions/type/CaraouselType";
import { ClipLoader } from "react-spinners";

const contentStyle: React.CSSProperties = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

const HomeCarousel: React.FC = () => {
  const { arrImg, isLoading, error } = useAppSelector(
    (state) => state.carousel
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCarousel());
  }, [dispatch]);

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

  const renderImg = () => {
    return arrImg.map((item: CarouselType, index: number) => (
      <div key={index}>
        <div
          style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
        >
          <img
            className="w-full opacity-0"
            src={item.hinhAnh}
            alt={item.hinhAnh}
          />
        </div>
      </div>
    ));
  };

  return (
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
      {renderImg()}
    </Carousel>
  );
};

export default HomeCarousel;
