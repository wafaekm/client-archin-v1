"use client";

import React from "react";
import Link from "next/link";
import BASE_PATH from "@/common/basePath";

function Navbar() {
  function openSideMenu() {
    const sideMenu = document.querySelector(".side_menu4_overlay");
    const sideMenu2 = document.querySelector(".side_menu4_overlay2");
    const sideMenu4 = document.querySelector(".side_menu_style4");
    sideMenu2?.classList.add("show");
    sideMenu?.classList.add("show");
    sideMenu4?.classList.add("show");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        {/* Logo : route Next (pas href="#") + img avec BASE_PATH */}
        <Link className="navbar-brand" href="/home1-rtl">
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
            {/* Évite href="#" (reste sur place). Mets une vraie route ou un ancre utile */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/home1-rtl">
                الرئيسية
              </Link>
            </li>

            {/* Si tu as une section #projects sur la page RTL */}
            <li className="nav-item">
              <Link className="nav-link" href="/home1-rtl#projects">
                المشاريع
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/home1-rtl#footer">
                تواصل معنا
              </Link>
            </li>
          </ul>

          <div className="nav-side">
            {/* Lang switch : chemins ABSOLUS */}
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

            {/* Si tu réactives le menu latéral, mets le onClick sur le bouton */}
            {/*
            <button type="button" className="icon ms-3 side_menu_btn fsz-21 btn btn-link p-0" onClick={openSideMenu}>
              <span><i className="la la-grip-lines" /></span>
            </button>
            */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
