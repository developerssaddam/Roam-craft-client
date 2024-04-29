import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";
import { Helmet } from "react-helmet-async";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const AllTourist = () => {
  const loadedCardData = useLoaderData();
  const [touristCardData, setTouristCardData] = useState(loadedCardData);

  // handleSortByAverageCost
  const handleSortByAverageCost = () => {
    const sortedData = [...touristCardData].sort((a, b) => {
      return a.cost - b.cost;
    });
    setTouristCardData(sortedData);
  };

  return (
    <div>
      <Helmet>
        <title>RoamCraft | All-Tourists-Spot</title>
      </Helmet>
      <div className="mt-8 text-center max-w-4xl mx-auto space-y-4 p-4">
        <h2 className="text-2xl font-oswald">All Tourists-Spots</h2>
      </div>
      {/* sort area */}
      <div className="flex justify-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#3C5B6F] text-white">
            Sort By <FaAngleDown />{" "}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleSortByAverageCost}>Average-Cost</button>
            </li>
          </ul>
        </details>
      </div>

      <div className="tourist_card_container container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10">
        {touristCardData.map((cardData, index) => (
          <TouristSpotCard key={index} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default AllTourist;
