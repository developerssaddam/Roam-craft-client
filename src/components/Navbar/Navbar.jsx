import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/alltourist">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/addtourist">Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/mylist">My List</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  // Set theme state
  const [theme, setTheme] = useState("");

  // Set Theme to localstorage
  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Theme observe.
  useEffect(() => {
    const lsTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", lsTheme);
  }, [theme]);

  // Logout User.
  const handleLogoutUser = () => {
    logoutUser()
      .then(() => {
        toast.success("User logout successfull!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            id="menu"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-oswald">
          RoamCraft
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul id="menu" className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          className="toggle toggle-xs mr-1"
          onChange={handleThemeChange}
        />
        <div
          className="w-10 tooltip tooltip-bottom tooltip-secondary z-50 rounded-full mr-1 cursor-pointer"
          data-tip={user ? user.displayName : "No user found"}
        >
          <img
            className="rounded-full border"
            alt="Profile image"
            src={
              user?.photoURL
                ? user.photoURL
                : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
          />
        </div>
        {user ? (
          <button
            onClick={handleLogoutUser}
            className="btn btn-sm bg-[#3C5B6F] text-white"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm bg-[#3C5B6F] text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
