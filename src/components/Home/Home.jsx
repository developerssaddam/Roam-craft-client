import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> RoamCraft | Home</title>
      </Helmet>
      <Slider />
    </div>
  );
};

export default Home;
