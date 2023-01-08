// npm packages
import React from "react";
import { Link, NavLink } from "react-router-dom";

// react-icons
import { VscAdd } from 'react-icons/vsc';

/**
 * @returns node
 */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React Users</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-light btn-outline-dark pl-5" type="button" to="/users/add"><VscAdd /> </Link>
            </div>
        </nav>
    )
}

export default Navbar;