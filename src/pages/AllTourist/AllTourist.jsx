import AllTouristCart from "../../components/AllTouristCart/AllTouristCart";

const AllTourist = () => {
  return (
    <div className="tourist_card_container container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
      <AllTouristCart />
      <AllTouristCart />
      <AllTouristCart />
      <AllTouristCart />
      <AllTouristCart />
      <AllTouristCart />
      <AllTouristCart />
      <AllTouristCart />
      <AllTouristCart />
    </div>
  );
};

export default AllTourist;
