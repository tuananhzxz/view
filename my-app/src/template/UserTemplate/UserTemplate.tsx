import { LogIn, Gift } from "lucide-react";
import { JSX } from "react";
import { useLocation } from "react-router-dom";

interface PUser {
  children: JSX.Element;
}

const UserTemplate = (props: PUser) => {
  const location = useLocation()

  const renderHeaderPage = () => {
    const isLoginPage = location.pathname === "/login";
    return (
      <div>
        {isLoginPage ? (
          <LogIn className="mx-auto h-12 w-12 text-indigo-600" />
        ) : (
          <Gift className="mx-auto h-12 w-12 text-indigo-600" />
        )}
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Welcome back{!isLoginPage && "s"}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Please sign {isLoginPage ? "in" : "up"} to your account
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
        {renderHeaderPage()}
        {props.children}
        </div>
      </div>
    </div>
  );
};

export default UserTemplate;
