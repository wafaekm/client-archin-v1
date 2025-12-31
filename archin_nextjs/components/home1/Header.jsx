'use client';
import React from 'react';
import data from '@/data/home1/header-slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Parallax, Pagination, Mousewheel } from 'swiper';

function Header() {
  // function incial({ swiper }) {
  //   swiper.slides.forEach((slide) => {
  //     const img = slide.querySelector('.img');
  //     img.setAttribute('data-swiper-parallax', 0.75 * swiper.width);
  //   });
  // }
  const swiperOptions = {
    modules: [Navigation, Autoplay, Parallax, Pagination, Mousewheel],
    onSwiper(swiper) {
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i]
          .querySelector('.img')
          .setAttribute('data-swiper-parallax', 0.75 * swiper.width);
      }
    },
    onResize(swiper) {
      swiper.update();
    },
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1500,
    // mousewheel: true,
    parallax: true,
    pagination: {
      el: '.header-slider .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.header-slider .swiper-button-next',
      prevEl: '.header-slider .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    loop: true,
  };
  return (
    <header className="tc-header-style1">
      <div className="header-slider">
        <Swiper
          {...swiperOptions}
          // onInit={(swiper) => {
          //   for (let i = 0; i < swiper.slides.length; i++) {
          //     swiper.slides[i]
          //       .querySelector('.bg-img')
          //       .setAttribute('data-swiper-parallax', 0.75 * swiper.width);
          //   }
          // }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="slider-card">
                <div className="img">
                  <img src={item.img} alt="" className="img-cover" />
                </div>
                <div className="info section-padding-x pb-70">
                  <div className="row align-items-end gx-5">
                    <div className="col-lg-6 offset-lg-2">
                      <h1 data-swiper-parallax="-2000" className="js-title">
                        {item.title}
                      </h1>
                      <h5 className="fsz-30 mt-30 fw-400">{item.subTitle}</h5>
                    </div>
                    <div className="col-lg-3">
                      <div className="cont pb-30">
                        <div className="text fsz-17 fw-300 lh-4">
                          {item.desc}
                        </div>
                        <a
                          href="#"
                          className="butn border rounded-pill mt-60 hover-bg-white"
                        >
                          <span>
                            Our Services
                            <i className="small ms-1 ti-arrow-top-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-controls">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </header>
  );
}

export default Header;
