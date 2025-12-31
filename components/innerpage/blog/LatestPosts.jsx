'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function LatestPosts() {
  const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 2,
    spaceBetween: 100,
    speed: 1000,
    pagination: false,
    navigation: {
      nextEl: '.tc-latest-posts-style1 .swiper-button-next',
      prevEl: '.tc-latest-posts-style1 .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      787: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section className="tc-latest-posts-style1">
      <div className="container">
        <div className="content">
          <div className="title mb-70 wow fadeInUp slow" data-wow-delay="0.2s">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="fsz-45 text-capitalize"> Latest Articles </h3>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="arrows me-lg-0 ms-lg-auto">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="posts-slider wow fadeInUp slow" data-wow-delay="0.2s">
            <Swiper {...swiperOptions}>
              <SwiperSlide>
                <div className="post-card">
                  <a
                    href="#"
                    className="img radius-7 overflow-hidden th-400 d-block"
                  >
                    <img
                      src="/innerpages/assets/img/blog/b3.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </a>
                  <div className="info pt-50">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="date">
                          <h2 className="num fsz-45 fw-400 mb-10"> 25 </h2>
                          <p className="txt fsz-12 color-666 text-uppercase">
                            december <br /> 2023
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="cont">
                          <h3 className="fsz-24">
                            <a href="#" className="hover-orange1">
                              How to handle the day light in <br /> Vray for
                              best reality
                            </a>
                          </h3>
                          <div className="tags fsz-12 color-orange1 text-uppercase mt-20">
                            <a href="#"> Architecture, </a>
                            <a href="#"> Guide </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="post-card">
                  <a
                    href="#"
                    className="img radius-7 overflow-hidden th-400 d-block"
                  >
                    <img
                      src="/innerpages/assets/img/blog/b4.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </a>
                  <div className="info pt-50">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="date">
                          <h2 className="num fsz-45 fw-400 mb-10"> 16 </h2>
                          <p className="txt fsz-12 color-666 text-uppercase">
                            december <br /> 2023
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="cont">
                          <h3 className="fsz-24">
                            <a href="#" className="hover-orange1">
                              Sustainable Design Award <br /> 2024
                            </a>
                          </h3>
                          <div className="tags fsz-12 color-orange1 text-uppercase mt-20">
                            <a href="#"> Inspiration, </a>
                            <a href="#"> interior </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
