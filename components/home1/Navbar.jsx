import React from "react";
import Link from "next/link";
import BASE_PATH from "@/common/basePath";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        {/* Logo: pas de href="#" */}
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/en">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/en#projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/en/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-side">
            {/* Lang switch: toujours des chemins ABSOLUS */}
            <Link href="/en" className="icon ms-3">
              <span> EN </span>
            </Link>

            <Link href="/home1-rtl" className="icon ms-3">
              <span> AR </span>
            </Link>

            {/* évite href="#" (ça “reste sur place”) */}
            <button type="button" className="icon ms-5 fsz-21 btn btn-link p-0">
              <span>
                <i className="la la-search"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
