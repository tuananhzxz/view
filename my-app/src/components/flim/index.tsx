import { QuanLyPhim } from "../../redux/actions/type/QuanLyPhimType";

const FilmComponent = (props: { danhSachPhim: QuanLyPhim }) => {
  return (
    <div className="h-full mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <div className="relative">
          <img
            src={props.danhSachPhim.hinhAnh}
            alt={props.danhSachPhim.tenPhim}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-sm text-gray-500 mb-1">
            {props.danhSachPhim.maPhim}
          </h2>
          <h1 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {props.danhSachPhim.tenPhim}
          </h1>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {props.danhSachPhim.moTa}
          </p>
          <div className="flex items-center justify-between">
            <a
              href={props.danhSachPhim.trailer}
              className="text-indigo-500 hover:text-indigo-700 flex items-center"
            >
              Xem trailer
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {props.danhSachPhim.danhGia}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmComponent;
