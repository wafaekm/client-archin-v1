'use client';
import React, { useEffect } from 'react';
import data from '@/data/innerpages/portfolio/case';
import { Swiper, SwiperSlide } from 'swiper/react';
function Cases() {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 1000,

    keyboard: true,
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
  return (
    <section className="tc-featured-cases-style1">
      <div className="content">
        <h3 className="fsz-45 text-capitalize mb-60 js-splittext-lines">
          featured cases
        </h3>
        <ul
          className="nav nav-pills mb-50 wow fadeInUp slow"
          data-wow-delay="0.2s"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-tab1-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tab1"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-tab2-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tab2"
            >
              Architecture
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-tab3-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tab1"
            >
              Interior
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-tab4-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tab2"
            >
              Landscape
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-tab5-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tab1"
            >
              Furniture
            </button>
          </li>
        </ul>
        <div
          className="tab-content wow fadeInUp slow float_box_container"
          data-wow-delay="0.4s"
          id="pills-tabContent"
        >
          <div className="tab-pane fade show active" id="pills-tab1">
            <div className="cases-slider">
              <Swiper {...swiperOptions}>
                {data.case1.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="case-card">
                      <a href={item.img} className="img" data-fancybox="cases">
                        <img src={item.img} alt="" className="img-cover" />
                      </a>
                      <div className="info">
                        <div className="tags mb-30">
                          <a href="#"> {item.sub1} </a>
                          <a href="#"> {item.sub2} </a>
                        </div>
                        <h3 className="title fsz-35 mb-20">
                          <a href="#" className="hover-orange1">
                            {item.title}
                          </a>
                        </h3>
                        <div className="text color-666">
                          {item.desc.split('<br />')[0]} <br />{' '}
                          {item.desc.split('<br />')[2]}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-tab2">
            <div className="cases-slider">
              <Swiper {...swiperOptions}>
                {data.case2.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="case-card">
                      <a href={item.img} className="img" data-fancybox="cases">
                        <img src={item.img} alt="" className="img-cover" />
                      </a>
                      <div className="info">
                        <div className="tags mb-30">
                          <a href="#"> {item.sub1} </a>
                          <a href="#"> {item.sub2} </a>
                        </div>
                        <h3 className="title fsz-35 mb-20">
                          <a href="#" className="hover-orange1">
                            {item.title}
                          </a>
                        </h3>
                        <div className="text color-666">
                          {item.desc.split('<br />')[0]} <br />{' '}
                          {item.desc.split('<br />')[2]}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="float-cursor float_box">
            Hold <br /> and Drag
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cases;
