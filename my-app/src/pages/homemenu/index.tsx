import { Tabs } from "antd";
import { useState } from "react";
import { QuanLyRapType } from "../../redux/actions/type/QuanLyRapType";
import TabPane from "antd/es/tabs/TabPane";
import { NavLink } from "react-router-dom";
import moment from "moment";

type TabPosition = "left" | "right" | "top" | "bottom";

const HomeMenu = (props: { danhSachRapChieu: QuanLyRapType[] }) => {
  const [tabPosition] = useState<TabPosition>("left");

  const renderHeThongRap = () => {
    return props.danhSachRapChieu?.map((rap, index) => {
      return (
        <TabPane
          tab={
            <img src={rap.logo} alt="" width={50} className="rounded-full" />
          }
          key={index}
        >
          <Tabs
            tabPosition={tabPosition}
            items={rap?.lstCumRap?.map((danhsach, i) => {
              const id = String(i + 1);
              return {
                label: (
                  <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 transition duration-300 rounded-lg">
                    <div className="flex-shrink-0">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPwuxBhcP25ZMoQ8MI6Ip-F6mDXlI8bDo2w&s"
                        alt={`menu ${id}`}
                        className="w-16 h-16 rounded-lg object-cover shadow-sm"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-gray-400 text-sm font-medium">
                          {danhsach.tenCumRap}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {danhsach.diaChi}
                      </p>
                      <button className="flex justify-start px-2 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
                        Chi tiết
                      </button>
                    </div>
                  </div>
                ),
                key: id,
                children: danhsach?.danhSachPhim
                  ?.slice(0, 6)
                  .map((phim, index) => {
                    return (
                      <div className="flex" key={index}>
                        <img
                          className="my-2 w-[100px] h-[100px] object-cover rounded-lg"
                          src={phim.hinhAnh}
                          alt={phim.hinhAnh}
                          onError={(
                            e: React.SyntheticEvent<HTMLImageElement>
                          ) => {
                            const img = e.target as HTMLImageElement;
                            img.onerror = null;
                            img.src = "https://picsum.photos/";
                          }}
                        />

                        <div className="ml-2">
                          <p className="text-green-600 text-2xl line-clamp-2">
                            {phim.tenPhim}
                          </p>
                          <p>{danhsach.diaChi}</p>
                          <div className="grid grid-cols-5 gap-3 mt-2 mb-2">
                            {phim.lstLichChieuTheoPhim
                              ?.slice(0, 12)
                              .map((lichChieu, index) => {
                                return (
                                  <NavLink
                                    className="text-lg text-blue-400"
                                    to={"/home"}
                                    key={index}
                                  >
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </NavLink>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    );
                  }),
              };
            })}
          />
        </TabPane>
      );
    });
  };
  return (
    <div>
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </div>
  );
};

export default HomeMenu;
