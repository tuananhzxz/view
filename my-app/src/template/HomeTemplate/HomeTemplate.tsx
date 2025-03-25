import { JSX } from "react";
import HeaderComponent from "../Layout/header";
import HomeCarousel from "../Layout/carousel";
import FooterComponent from "../Layout/footer";
interface HomeTemplateProps {
  children: JSX.Element;
}

const HomeTemplate = (props: HomeTemplateProps) => {
  return (
    <div>
      <HeaderComponent />
      <HomeCarousel />
      {props.children}
      <hr className="mt-5" />
      <FooterComponent />
    </div>
  );
};

export default HomeTemplate;
