'use client';
import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Mobile() {
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 140,
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 10000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    //   allowTouchMove: false,
    disableOnInteraction: true,
  };
  return (
    <section className="tc-mobile">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <h2 className="fsz-45 fw-600 mb-30">
                Responsive Friendly <br /> & Optimized
              </h2>
              <div className="text fsz-16 mb-60 color-666">
                Archin automatically detects the screen size and adjust the
                content accordingly to provide fully responsive and optimised
                sites.
              </div>
              <ul className="check-list fsz-20 fw-600 lh-7">
                <li>
                  <span className="icon me-2">
                    <i className="fal fa-check-circle"></i>
                  </span>
                  <span className="txt"> Hide any sections </span>
                </li>
                <li>
                  <span className="icon me-2">
                    <i className="fal fa-check-circle"></i>
                  </span>
                  <span className="txt"> Custom Mobile Modules </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="img">
              <img src="home_preview/assets/img/layout.png" alt="" />
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="img mt-5 mt-lg-0 wow zoomIn slow"
              data-wow-delay="0.4s"
            >
              <img src="home_preview/assets/img/mobile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="marq-content">
        <div className="marq-slider">
          <Swiper {...swiperOptions}>
            <SwiperSlide>
              <a href="#"> Free Support </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#"> Lifetime Updates </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <img src="home_preview/assets/img/pattern.png" alt="" className="patt" />
    </section>
  );
}

export default Mobile;
