import React from "react";
import Link from "next/link";
import BASE_PATH from "@/common/basePath";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        {/* Logo : vrai lien + image avec BASE_PATH */}
        <Link className="navbar-brand" href="/en">
          <img
            src={`${BASE_PATH}/home1/assets/img/logo.png`}
            alt="Logo"
            className="logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Pas de href="#" */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/en">
                Home
              </Link>
            </li>

            {/* Si tu as une section #projects sur la home EN */}
            <li className="nav-item">
              <Link className="nav-link" href="/en#projects">
                Projects
              </Link>
            </li>

            {/* Si tu as une section #footer */}
            <li className="nav-item">
              <Link className="nav-link" href="/en#footer">
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-side">
            {/* Lang switch : liens ABSOLUS */}
            <Link href="/en" className="icon ms-3">
              <span> EN </span>
            </Link>

            <Link href="/home1-rtl" className="icon ms-3">
              <span> AR </span>
            </Link>

            {/* Évite href="#" */}
            <button type="button" className="icon ms-5 fsz-21 btn btn-link p-0">
              <span>
                <i className="la la-search" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
