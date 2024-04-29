import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CountryCard = ({ country }) => {
  const { country_name, desc, photo } = country;

  return (
    <Link to={`/touristspot/match/${country_name}`}>
      <div className="country_item border shadow-lg rounded-lg">
        <div className="overflow-hidden">
          <img
            className="w-full h-[230px] object-cover rounded-t-lg"
            src={photo}
            alt=""
          />
        </div>
        <div className="p-5 space-y-2">
          <h2 className="text-lg font-bold font-oswald ">
            <span>{country_name}</span>
          </h2>
          <p className="text-gray-500">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object,
};
export default CountryCard;
