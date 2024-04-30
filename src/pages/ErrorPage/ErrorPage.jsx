import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import lottieImg from "../../assets/loading/404.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>RoamCraft | Not-Found</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <Lottie animationData={lottieImg} loop={true} />
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold font-oswald ">Page Not Found</h2>
            <Link to="/" className="btn btn-sm btn-secondary">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
