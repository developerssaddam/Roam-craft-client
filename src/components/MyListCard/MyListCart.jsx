import { IoLocationSharp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyListCart = () => {
  const id = 1;

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
        <div className="flex gap-1 items-center mt-3 *:text-lg *:text-white">
          <Link
            to={`/touristspot/details/${id}`}
            className="btn btn-sm btn-accent"
          >
            <FaRegEye />
          </Link>
          <Link
            to={`/touristspot/update/${id}`}
            className="btn btn-sm btn-warning"
          >
            <FaRegEdit />
          </Link>
          <Link className="btn btn-sm btn-error">
            <MdDelete />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyListCart;
