"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BASE_PATH from "@/common/basePath";

function Navbar({ lang = "en" }) {
  const isAr = lang === "ar";
  const router = useRouter();
  const pathname = usePathname();

  const isOnLangHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goHome = () => router.push(`/${lang}`);

  const handleNav = (action) => (e) => {
    e.preventDefault();

    if (action === "home") {
      goHome();
      return;
    }

    const targetId = action === "projects" ? "related-projects" : "chat";

    if (isOnLangHome) {
      scrollToId(targetId);
      return;
    }

    router.push(`/${lang}`);
    setTimeout(() => {
      requestAnimationFrame(() => scrollToId(targetId));
    }, 50);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        {/* Logo => Home langue */}
        <Link className="navbar-brand" href={`/${lang}`}>
          <img src={`${BASE_PATH}/home1/assets/img/logo.png`} alt="Logo" className="logo" />
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
          <ul className={`navbar-nav ${isAr ? "ms-auto" : "me-auto"} mb-2 mb-lg-0`}>
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={handleNav("home")}>
                {isAr ? "الرئيسية" : "Home"}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNav("projects")}>
                {isAr ? "المشاريع" : "Projects"}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNav("contact")}>
                {isAr ? "تواصل معنا" : "Contact"}
              </a>
            </li>
          </ul>

          <div className="nav-side">
            {/* Switch langue */}
            <Link href="/en" className="icon ms-3">
              <span> EN </span>
            </Link>
            <Link href="/ar" className="icon ms-3">
              <span> AR </span>
            </Link>

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
