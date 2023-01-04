import React, { useContext } from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar() {
  const mainStyle = {
    width: "350px",
    height: "calc(100vh - 58px)",
    overflow: "hidden",
    color: "white",
  };
  let context = useContext(UserContext);
  let visibility = context.state;
  return (
    <div className={`bg-dark ${visibility ? "" : "hide"}`} style={mainStyle}>
      <div>
        <FontAwesomeIcon className="mt-3 ms-2" icon="user-circle" size="2x" />
        <h4 className="d-inline-block my-2 ms-4">Librarian</h4>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <FontAwesomeIcon className="mt-3 mx-2" icon="dashboard" />
          <Link className="nav-link d-inline-block  mt-3" to="/">
            DashBoard
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mt-3 mx-2" icon="user-friends" />
          <Link className="nav-link d-inline-block my-1" to="/members">
            Members
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mt-3 mx-2" icon="book" />
          <Link className="nav-link d-inline-block my-1" to="/books">
            Books
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mt-3 mx-2" icon="left-long" />
          <Link className="nav-link d-inline-block my-1" to="/borrow">
            Borrow Book
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mt-3 mx-2" icon="right-long" />
          <Link className="nav-link d-inline-block my-1" to="/return">
            Return Book
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;