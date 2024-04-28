import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>RoamCraft | Not-Found</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="space-y-5 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#090929]">
            Oops!
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="md:text-5xl font-extrabold text-[#131350]">
              404
            </span>{" "}
            - PAGE NOT FOUND
          </h2>
          <h4 className="font-medium">
            The page you are looking for might have been removed <br /> had it`s
            name changed or it is temporarily blocked.
          </h4>
          <button>
            <Link
              to="/"
              className="bg-[#3C5B6F] text-white font_lato px-4 py-3 rounded-full hover:bg-[#3860e0]"
            >
              GO TO HOMEPAGE
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
