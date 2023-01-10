// npm packages
import React from "react";
import { Link, NavLink } from "react-router-dom";

// react-icons
import { VscAdd } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";

// constants
import { ADD_USER_PATH } from "../../Services/Constants/Path";

/**
 * Method to show layout on navbar
 * @returns node
 */
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <div className="container-fluid">
          <h1 className="text-light">React Users</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white" exact to="/">
                  Home
                  <AiOutlineHome size="23px" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="align-text-bottom display-flex">
          <Link
            className="btn btn-light btn-outline-dark px-4 "
            type="button"
            to={`${ADD_USER_PATH}`}
          >
            <VscAdd size="25px" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
