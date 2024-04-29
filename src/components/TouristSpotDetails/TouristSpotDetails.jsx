import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import { BiDollar } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const TouristSpotDetails = () => {
  const { user } = useContext(AuthContext);
  const singleData = useLoaderData();
  const {
    name,
    country_name,
    location,
    cost,
    season,
    travel_time,
    total_visitors,
    photo,
    desc,
    user_name,
    email,
  } = singleData;
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>RoamCraft | details</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10">
        <div className="content lg:col-span-2 p-4">
          {/* image-area */}
          <div className="my-4">
            <img className="w-full h-full object-cover" src={photo} alt="" />
          </div>

          <div className="space-y-3 my-4 font-semibold flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="space-y-2">
              <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-3 lg:items-center">
                <h2 className="text-[#3C5B6F] text-xl lg:text-2xl font-semibold font-oswald">
                  {name}
                </h2>
              </div>
              <div className="flex gap-1 items-center text-gray-500">
                Country-Name : <span>{country_name}</span>
              </div>
              <div className="flex gap-1 items-center text-gray-500">
                <IoLocationOutline />
                <p>{location}</p>
              </div>
            </div>
            <div className="text-gray-500 space-y-2">
              <h3 className="flex items-center font-medium">
                Average-Cost : <BiDollar className="ml-2" />{" "}
                <span className="font-bold">{cost}</span>
              </h3>
              <p>
                Seasonality : <span>{season}</span>
              </p>
              <p>
                Travel-Time : <span>{travel_time} Days</span>
              </p>
            </div>
          </div>
          <h2 className="text-lg font-medium text-gray-600 font-oswald my-4">
            Visitors-PerYear : <span>{total_visitors}</span>
          </h2>

          {/* discription */}
          <div className="my-4">
            <h2 className="text-2xl font-medium text-gray-600 mb-2 font-oswald underline">
              Description
            </h2>
            <p className="mb-2 text-gray-500">
              RoamCraft: Unleash Your Wanderlust, Craft Your Journey!
            </p>
            <p className="mb-2 text-gray-500">{desc}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar col-span-1 p-4">
          <div className="bg-white shadow-md p-5">
            <h2 className="text-xl font-oswald text-[#3C5B6F] font-bold font_lato border-b pb-4">
              User Information
            </h2>
            <div className="agent_profile_info">
              <div className="flex items-center gap-10 my-5">
                <img
                  className="w-16 h-16 rounded-full border"
                  src={
                    user
                      ? user.photoURL
                      : "https://code-theme.com/html/findhouses/images/testimonials/ts-1.jpg"
                  }
                  alt=""
                />
                <div>
                  <h2 className="text-lg italic font-oswald text-[#3C5B6F] font-semibold">{user_name}</h2>
                  <p className="text-gray-600 text-sm">User of RoamCraft</p>
                </div>
              </div>
              <ul className="*:flex *:items-center *:gap-2 space-y-4 border-b pb-5">
                <li>
                  <IoLocationOutline className="text-[#491272] font-semibold text-xl" />{" "}
                  Location
                </li>
                <li>
                  <FaPhoneAlt className="text-[#491272] font-semibold text-xl" />{" "}
                  Phone Number
                </li>
                <li>
                  <IoMdMailOpen className="text-[#491272] font-semibold text-xl" />{" "}
                  {email}
                </li>
              </ul>

              <form>
                <h2 className="text-xl font-semibold font_lato my-4">
                  Request Inquiry
                </h2>

                <input
                  className="border px-4 py-2 mb-2 w-full"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="border px-4 py-2 mb-2 w-full"
                  type="number"
                  placeholder="Phone Number"
                />
                <input
                  className="border px-4 py-2 mb-2 w-full"
                  type="email"
                  placeholder="Email Address"
                />
                <textarea
                  className="border px-4 py-2 mb-2 w-full"
                  rows="4"
                  cols="50"
                  placeholder="Message"
                ></textarea>

                <button className="btn w-full text-white bg-[#3C5B6F]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotDetails;
