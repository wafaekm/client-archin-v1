'use client';
import React from 'react';
import data from '@/data/main-page/innerpages';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
function DarkSection() {
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,
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
      700: {
        slidesPerView: 2,
      },

      1000: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className="tc-dark-sections pt-80">
      <div className="tc-inner-pages">
        <div className="container">
          <div
            className="top-info mb-80 wow fadeInUp slow"
            data-wow-delay="0.2s"
          >
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <h3 className="fsz-45 fw-600"> Beautiful Inner Pages </h3>
              </div>
              <div className="col-lg-5">
                <div className="text fsz-16 color-ccc text-lg-end mt-4 mt-lg-0">
                  From Fancy Images to Asymmetric Slider, Archin includes <br />
                  every element you may need to create any kind ofwebsite
                  without 3rd party plugins.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pages-slider wow fadeInUp slow" data-wow-delay="0.4s">
          <Swiper {...swiperOptions}>
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <a href={item.link} className="img d-block" target="_blank">
                  <img src={item.img} alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default DarkSection;
