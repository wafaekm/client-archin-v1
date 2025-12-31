'use client';
import React from 'react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Clients() {
  const swiperOptions = {
    modules: [Pagination, Navigation, Keyboard, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    pagination: {
      el: '.clients-slider .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.clients-arrows .swiper-button-next',
      prevEl: '.clients-arrows .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
  };
  return (
    <section className="section tc-clients-style8">
      <div className="container">
        <div className="section-head mb-4 mb-lg-0">
          <h3 className="fsz-30 fw-600 text-uppercase">
            what client <br /> says
          </h3>
        </div>
        <div className="section-body">
          <div className="row gx-0 justify-content-between">
            <div className="col-lg-3">
              <div className="rotate-box" data-speed="1" data-lag="0.4">
                <a
                  href="#"
                  className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase"
                >
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs>
                      <path
                        id="textcircle"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      ></path>
                    </defs>
                    <text>
                      <textPath xlinkHref="#textcircle" textLength="900">
                        trusted by clients - testimonials -
                      </textPath>
                    </text>
                  </svg>
                </a>
                <img
                  src="/home8_portfolio/assets/img/vector_quote.png"
                  alt=""
                  className="icon"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="clients-slider">
                <Swiper {...swiperOptions}>
                  <SwiperSlide>
                    <div className="clients-card">
                      <div className="info">
                        <div className="text fsz-25 fw-500 mb-20 lh-4">
                          “Archin - an architecture studio with passionate,
                          profressional and full creativity. The entire team
                          tactfully delivered a project of exceptional quality
                          while staying on schedule and under budget. More than
                          what i&apos;m expected. Perfect!.&#34;
                        </div>
                        <div className="author-inf">
                          <div className="img">
                            <img
                              src="/home8_portfolio/assets/img/avatar.jpg"
                              alt=""
                              className="img-cover"
                            />
                          </div>
                          <div className="inf">
                            <p className="fsz-13 fw-bold"> Szoboslai D. </p>
                            <small className="color-666">
                              Director at Dallas Ecolodge Jsc
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clients-card">
                      <div className="info">
                        <div className="text fsz-25 fw-500 mb-20 lh-4">
                          “Archin - an architecture studio with passionate,
                          profressional and full creativity. The entire team
                          tactfully delivered a project of exceptional quality
                          while staying on schedule and under budget. More than
                          what i&apos;m expected. Perfect!.&#34;
                        </div>
                        <div className="author-inf">
                          <div className="img">
                            <img
                              src="/home8_portfolio/assets/img/avatar.jpg"
                              alt=""
                              className="img-cover"
                            />
                          </div>
                          <div className="inf">
                            <p className="fsz-13 fw-bold"> Szoboslai D. </p>
                            <small className="color-666">
                              Director at Dallas Ecolodge Jsc
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="clients-arrows">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="numbers mt-5 mt-lg-0">
                <div className="number-card">
                  <h2 className="numb"> 95% </h2>
                  <small> Clients Satisfied and repeating </small>
                </div>
                <div className="number-card">
                  <h2 className="numb"> 265+ </h2>
                  <small> projects done </small>
                </div>
              </div>
            </div>
            <div className="col-12">
              <span className="num mt-40"> 04 </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
