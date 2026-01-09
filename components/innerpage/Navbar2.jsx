"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar2() {
  const pathname = usePathname() || "/en";

  // Switch EN <-> AR en gardant le même chemin
  const isAr = pathname.startsWith("/ar");
  const otherLocalePath = isAr
    ? pathname.replace(/^\/ar/, "/en")
    : pathname.replace(/^\/en/, "/ar");

  function openSideMenu(e) {
    e?.preventDefault();

    const sideMenu = document.querySelector(".side_menu4_overlay");
    const sideMenu2 = document.querySelector(".side_menu4_overlay2");
    const sideMenu4 = document.querySelector(".side_menu_style4");

    sideMenu2?.classList.add("show");
    sideMenu?.classList.add("show");
    sideMenu4?.classList.add("show");
  }

  return (
      <nav className="navbar navbar-expand-lg navbar-light tc-navbar-style1 section-padding-x inner-navbar-style1 navbar-light-mode">
      <div className="container-fluid content">
        {/* Logo (même que Home) */}
        <Link className="navbar-brand" href={isAr ? "/ar" : "/en"}>
          <img src="/home1/assets/img/logo_black_gold.png" alt="logo" className="logo" />
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
          {/* Liens comme Home */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href={isAr ? "/ar" : "/en"}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              {/* Ajuste si tu as une vraie page /en/projects sinon laisse vers #projects */}
              <Link className="nav-link" href={isAr ? "/ar#projects" : "/en#projects"}>
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href={isAr ? "/ar#contact" : "/en#contact"}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Partie droite comme Home */}
          <div className="nav-side">
            <Link href={isAr ? otherLocalePath : pathname} className="icon ms-3">
              <span> EN </span>
            </Link>

            <Link href={isAr ? pathname : otherLocalePath} className="icon ms-3">
              <span> AR </span>
            </Link>

            <a href="#" className="icon ms-5 fsz-21 search_btn" onClick={(e) => e.preventDefault()}>
              <span>
                <i className="la la-search"></i>
              </span>
            </a>

            <a
              href="#"
              onClick={openSideMenu}
              className="icon ms-3 side_menu_btn fsz-21 d-none d-lg-inline-block"
            >
              <span>
                <i className="la la-grip-lines"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
