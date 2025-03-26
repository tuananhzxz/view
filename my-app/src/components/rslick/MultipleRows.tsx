import Slider from "react-slick";
import { QuanLyPhim } from "../../redux/actions/type/QuanLyPhimType";
import FilmComponent from "../flim";
import "./MultipleRowCss.css";
import { useState } from "react";

interface MultipleRowsProps {
  danhSachPhim: QuanLyPhim[];
}

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: IProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: IProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        backgroundColor: "transparent",
      }}
      onClick={onClick}
    />
  );
}

function MultipleRows({ danhSachPhim }: MultipleRowsProps) {
  const [activeTab, setActiveTab] = useState<"dangChieu" | "sapChieu">(
    "dangChieu"
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const filterFilms = () => {
    if (activeTab === "dangChieu") {
      return danhSachPhim.filter((phim) => phim.dangChieu);
    } else {
      return danhSachPhim.filter((phim) => phim.sapChieu);
    }
  };

  const renderFilm = () => {
    const films = filterFilms().slice(0, 12);
    const rows = [];

    for (let i = 0; i < films.length; i += 6) {
      const rowFilms = films.slice(i, i + 6);
      rows.push(
        <div key={i} className="px-4">
          <div className="grid grid-cols-3 gap-6">
            {rowFilms.map((phim) => (
              <div key={phim.maPhim} className="w-full">
                <FilmComponent danhSachPhim={phim} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="py-8">
        <div className="flex justify-start gap-3 pl-9 pb-5">
          <button
            type="button"
            onClick={() => setActiveTab("dangChieu")}
            className={`px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 ${
              activeTab === "dangChieu" ? "bg-gray-400 text-white" : ""
            }`}
          >
            PHIM ĐANG CHIẾU
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("sapChieu")}
            className={`px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 ${
              activeTab === "sapChieu" ? "bg-gray-400 text-white" : ""
            }`}
          >
            PHIM SẮP CHIẾU
          </button>
        </div>
        <Slider className="pl-5" {...settings}>
          {renderFilm()}
        </Slider>
      </div>
    </div>
  );
}

export default MultipleRows;
