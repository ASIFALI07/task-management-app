import { Link } from "react-router-dom";

function Tasks() {
  return (
    <div>
      <h2>Tasks Page</h2>

      <Link to="/dashboard">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default Tasks;
