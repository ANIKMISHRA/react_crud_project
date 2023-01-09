// npm packages
import React from "react";
import { Link, NavLink } from "react-router-dom";

// react-icons
import { VscAdd } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";

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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
        <div className="align-text-bottom">
          <Link
            className="btn btn-light btn-outline-dark px-4 "
            type="button"
            to="/users/add"
          >
            <VscAdd size="25px" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
