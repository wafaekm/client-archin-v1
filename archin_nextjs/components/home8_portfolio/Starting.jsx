'use client';
import React from 'react';

function Starting() {
  function openSideMenu() {
    const sideMenu = document.querySelector('#side_menu');
    const sideMenu2 = document.querySelector('.side_overlay');
    sideMenu2.classList.add('show');
    sideMenu.classList.add('show');
  }
  return (
    <div className="fixed-content">
      <div className="fixed-btns d-none d-lg-block">
        <a
          href="#"
          className="butn hover-bg-black text-uppercase bg-orange1 text-white rounded-pill me-4"
        >
          <span> Start A Project </span>
        </a>
        <a href="#" className="lang-icon">
          <span>
            <i className="fal fa-globe"></i>
          </span>
        </a>
      </div>
      <p className="fixed-txt"> © 2023 Archin Design Studio </p>
      <div className="fixed-nav">
        <a href="#" className="logo">
          <img src="/home8_portfolio/assets/img/logo.png" alt="" />
        </a>
        <span onClick={openSideMenu} className="menu-icon">
          <i className="fal fa-bars-sort"></i>
        </span>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fab fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-behance"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Starting;
