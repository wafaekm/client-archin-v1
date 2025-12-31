'use client';
import React, { useEffect } from 'react';
import { Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Challenge() {
  useEffect(() => {
    const cursor = document.querySelector('.float-cursor');
    const handleMouseMove = (e) => {
      // const parentOffset =
      //   floatBoxRef.current.parentElement.getBoundingClientRect();
      const relX = e.offsetX;
      const relY = e.offsetY;
      // console.log('x', relX, 'y', relY);
      console.log(e);
      cursor.style.left = relX * 2 + 'px';
      cursor.style.top = relY + 'px';
      cursor.classList.add('show');
    };

    const handleMouseLeave = () => {
      document.querySelector('.float-cursor').classList.remove('show');
    };

    document
      .querySelector('.float_box_container')
      .addEventListener('mousemove', handleMouseMove);
    document
      .querySelector('.float_box_container')
      .addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document
        .querySelector('.float_box_container')
        .removeEventListener('mousemove', handleMouseMove);
      document
        .querySelector('.float_box_container')
        .removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  const swiperOptions = {
    modules: [Keyboard],
    spaceBetween: 30,
    speed: 1000,
    pagination: false,
    navigation: false,
    mousewheel: false,
    keyboard: true,
    autoplay: false,
    loop: false,
    slidesPerView: 2.5,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      787: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 2.5,
      },
    },
  };
  return (
    <section className="tc-challenge-style2">
      <div className="container">
        <h3 className="fsz-45 text-capitalize mb-60 js-splittext-lines">
          Challenge & Concept
        </h3>
        <div
          className="text fsz-24 mb-100 wow fadeInUp slow"
          data-wow-delay="0.2s"
        >
          Create an unconventional yet user-friendly website – innovative, with
          a clean and simple design that communicates brand values and showcases
          multi-media content. Site that spreads the message: &quot;Islamic
          stories your child will love&quot;
        </div>
      </div>
      <div className="content float_box_container">
        <div className="challenge-slider">
          <Swiper {...swiperOptions}>
            <SwiperSlide>
              <div className="case-card">
                <a
                  href="/innerpages/assets/img/s_project2/ch1.jpg"
                  className="img"
                  data-fancybox="cases"
                >
                  <img
                    src="/innerpages/assets/img/s_project2/ch1.jpg"
                    alt=""
                    className="img-cover"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="case-card">
                <a
                  href="/innerpages/assets/img/s_project2/ch2.jpg"
                  className="img"
                  data-fancybox="cases"
                >
                  <img
                    src="/innerpages/assets/img/s_project2/ch2.jpg"
                    alt=""
                    className="img-cover"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="case-card">
                <a
                  href="/innerpages/assets/img/s_project2/ch3.jpg"
                  className="img"
                  data-fancybox="cases"
                >
                  <img
                    src="/innerpages/assets/img/s_project2/ch3.jpg"
                    alt=""
                    className="img-cover"
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="float-cursor float_box">
          Hold <br /> and Drag
        </div>
      </div>
    </section>
  );
}

export default Challenge;
