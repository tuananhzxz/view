import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import Contact from "./pages/contact";
import News from "./pages/new";
import LoginComponent from "./pages/login";
import RegisterComponent from "./pages/register";
import UserTemplate from "./template/UserTemplate/UserTemplate";
import CheckoutTemplate from "./template/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/checkout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomeTemplate children={<Home />} />} />
        <Route
          path="/contact"
          element={<HomeTemplate children={<Contact />} />}
        />
        <Route path="/news" element={<HomeTemplate children={<News />} />} />
        <Route path="/register" element={<RegisterComponent />} />

        <Route
          path="/login"
          element={<UserTemplate children={<LoginComponent />} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutTemplate children={<Checkout />} />}
        />
      </Routes>
    </>
  );
};

export default App;
