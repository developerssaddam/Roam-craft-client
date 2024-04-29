import { BiDollar } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MatchTouristSpotCard = ({ data }) => {
  const { _id, name, country_name, desc, location, season, cost } = data;

  return (
    <div className="shadow-lg rounded-lg border">
      <div className="p-5 space-y-2 font-medium">
        <h2 className="text-xl text-[#1C1678] font-oswald font-semibold mb-4">
          Name : {name}
        </h2>
        <h3 className="flex text-lg items-center gap-1 font-medium md:font-bold">
          <GiWorld className="text-[#1C1678]" /> Country :{" "}
          <span>{country_name}</span>
        </h3>
        <h3 className="flex items-center gap-1 text-lg font-medium">
          <IoLocationSharp className="text-[#1C1678]" /> Location -
          <span>{location}</span>
        </h3>

        <div className="flex items-center font-medium text-gray-600">
          Average-Cost : <BiDollar className="ml-1 text-[#1C1678]" />{" "}
          <h3 className="font-oswald">{cost}</h3>
        </div>
        <h3 className="text-gray-600 font-medium text-lg">
          Seasonality :{season}
        </h3>

        <div>
          <h2 className="text-xl font-bold underline mb-2">Description</h2>
          <p>{desc}</p>
        </div>

        <Link to={`/touristspot/details/${_id}`}>
          <button className="btn btn-sm bg-[#3C5B6F] text-[white] mt-8">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

MatchTouristSpotCard.propTypes = {
  data: PropTypes.object,
};

export default MatchTouristSpotCard;
