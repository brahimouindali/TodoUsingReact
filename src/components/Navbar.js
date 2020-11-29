import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Todos List</Link>

                    <ul className="navbar-nav" style={{ flexDirection: "row" }}>
                        <li className="nav-item pr-3 active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item pl-3">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;