'use client';
import React from 'react';
import { Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Autoplay, Keyboard],
    spaceBetween: 30,
    speed: 1000,
    pagination: false,
    navigation: false,
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
  };
  return (
    <section className="tc-testimonials-style2">
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="testi-slider">
                <Swiper {...swiperOptions}>
                  <SwiperSlide>
                    <div className="testi-card">
                      <div className="text js-splittext-lines">
                        “We always knew what was happening and what was going to
                        happen. They did amazing work and an exquisite design
                        and the lighting is incredible.”
                      </div>
                      <div className="author-inf mt-50">
                        <p className="fsz-18 fw-600"> Dominik Szoboszlai </p>
                        <small className="fsz-14 color-666 mt-15">
                          Investor of Dallas Homestay Group JSC
                        </small>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
