import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand fs-3 text-primary" to="/">
          Contact Hub
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="offcanvas offcanvas-end flex-lg-row-reverse w-50"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-primary" id="offcanvasNavbarLabel">
              Contact Hub
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav fs-5">
              <li className="nav-item me-lg-3">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-lg-2">
                <Link className="nav-link active" to="/saved-contacts">
                  Saved Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
