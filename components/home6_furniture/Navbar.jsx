'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Navbar() {
  const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: {
      nextEl: '.text-slider .swiper-button-next',
      prevEl: '.text-slider .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    loop: true,
  };
  return (
    <nav className="tc-top-nav-style6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-slider">
              <Swiper {...swiperOptions}>
                <SwiperSlide>
                  <div className="slider-card text-uppercase">
                    <p>
                      10% OFF for New Member!
                      <a
                        href="#"
                        className="text-decoration-underline fst-italic"
                      >
                        Register Now
                      </a>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-card text-uppercase">
                    <p>
                      10% OFF for New Member!
                      <a
                        href="#"
                        className="text-decoration-underline fst-italic"
                      >
                        Register Now
                      </a>
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
