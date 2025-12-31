'use client';
import React, { useEffect, useRef } from 'react';
import About from '@/components/home8_portfolio/About';
import Services from '@/components/home8_portfolio/Services';
import Portfolio from '@/components/home8_portfolio/Portfolio';
import Clients from '@/components/home8_portfolio/Clients';
import Partners from '@/components/home8_portfolio/Partners';
import Team from '@/components/home8_portfolio/Team';
import Contact from '@/components/home8_portfolio/Contact';
import Control from '@/components/home8_portfolio/Control';
// import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

function Home8Page() {
  const swiperOptions = {
    modules: [Navigation, Autoplay, Pagination, Mousewheel],
    onSwiper(swiper) {
      var activeSlide = swiper.activeIndex;
      //   console.log(swiper.activeIndex);
      //   console.log(swiper);
      //   console.log(swiper.slides);
      //   console.log(typeof swiper.slides[activeSlide].classList);
      //   console.log(swiper.slides[activeSlide].classList.value);
      // .map((item) =>
      // item.includes('reverse-color')
      if (
        swiper.slides[activeSlide].classList.value.includes('reverse-color')
      ) {
        document.body.classList.add('reverse-color');
      } else {
        document.body.classList.remove('reverse-color');
      }
    },
    onResize(swiper) {
      swiper.update();
    },
    slidesPerView: 1,
    spaceBetween: 0,
    // centeredSlides: true,
    speed: 1000,
    direction: 'vertical',
    pagination: {
      el: '.full-page-pagination .swiper-pagination',
      clickable: true,
    },
    navigation: false,
    mousewheel: false,
    keyboard: true,
    autoplay: false,
    loop: false,
    mousewheel: {
      enabled: false,
      releaseOnEdges: true,
    },
    breakpoints: {
      0: {
        mousewheel: {
          enabled: false,

          releaseOnEdges: false,
        },
        direction: 'vertical',
      },
      480: {
        mousewheel: {
          enabled: false,

          releaseOnEdges: false,
        },
        direction: 'vertical',
      },
      787: {
        mousewheel: {
          enabled: false,

          releaseOnEdges: false,
        },
        direction: 'horizontal',
      },
      991: {
        mousewheel: false,

        mousewheel: {
          enabled: false,

          releaseOnEdges: false,
        },
        // mousewheel: false,
        direction: 'horizontal',
      },
      1000: {
        direction: 'horizontal',
      },
    },
  };
  return (
    <Swiper {...swiperOptions}>
      <SwiperSlide>
        <About />
      </SwiperSlide>
      <SwiperSlide className="reverse-color">
        <Services />
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio />
      </SwiperSlide>
      <SwiperSlide className="reverse-color">
        <Clients />
      </SwiperSlide>
      <SwiperSlide className="reverse-color">
        <Partners />
      </SwiperSlide>
      <SwiperSlide>
        <Team />
      </SwiperSlide>
      <SwiperSlide>
        <Contact />
      </SwiperSlide>
      {/*
       */}
    </Swiper>
  );
}

export default Home8Page;
