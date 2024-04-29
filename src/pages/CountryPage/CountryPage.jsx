import "./CountryPage.css";
import CountryCard from "../../components/CountryCard/CountryCard";

const Countrypage = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="my-8 text-center max-w-4xl mx-auto space-y-4 p-4">
        <h2 className="text-2xl font-oswald">Popular-Countries</h2>
        <p className="italic">
          Explore Diverse Cultures, Stunning Landscapes, and Rich Histories:
          RoamCraft`s Top Countries Await Your Discovery. Start Your Adventure
          Today!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </div>
  );
};

export default Countrypage;
