'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    pagination: {
      el: '.tc-clients-style1 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.tc-clients-style1 .swiper-button-next',
      prevEl: '.tc-clients-style1 .swiper-button-prev',
    },
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    loop: true,
  };
  const swiperMarqOptions = {
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
    <section className="tc-testimonials-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6 className="fsz-18 text-uppercase lh-4">
              what clients say <br /> about us
            </h6>
            <div className="lg-icon color-orange1">
              <i className="la la-quote-right"></i>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tc-clients-style1">
              <div className="clients-slider1">
                <Swiper {...swiperOptions}>
                  <SwiperSlide>
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        “The entire team tactfully delivered a project of
                        exceptional quality while staying on schedule and under
                        budget. More than what i&apos;m expected. I’m really
                        satisfied and recommended!.”
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            M. Salah
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Dash Private Villa Project Investor
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        “The entire team tactfully delivered a project of
                        exceptional quality while staying on schedule and under
                        budget. More than what i&apos;m expected. I’m really
                        satisfied and recommended!.”
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            M. Salah
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Dash Private Villa Project Investor
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        “The entire team tactfully delivered a project of
                        exceptional quality while staying on schedule and under
                        budget. More than what i&apos;m expected. I’m really
                        satisfied and recommended!.”
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            M. Salah
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Dash Private Villa Project Investor
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="slider-controls">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marq-slider">
        <Swiper {...swiperMarqOptions}>
          <SwiperSlide>
            <a href="#"> Creative </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Flexiable </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Dedicated </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <img src="/home1/assets/img/c_line3.png" alt="" className="c-line" />
    </section>
  );
}

export default Testimonials;
