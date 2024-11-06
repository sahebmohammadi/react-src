import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

function Layout() {
  return (
    <div>
      <AppNav />
      {/* dynamic content ???? */}
      <Outlet />
      <footer style={{ marginTop: "5rem" }}>this is footer section</footer>
    </div>
  );
}
export default Layout;
