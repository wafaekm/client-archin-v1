"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar2() {
  const pathname = usePathname() || "/";

  // AR si on est sur /home1-rtl... (et tu peux garder /ar si tu veux)
  const isAr = pathname.startsWith("/home1-rtl") || pathname.startsWith("/ar");

  // Home routes réelles chez toi
  const homePath = isAr ? "/home1-rtl/" : "/";

  // Labels
  const t = isAr
    ? { home: "الرئيسية", projects: "المشاريع", contact: "تواصل معنا" }
    : { home: "Home", projects: "Projects", contact: "Contact" };

  // Scroll helper
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = 130; // mets la même valeur que ton offset mobile si besoin
    const y = el.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onNavClick = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  const toEnglish = () => "/";
  const toArabic = () => "/home1-rtl/";

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light tc-navbar-style1 section-padding-x inner-navbar-style1 navbar-light-mode"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="container-fluid content">
        {/* Logo => Home réelle */}
        <Link className="navbar-brand" href={homePath}>
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
          {/* Projects & Contact = scroll ONLY */}
          <ul className={`navbar-nav ${isAr ? "ms-auto" : "me-auto"} mb-2 mb-lg-0`}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href={homePath}>
                {t.home}
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#related-projects" onClick={onNavClick("related-projects")}>
                {t.projects}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#chat" onClick={onNavClick("chat")}>
                {t.contact}
              </a>
            </li>
          </ul>

          <div className="nav-side">
            <Link href={toEnglish()} className="icon ms-3">
              <span> EN </span>
            </Link>

            <Link href={toArabic()} className="icon ms-3">
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
