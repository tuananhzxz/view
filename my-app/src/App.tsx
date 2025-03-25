import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import Contact from "./pages/contact";
import News from "./pages/new";
import LoginComponent from "./pages/login";
import RegisterComponent from "./pages/register";

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
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </>
  );
};

export default App;
