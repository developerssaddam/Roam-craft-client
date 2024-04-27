import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";

const AllTouristCart = () => {
  const id = 1;
  return (
    <div className="shadow-lg rounded-lg">
      <img
        className="w-full object-cover rounded-t-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlyYIsrJ2rHdtr9LFOwZ4hsrZNxzoBwLaPYbT2uh3Kw&s"
        alt=""
      />

      <div className="p-5 font-medium">
        <h2 className="text-xl font-oswald font-medium">Cox`s Bazar</h2>
        <h3 className="text-gray-600 font-medium">Seasonality : Winter</h3>

        <h3 className="flex items-center font-medium">
          Average-Cost : <BiDollar className="ml-1 text-lg" />{" "}
          <span className="font-oswald">200</span>
        </h3>
        <h3 className="flex items-center font-medium">
          Travel-Time : <IoMdTime className="ml-1 text-lg" />{" "}
          <span className="font-oswald">7 Days</span>
        </h3>
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

export default AllTouristCart;
