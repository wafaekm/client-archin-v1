'use client';
import React from 'react';
import data from '@/data/home1/blogs';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
function Blog() {
  const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 2,
    spaceBetween: 100,
    // centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: {
      nextEl: '.tc-blog-style1 .swiper-button-next',
      prevEl: '.tc-blog-style1 .swiper-button-prev',
    },
    keyboard: true,
    loop: false,
    autoplay: {
      delay: 6000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 1.5,
      },

      1000: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section className="tc-blog-style1">
      <div className="container">
        <div className="mb-80 js-splittext-lines">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="fsz-45"> Latest Posts </h2>
            </div>
            <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
              <a
                href="#"
                className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
              >
                <span>
                  All Articles <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="blog-slider position-relative overflow-hidden">
          <Swiper {...swiperOptions}>
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="blog-card">
                  <div className="img">
                    <img src={item.img} alt="" className="img-cover" />
                  </div>
                  <div className="info">
                    <div className="date">
                      <div className="num fsz-45 mb-2"> {item.num} </div>
                      <small className="fsz-12 text-uppercase color-666">
                        {item.history.split('<br />')[0]} <br />{' '}
                        {item.history.split('<br />')[1]}
                      </small>
                    </div>
                    <div className="cont">
                      <a
                        href="#"
                        className="title d-block fsz-24 hover-orange1 mb-15 fw-600"
                      >
                        {item.title}
                      </a>
                      <small className="fsz-12 color-orange1">
                        {item.subTitle}
                      </small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </section>
  );
}

export default Blog;
