import { NavLink, Outlet, useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div id="dashboard">
      <div id="sidebar">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="payments">Payments</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
export default Dashboard;
