import Banner from "./components/Banner/banner";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Slider></Slider>
      <Content></Content>
    </div>
  );
};

export default HomePage;
