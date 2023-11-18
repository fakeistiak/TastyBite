import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace/>;
};

export default PrivateRoute;
