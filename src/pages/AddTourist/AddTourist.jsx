import { toast } from "react-toastify";
import "./AddTourist.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddTourist = () => {
  // Get Current User
  const { user } = useContext(AuthContext);
  const user_name = user.displayName;
  const email = user.email;

  const navigate = useNavigate();

  // handleAddTouritSpot
  const handleAddTouritSpot = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const desc = form.desc.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const travel_time = form.travel_time.value;
    const total_visitors = form.total_visitors.value;
    const photo = form.photo.value;

    const newTouristSpot = {
      name,
      country_name,
      location,
      desc,
      cost,
      season,
      travel_time,
      total_visitors,
      photo,
      user_name,
      email,
    };

    fetch("https://roamcraft-server.vercel.app/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Tourist spot successfully added!");
          form.reset();
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>RoamCraft | Create</title>
      </Helmet>

      <section className="py-10 px-6">
        <form
          onSubmit={handleAddTouritSpot}
          className="max-w-3xl flex flex-col mx-auto shadow-lg"
        >
          <h2 className="text-center text-2xl font-bold font-oswald">
            Add Tourist Spot
          </h2>
          <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tourists-spot-name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Country-Name</label>
                <input
                  type="text"
                  name="country_name"
                  placeholder="Country-Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Description</label>
                <input
                  type="text"
                  name="desc"
                  placeholder="Short-Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Average-Cost</label>
                <input
                  type="text"
                  name="cost"
                  placeholder="Average-Cost"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Seasonality</label>
                <input
                  type="text"
                  name="season"
                  placeholder="Seasonality"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Travel-Time</label>
                <input
                  type="text"
                  name="travel_time"
                  placeholder="Travel-Time"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">TotaVisitorsPerYear</label>
                <input
                  type="text"
                  name="total_visitors"
                  placeholder="Tota-Visitors-Per-Year"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full">
                <input
                  type="submit"
                  value="Add Now"
                  className="w-full cursor-pointer rounded-md focus:ring focus:ring-opacity-75 text-white focus:ring-violet-400 border-gray-700 bg-[#3C5B6F]"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddTourist;
