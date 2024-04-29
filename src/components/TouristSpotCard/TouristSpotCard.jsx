import { IoLocationSharp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TouristSpotCard = ({ cardData }) => {
  const {
    _id,
    name,
    country_name,
    location,
    cost,
    season,
    travel_time,
    total_visitors,
    photo,
  } = cardData;

  return (
    <div className="shadow-lg rounded-lg flex flex-col lg:flex-row lg:items-center border">
      <div className="overflow-hidden flex-1">
        <img
          className="w-full h-[230px] object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none hover:scale-105 transition-all ease-in duration-150 delay-75"
          src={photo}
          alt=""
        />
      </div>

      <div className="p-3 font-medium flex-1">
        <h2 className="text-2xl font-oswald font-medium mb-2">{name}</h2>
        <h3 className="text-gray-600 font-medium">Seasonality : {season}</h3>
        <div className="flex gap-4">
          <h3 className="flex items-center gap-1">
            <IoLocationSharp className="text-[#FC4100]" />{" "}
            <span>{location}</span>
          </h3>
          <h3 className="flex items-center gap-1">
            <GiWorld className="text-[#FC4100]" /> <span>{country_name}</span>
          </h3>
        </div>
        <div className="flex items-center font-medium">
          Average-Cost : <BiDollar className="ml-1 text-lg" />{" "}
          <h3 className="font-oswald">
            {cost} / {travel_time} Days
          </h3>
        </div>
        <h3 className="font-semibold">
          Tota Visitors Per Year :{" "}
          <span className="font-oswald">{total_visitors}</span>
        </h3>
        <Link to={`/touristspot/details/${_id}`}>
          <button className="btn btn-sm bg-[#3C5B6F] text-white mt-8">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  cardData: PropTypes.object,
};

export default TouristSpotCard;
