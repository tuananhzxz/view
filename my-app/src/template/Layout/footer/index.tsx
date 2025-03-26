import _ from "lodash";
import { useAppSelector } from "../../../redux/configStore";

const FooterComponent = () => {
  const { danhSachRapChieu } = useAppSelector((state) => state.quanLyRap);
  const arrHeThongRap = _.map(danhSachRapChieu, (rap) =>
    _.pick(rap, ["tenHeThongRap", "logo", "maHeThongRap"])
  );

  return (
    <footer className="mt-5 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Movie Plus+
              </span>
            </div>
            <p className="mt-4 text-gray-400">
              Your ultimate destination for movies and entertainment. Experience
              the magic of cinema with us.
            </p>
          </div>

          {/* Theater Chains */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Theater Chains
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {arrHeThongRap.map((item) => (
                <a
                  key={item.maHeThongRap}
                  href="#"
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition duration-200"
                >
                  <img
                    src={item.logo}
                    alt={item.tenHeThongRap}
                    className="w-8 h-8 rounded"
                  />
                  <span>{item.tenHeThongRap}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Movies", "Showtimes", "Promotions", "About Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Connect
            </h3>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition duration-200"
                >
                  <i className={`fab fa-${social} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Movie Plus+. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
