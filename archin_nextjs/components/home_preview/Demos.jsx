'use client';
import React from 'react';
import data from '@/data/main-page/demos';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
function Demos() {
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
    <section className="tc-demos">
      <div className="container">
        <div className="top-info mb-60 wow fadeInUp slow" data-wow-delay="0.2s">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <h3 className="fsz-45 fw-600">
                Get started with <br /> pre-made websites
              </h3>
            </div>
            <div className="col-lg-5">
              <div className="text fsz-16 color-666 text-lg-end mt-4 mt-lg-0">
                8 Amazing design concepts, no-clutter with only neccessary
                design <br /> elements for maximum attention to your work
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4">
                <a
                  href={item.link}
                  className="demo-card wow fadeInUp slow"
                  data-wow-delay={item.delay}
                  target="_blank"
                >
                  <div className="img">
                    <img src={item.img} alt="" className="img-cover" />
                  </div>
                  <div className="info">
                    <h6 className="fsz-16 fw-bold"> {item.title} </h6>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="marq-content">
        <div className="marq-slider">
          <Swiper {...swiperOptions}>
            <SwiperSlide>
              <a href="#"> Smooth Scroll </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#"> RTL Version </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#"> Fully Responsive </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Demos;
