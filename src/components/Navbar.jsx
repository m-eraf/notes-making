import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            Aashutosh Collection
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Contacts</a>
              </li>
            </ul>
            <div className="buttons ms-5">
              <a href="" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </a>
              <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </a>
              <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
