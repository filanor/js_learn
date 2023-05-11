import { Switch, Route, Link } from "react-router-dom";
import Edit from "./edit";
import Stats from "./statc";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/edit">Edit</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/dashboard" component={Stats} exact />
        <Route path="/dashboard/edit" component={Edit} />
      </Switch>
    </div>
  );
};

export default Dashboard;
