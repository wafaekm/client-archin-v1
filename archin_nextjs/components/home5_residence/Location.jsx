'use client';
import React from 'react';
import data from '@/data/home5_residence/location';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
function Location() {
  const swiperOptions = {
    modules: [Pagination, Navigation, EffectFade, Autoplay],
    slidesPerView: 0,
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    loop: true,
  };
  return (
    <section className="tc-location-style5">
      <div className="location-slider">
        <Swiper {...swiperOptions}>
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="slider-card">
                <img src={item.img} alt="" className="bg" />
                <div className="container">
                  <div className="content">
                    <div className="row justify-content-between">
                      <div className="col-lg-5">
                        <div className="info">
                          <div className="num-cont">
                            <span className="number"> {item.num} </span>
                            <p className="fsz-18 text-uppercase">
                              {item.subTitle.split('<br />')[0]} <br />
                              {item.subTitle.split('<br />')[1]}
                            </p>
                          </div>
                          <h2>
                            {item.title.split('<br />')[0]} <br />
                            {item.title.split('<br />')[1]}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="arrows">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}

export default Location;
