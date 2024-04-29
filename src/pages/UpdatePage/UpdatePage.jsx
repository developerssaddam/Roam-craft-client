import { useLoaderData, useNavigate } from "react-router-dom";
import "./UpdatePage.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdatePage = () => {
  // Get CurrentData.
  const currentData = useLoaderData();
  const navigate = useNavigate();

  // handleUpdateTouritSpot
  const handleUpdateTouritSpot = (e) => {
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

    const updatedData = {
      name,
      country_name,
      location,
      desc,
      cost,
      season,
      travel_time,
      total_visitors,
      photo,
    };

    fetch(
      `https://roamcraft-server.vercel.app/touristspot/update/${currentData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Updated successfully!");
          form.reset();
          navigate("/mylist");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>RoamCraft | Update</title>
      </Helmet>

      <section className="py-10 px-6">
        <form
          onSubmit={handleUpdateTouritSpot}
          className="max-w-3xl flex flex-col mx-auto shadow-lg"
        >
          <h2 className="text-center text-2xl font-bold font-oswald">
            Update Tourist Spot
          </h2>
          <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={currentData.name}
                  placeholder="Tourists-spot-name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Country-Name</label>
                <input
                  type="text"
                  defaultValue={currentData.country_name}
                  name="country_name"
                  placeholder="Country-Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Location</label>
                <input
                  type="text"
                  defaultValue={currentData.location}
                  name="location"
                  placeholder="Location"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Description</label>
                <input
                  type="text"
                  defaultValue={currentData.desc}
                  name="desc"
                  placeholder="Short-Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Average-Cost</label>
                <input
                  type="text"
                  defaultValue={currentData.cost}
                  name="cost"
                  placeholder="Average-Cost"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Seasonality</label>
                <input
                  type="text"
                  defaultValue={currentData.season}
                  name="season"
                  placeholder="Seasonality"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Travel-Time</label>
                <input
                  type="text"
                  defaultValue={currentData.travel_time}
                  name="travel_time"
                  placeholder="Travel-Time"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">TotaVisitorsPerYear</label>
                <input
                  type="text"
                  defaultValue={currentData.total_visitors}
                  name="total_visitors"
                  placeholder="Tota-Visitors-Per-Year"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm">Photo</label>
                <input
                  type="text"
                  defaultValue={currentData.photo}
                  name="photo"
                  placeholder="Photo URL"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full">
                <input
                  type="submit"
                  value="Update Now"
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

export default UpdatePage;
