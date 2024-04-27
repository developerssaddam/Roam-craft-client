import { IoLocationSharp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";

const TouristSpotCard = () => {
  const id = 1;

  return (
    <div className="shadow-lg rounded-lg">
      <div className="overflow-hidden">
        <img
          className="w-full object-cover rounded-t-lg hover:scale-105 transition-all ease-in duration-150 delay-75"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlyYIsrJ2rHdtr9LFOwZ4hsrZNxzoBwLaPYbT2uh3Kw&s"
          alt=""
        />
      </div>

      <div className="p-5 font-medium">
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
        <Link to={`/touristspot/details/${id}`}>
          <button className="btn btn-sm mt-3 bg-[#3C5B6F] text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TouristSpotCard;
