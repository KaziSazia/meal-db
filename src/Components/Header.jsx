import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <h1>Meal Finder</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/meal-details" className="nav-link">
                Meal Details
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
