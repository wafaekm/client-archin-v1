"use client";
import React from "react";
import Link from "next/link";
import BASE_PATH from "@/common/basePath";

function Navbar() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = 110;
    const y = el.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onNav = (id) => (e) => {
    e.preventDefault();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    scrollToId(id);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x" dir="rtl">
      <div className="container-fluid content">
        <Link className="navbar-brand" href="/home1-rtl/">
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#top" onClick={onNav("top")}>
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={onNav("projects")}>
                المشاريع
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#chat" onClick={onNav("chat")}>
                تواصل معنا
              </a>
            </li>
          </ul>

          <div className="nav-side">
            <Link href="/" className="icon ms-3"><span> EN </span></Link>
            <Link href="/home1-rtl/" className="icon ms-3"><span> AR </span></Link>

            <button type="button" className="icon ms-5 fsz-21 btn btn-link p-0">
              <span><i className="la la-search"></i></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
