import { IoLocationSharp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TouristSpotCard = ({ cardData }) => {
  const { _id } = cardData;

  return (
    <div className="shadow-lg rounded-lg flex flex-col lg:flex-row gap-1 border">
      <div className="overflow-hidden flex-1">
        <img
          className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none hover:scale-105 transition-all ease-in duration-150 delay-75"
          src="https://www.deraresort.com/images/featured/inani-beach.jpg"
          alt=""
        />
      </div>

      <div className="p-3 font-medium">
        <h2 className="text-2xl font-oswald font-medium">Cox`s Bazar</h2>
        <h3 className="text-gray-600 font-medium">Seasonality : Winter</h3>
        <div className="flex gap-4">
          <h3 className="flex items-center gap-1">
            <IoLocationSharp className="text-[#FC4100]" />{" "}
            <span>Cox`s Bazar sadar</span>
          </h3>
          <h3 className="flex items-center gap-1">
            <GiWorld className="text-[#FC4100]" /> <span>Bangladesh</span>
          </h3>
        </div>
        <div className="flex items-center font-medium">
          Average-Cost : <BiDollar className="ml-1 text-lg" />{" "}
          <h3 className="font-oswald">200 / 7Days</h3>
        </div>
        <h3 className="font-semibold">
          Tota Visitors Per Year : <span className="font-oswald">10000</span>
        </h3>
        <Link to={`/touristspot/details/${_id}`}>
          <button className="btn btn-sm mt-3 bg-[#3C5B6F] text-white">
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
