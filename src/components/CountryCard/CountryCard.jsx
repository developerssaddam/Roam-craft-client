import { Link } from "react-router-dom";

const CountryCard = () => {
  const country_name = "bangladesh";

  return (
    <Link to={`/touristspot/match/${country_name}`}>
      <div className="country_item border shadow-lg rounded-lg">
        <div className="overflow-hidden">
          <img
            className="w-full h-[230px] object-cover rounded-t-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJC36U-lL22upji8fv2b2AQn3cHholbp0L5HLjJDHvA&s"
            alt=""
          />
        </div>
        <div className="p-5 space-y-2">
          <h2 className="text-lg font-bold font-oswald ">
            Country <span>Bangladesh</span>
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            alias placeat atque minus necessitatibus praesentium
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
