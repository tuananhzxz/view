import Slider from "react-slick";
import { QuanLyPhim } from "../../redux/actions/type/QuanLyPhimType";
import FilmComponent from "../flim";
import HomeMenu from "../../pages/homemenu";
import "./MultipleRowCss.css";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderFilm = () => {
    const films = danhSachPhim.slice(0, 12);
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
        <Slider {...settings}>{renderFilm()}</Slider>
      </div>
      <div className="mx-44 mt-20">
        <HomeMenu />
      </div>
    </div>
  );
}

export default MultipleRows;
