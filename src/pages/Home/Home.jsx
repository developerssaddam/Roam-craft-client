import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import TouristSection from "../../components/TouristSection/TouristSection";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const touristCardData = useLoaderData()
  return (
    <div>
      <Helmet>
        <title> RoamCraft | Home</title>
      </Helmet>
      <Slider />
      <TouristSection touristCardData={touristCardData} />
    </div>
  );
};

export default Home;
