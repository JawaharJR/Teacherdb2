import React, { useContext } from "react";
import UserContext from "../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  let context = useContext(UserContext);
  let visibility = context.state;
  return (
    <nav
      className="navbar navbar-expand-lg d-block"
      style={{ backgroundColor: "orange" }}
    >
      <div className="container-fluid">
        <div className="text-decoration-underline fs-3 fw-bold text-dark">
          <div className="d-inline me-3">Library Management</div>
          <button
            className="p-0 m-0 border-0 bg-transparent"
            onClick={() => {
              context.setState(!visibility);
            }}
          >
            <FontAwesomeIcon icon="bars" transform="shrink-2" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;