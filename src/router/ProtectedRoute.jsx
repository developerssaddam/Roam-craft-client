import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import loadingImg from "../assets/loading/loading.gif";
import { AuthContext } from "../providers/AuthProviders";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <img src={loadingImg} alt="" />
      </div>
    );
  }

  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
