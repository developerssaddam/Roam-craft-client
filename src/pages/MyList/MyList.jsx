import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";

const MyList = () => {
  return (
    <>
      <div className="my-8 text-center max-w-4xl mx-auto space-y-4 p-4">
        <h2 className="text-2xl font-oswald">My Tourists-Spots List</h2>
        <p className="italic">
          From the bustling streets of Times Square to the serene beauty of the
          Grand Canyon, tourist spots captivate with their diversity. Whether
          it`s the historic charm of the Eiffel Tower or the natural wonders of
          the Great Barrier Reef, these destinations offer unforgettable
          experiences for travelers worldwide
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        <TouristSpotCard />
        <TouristSpotCard />
        <TouristSpotCard />
        <TouristSpotCard />
        <TouristSpotCard />
        <TouristSpotCard />
        <TouristSpotCard />
        <TouristSpotCard />
        <TouristSpotCard />
      </div>
    </>
  );
};

export default MyList;
