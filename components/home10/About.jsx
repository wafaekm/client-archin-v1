'use client';
import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function About() {
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 0,
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
    <section className="tc-about-style10 section-padding-x overflow-hidden">
      <div className="container-fluid">
        <div className="content section-padding border-top borderd">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img">
                <img
                  src="/home10/assets/img/about.png"
                  alt=""
                  className="img-contain wow fadeInUp"
                  data-wow-delay="0.2s"
                />
                <div className="years-box wow zoomIn" data-wow-delay="0.5s">
                  <h4> 25 </h4>
                  <span className="text-uppercase color-666">
                    Year of <br /> Experience
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info">
                <div
                  className="section-head-style10 mb-50 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h2 className="fsz-50 ltspc--3 lh-2 js-splittext-lines">
                    We believe that architecture has the power to shape the way
                    we live, work and interact with our sourroundings
                  </h2>
                </div>
                <div
                  className="text color-666 fsz-21 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  Archin Studio is an archiectural practice based in Boston.
                  <br /> We cut ourteeth on designing and creating buildings
                  that are both beautiful and sustainable.
                </div>
                <a
                  href="#"
                  className="butn borderd border rounded-pill mt-80 hover-bg-black wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <span>
                    More About Us
                    <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-maquee">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <a href="#"> Sustainable Design </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Building Beyond </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Functional Spaces Rationalize </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Bespoke Solutions </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Sustainable Design </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Building Beyond </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default About;
