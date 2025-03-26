import { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useFormik } from "formik";
import { ClipLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../../redux/configStore";
import { userLoginAction } from "../../redux/actions/UserAction";
import { clearError } from "../../redux/reducers/UserReducer";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, error } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  // Clear error when component unmounts or when user starts typing again
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: () => {
      dispatch(userLoginAction(formik.values));
    },
  });

  // Clear error when user starts typing again
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      dispatch(clearError());
    }
    formik.handleChange(e);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <ClipLoader color="#36D7B7" size={50} />
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        className="mt-8 space-y-6"
      >
        <div className="space-y-4">
          <div>
            <label
              htmlFor="taiKhoan"
              className="block text-sm font-medium text-gray-700"
            >
              Tài khoản
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="taiKhoan"
                name="taiKhoan"
                type="text"
                required
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="you@example.com"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="matKhau"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="matKhau"
                name="matKhau"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="••••••••"
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                )}
              </button>
            </div>

            {error && (
              <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="rememberMe"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              onChange={formik.handleChange}
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Ghi nhớ đăng nhập
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Quên mật khẩu?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Đăng nhập
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Chưa có tài khoản?{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Đăng ký
          </a>
        </p>
      </form>
    </div>
  );
};
export default LoginComponent;
