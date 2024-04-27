import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import TouristSection from "../../components/TouristSection/TouristSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> RoamCraft | Home</title>
      </Helmet>
      <Slider />
      <TouristSection />
    </div>
  );
};

export default Home;
