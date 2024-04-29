import MatchTouristSpotCard from "../../components/MatchTouristSpotCard/MatchTouristSpotCard";

const MatchCountryOfTouristSpotPage = () => {
  return (
    <div className="container mx-auto">
      <div className="my-8 text-center max-w-4xl mx-auto space-y-4 p-4">
        <h2 className="text-2xl font-oswald">
          All Tourist Spot Of {"Bangladesh"}
        </h2>
        <p className="italic">
          Discover the Art of Roaming: Unveiling the Hidden Gems of{" "}
          {"Bangladesh"} with RoamCraft – Crafting Unforgettable Travel
          Experiences, One Adventure at a Time!
        </p>
      </div>

      <div className="tourist_card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        <MatchTouristSpotCard />
        <MatchTouristSpotCard />
        <MatchTouristSpotCard />
        <MatchTouristSpotCard />
        <MatchTouristSpotCard />
        <MatchTouristSpotCard />
        <MatchTouristSpotCard />
      </div>
    </div>
  );
};

export default MatchCountryOfTouristSpotPage;
