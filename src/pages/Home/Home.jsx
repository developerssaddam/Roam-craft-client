import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import TouristSection from "../../components/TouristSection/TouristSection";
import { useLoaderData } from "react-router-dom";
import TeamPage from "../TeamPage/TeamPage";
import Destination from "../Destination/Destination";

const Home = () => {
  const touristCardData = useLoaderData();
  return (
    <div>
      <Helmet>
        <title> RoamCraft | Home</title>
      </Helmet>
      <Slider />
      <TouristSection touristCardData={touristCardData} />
      <Destination />
      <TeamPage />
    </div>
  );
};

export default Home;
