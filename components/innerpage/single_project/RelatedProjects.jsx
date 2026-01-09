"use client";
import React from "react";
import { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import projects from "@/data/home1/projects/projects1.json";

function RelatedProjects({ lang = "en", currentSlug }) {
  const swiperOptions = {
    modules: [Keyboard],
    spaceBetween: 30,
    speed: 1000,
    keyboard: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      480: { slidesPerView: 1 },
      787: { slidesPerView: 2 },
      991: { slidesPerView: 2 },
      1200: { slidesPerView: 2.5 },
    },
  };

  const items = (Array.isArray(projects) ? projects : []).slice(0, 6);


  return (
    <section className="tc-related-projects-style1">
      <div className="container">
        <div className="row align-items-center wow fadeInUp slow" data-wow-delay="0.2s">
          <div className="col-lg-9">
            <h3 className="fsz-45 text-capitalize">More Projects</h3>
          </div>
          <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
            <Link
              href={`/${lang}/projects`}
              className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
            >
              <span>
                View All Projects <i className="fal fa-arrow-up-right ms-2"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="content mt-50">
        <div className="tab-content wow fadeInUp slow" data-wow-delay="0.4s">
          <div className="tab-pane fade show active">
            <div className="cases-slider">
              <Swiper {...swiperOptions}>
                {items.map((item, i) => {
                  const title = lang === "ar" ? (item.title_ar || item.title_en) : item.title_en;
                  const overview = lang === "ar" ? (item.overview_ar || item.overview_en) : item.overview_en;

                  return (
                    <SwiperSlide key={item.slug || i}>
                      <div className="case-card">
                        <Link href={`/${lang}/projects/${item.slug}`} className="img">
                          <img src={item.img} alt={title} className="img-cover" />
                        </Link>

                        <div className="info">
                          {/* tags simples (tu peux les laisser fixes) */}
                          <div className="tags mb-30">
                            <a href="#" onClick={(e) => e.preventDefault()}>Turnkey</a>
                            <a href="#" onClick={(e) => e.preventDefault()}>MEP</a>
                          </div>

                          <h3 className="title fsz-35 mb-20">
                            <Link href={`/${lang}/projects/${item.slug}`} className="hover-orange1">
                              {title}
                            </Link>
                          </h3>

                          <div className="text color-666">
                            {(overview || "").slice(0, 120)}...
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedProjects;
