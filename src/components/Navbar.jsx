import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>TaskFlow</h2>

      {isAuthenticated && (
        <>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/tasks">Tasks</Link>
          <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Navbar;
