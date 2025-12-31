'use client';
import React, { useEffect, useRef } from 'react';
import data from '@/data/home1-rtl/projects/projects1';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Projects() {
  const swiperOptions = {
    modules: [Navigation, Pagination, Mousewheel, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: false,
    mousewheel: false,
    keyboard: true,
    loop: false,
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },

      1000: {
        slidesPerView: 2,
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
    <section className="tc-projects-style1">
      <div className="container">
        <div className="title mb-70">
          <h2 className="fsz-45"> مشاريع مميزة </h2>
        </div>
        <div className="tabs-links mb-50">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-proj1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj1"
                    type="button"
                  >
                    متميز
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-proj2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj2"
                    type="button"
                  >
                    معمار
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-proj3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj1"
                    type="button"
                  >
                    تصميم داخلى
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-proj4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj2"
                    type="button"
                  >
                    منظر جمالي
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-proj5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj1"
                    type="button"
                  >
                    أثاث
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-0 text-lg-end">
              <a
                href="#"
                className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
              >
                <span>
                  شاهد جميع المشاريع
                  <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-proj1"
              role="tabpanel"
              aria-labelledby="pills-proj1-tab"
            >
              <div className="projects-content float_box_container">
                <div className="projects-slider">
                  <Swiper {...swiperOptions}>
                    {data.map((item, i) => (
                      <SwiperSlide key={i}>
                        <div className="project-card">
                          <a
                            href={item.img}
                            className="img"
                            data-fancybox="proj"
                          >
                            <img src={item.img} alt="" className="img-cover" />
                          </a>
                          <div className="info">
                            <div className="tags">
                              <a href="#"> {item.sub1} </a>
                              <a href="#"> {item.sub2} </a>
                            </div>
                            <h3 className="title">
                              <a href="#">{item.title}</a>
                            </h3>
                            <div className="text">{item.desc}</div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="float-cursor float_box">
                  اضغط <br /> واسحب
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-proj2"
              role="tabpanel"
              aria-labelledby="pills-proj2-tab"
            >
              <div className="projects-content float_box_container">
                <div className="projects-slider">
                  <Swiper {...swiperOptions}>
                    <SwiperSlide>
                      <div className="project-card">
                        <a
                          href="/home1/assets/img/projects/proj3.jpg"
                          className="img"
                          data-fancybox="proj"
                        >
                          <img
                            src="/home1/assets/img/projects/proj3.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </a>
                        <div className="info">
                          <div className="tags">
                            <a href="#"> الأثاث </a>
                            <a href="#"> تصميم داخلى </a>
                          </div>
                          <h3 className="title">
                            <a href="#"> فيلا خاصة B63 </a>
                          </h3>
                          <div className="text">
                            ستكون هذه المنطقة عبارة عن وصف مختصر للمشروع، ويمكنك
                            تحديد إظهاره أو إخفائه، <br /> وهذه عينة لفقرة قصيرة
                            لهذا.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-card">
                        <a
                          href="/home1/assets/img/projects/proj1.jpg"
                          className="img"
                          data-fancybox="proj"
                        >
                          <img
                            src="/home1/assets/img/projects/proj1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </a>
                        <div className="info">
                          <div className="tags">
                            <a href="#"> تصميم داخلى </a>
                            <a href="#"> الأثاث </a>
                          </div>
                          <h3 className="title">
                            <a href="#"> تاون هاوس في سان خوسيه </a>
                          </h3>
                          <div className="text">
                            ستكون هذه المنطقة عبارة عن وصف مختصر للمشروع، ويمكنك
                            تحديد إظهاره أو إخفائه، <br /> وهذه عينة لفقرة قصيرة
                            لهذا.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-card">
                        <a
                          href="/home1/assets/img/projects/proj1.jpg"
                          className="img"
                          data-fancybox="proj"
                        >
                          <img
                            src="/home1/assets/img/projects/proj1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </a>
                        <div className="info">
                          <div className="tags">
                            <a href="#"> الأثاث </a>
                            <a href="#"> تصميم داخلى </a>
                          </div>
                          <h3 className="title">
                            <a href="#"> تاون هاوس في سان خوسيه </a>
                          </h3>
                          <div className="text">
                            ستكون هذه المنطقة عبارة عن وصف مختصر للمشروع، ويمكنك
                            تحديد إظهاره أو إخفائه، <br /> وهذه عينة لفقرة قصيرة
                            لهذا.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-card">
                        <a
                          href="/home1/assets/img/projects/proj2.jpg"
                          className="img"
                          data-fancybox="proj"
                        >
                          <img
                            src="/home1/assets/img/projects/proj2.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </a>
                        <div className="info">
                          <div className="tags">
                            <a href="#"> تصميم داخلى </a>
                            <a href="#"> الأثاث </a>
                          </div>
                          <h3 className="title">
                            <a href="#">
                              تجديد الإقامة المنزلية والتصميم الداخلي
                            </a>
                          </h3>
                          <div className="text">
                            ستكون هذه المنطقة عبارة عن وصف مختصر للمشروع، ويمكنك
                            تحديد إظهاره أو إخفائه، <br /> وهذه عينة لفقرة قصيرة
                            لهذا.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <div className="float-cursor float_box">
                  اضغط <br /> واسحب
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
