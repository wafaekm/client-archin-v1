'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const imgSwiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: {
      nextEl: '.tc-testimonials-style2 .img-slider .swiper-button-next',
      prevEl: '.tc-testimonials-style2 .img-slider .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    loop: true,
  };
  const textSwiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    pagination: {
      el: '.text-side .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.text-side .swiper-button-next',
      prevEl: '.text-side .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    loop: true,
  };
  return (
    <section className="tc-testimonials-style2">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="img-slider">
              <Swiper {...imgSwiperOptions}>
                <SwiperSlide>
                  <div className="slider-card">
                    <div className="img">
                      <img
                        src="/home2/assets/img/testimonials/testi1.jpg"
                        alt=""
                        className="main-img img-cover"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap1.png"
                        alt=""
                        className="shap1"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap2.png"
                        alt=""
                        className="shap2"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-card">
                    <div className="img">
                      <img
                        src="/home2/assets/img/testimonials/testi2.jpg"
                        alt=""
                        className="main-img img-cover"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap1.png"
                        alt=""
                        className="shap1"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap2.png"
                        alt=""
                        className="shap2"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-card">
                    <div className="img">
                      <img
                        src="/home2/assets/img/testimonials/testi3.jpg"
                        alt=""
                        className="main-img img-cover"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap1.png"
                        alt=""
                        className="shap1"
                      />
                      <img
                        src="/home2/assets/img/testimonials/testi_shap2.png"
                        alt=""
                        className="shap2"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="arrows">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-side">
              <div className="text-slider">
                <Swiper {...textSwiperOptions}>
                  <SwiperSlide>
                    <div className="text sub-font">
                      &ldquo;Great service and relationship from the design to
                      implementation even after project completion. Regular
                      updates and communication from start to finish. Highly
                      recommended!&ldquo;
                    </div>
                    <div className="user-wrapper">
                      <div className="user-content">
                        <div className="img">
                          <img
                            src="/home2/assets/img/avatar.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="inf">
                          <h6 className="fsz-18"> Bradley Gordon </h6>
                          <p className="color-ccc mt-2"> Hillsborough, NC </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text sub-font">
                      &ldquo;Great service and relationship from the design to
                      implementation even after project completion. Regular
                      updates and communication from start to finish. Highly
                      recommended!&ldquo;
                    </div>
                    <div className="user-wrapper">
                      <div className="user-content">
                        <div className="img">
                          <img
                            src="/home2/assets/img/avatar.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="inf">
                          <h6 className="fsz-18"> Bradley Gordon </h6>
                          <p className="color-ccc mt-2"> Hillsborough, NC </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="slider-controls">
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="logos">
          <a href="#">
            <img src="/home2/assets/img/clients/cl1.svg" alt="" />
          </a>
          <a href="#">
            <img src="/home2/assets/img/clients/cl2.svg" alt="" />
          </a>
          <a href="#">
            <img src="/home2/assets/img/clients/cl3.svg" alt="" />
          </a>
          <a href="#">
            <img src="/home2/assets/img/clients/cl4.svg" alt="" />
          </a>
          <a href="#">
            <img src="/home2/assets/img/clients/cl5.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
