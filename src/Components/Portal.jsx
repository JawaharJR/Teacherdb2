import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function portal() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="d-flex flex-column">
        <div className="d-flex">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default portal;