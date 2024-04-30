import "./CountryPage.css";
import CountryCard from "../../components/CountryCard/CountryCard";
import { useEffect, useState } from "react";

const Countrypage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://roamcraft-server.vercel.app/touristspot/country")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container mx-auto mt-16">
      <div className="my-8 text-center max-w-4xl mx-auto space-y-4 p-4">
        <h2 className="text-2xl font-oswald">Countries</h2>
        <p className="italic">
          Explore Diverse Cultures, Stunning Landscapes, and Rich Histories:
          RoamCraft`s Top Countries Await Your Discovery. Start Your Adventure
          Today!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countrypage;
