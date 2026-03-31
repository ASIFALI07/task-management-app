//import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useAuth from "../hooks/useAuth";

function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    //localStorage.removeItem("token");
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard Page</h2>

      <Link to="/tasks">
        <button>Go to Tasks</button>
      </Link>

      <br />
      <br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
