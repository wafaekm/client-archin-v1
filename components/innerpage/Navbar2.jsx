"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar2() {
  const pathname = usePathname() || "/en";

  // Attention: pathname commence par "/"
  const isAr = pathname.startsWith("/ar");

  // Switch EN <-> AR en gardant le même chemin (avec slash)
  const otherLocalePath = isAr
    ? pathname.replace(/^\/ar/, "/en")
    : pathname.replace(/^\/en/, "/ar");

  // Si jamais on est sur une route sans /en ou /ar, on force une cible propre
  const safeEn = pathname.startsWith("/en") ? pathname : "/en";
  const safeAr = pathname.startsWith("/ar") ? pathname : "/ar";

  return (
    <nav className="navbar navbar-expand-lg navbar-light tc-navbar-style1 section-padding-x inner-navbar-style1 navbar-light-mode">
      <div className="container-fluid content">
        {/* Logo : routes ABSOLUES */}
        <Link className="navbar-brand" href={isAr ? "/ar" : "/en"}>
          <img
            src="home1/assets/img/logo_black_gold.png"
            alt="logo"
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
          {/* Liens ABSOLUS */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href={isAr ? "/ar" : "/en"}>
                Home
              </Link>
            </li>

            <li className="nav-item">
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

          <div className="nav-side">
            {/* Switch locale : on envoie VRAIMENT vers l'autre locale */}
            <Link href={isAr ? otherLocalePath : safeEn} className="icon ms-3">
              <span> EN </span>
            </Link>

            <Link href={isAr ? safeAr : otherLocalePath} className="icon ms-3">
              <span> AR </span>
            </Link>

            <a
              href="#"
              className="icon ms-5 fsz-21 search_btn"
              onClick={(e) => e.preventDefault()}
            >
              <span>
                <i className="la la-search"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
