import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  //const isAuthenticated = false; // temporary (we will change this in Day 2)
  //const token = localStorage.getItem("token");
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
