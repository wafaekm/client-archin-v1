"use client";

import React from "react";
import Link from "next/link";
import projects from "@/data/home1/projects/projects1.json";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Projects({ lang = "ar" }) {
  const isAr = lang === "ar";
  const list = Array.isArray(projects) ? projects : [];

  const swiperOptions = {
    modules: [Navigation, Pagination, Mousewheel, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    pagination: false,
    navigation: false,
    mousewheel: false,
    keyboard: true,
    loop: false,
    autoplay: false,
    breakpoints: {
      0: { slidesPerView: 1 },
      700: { slidesPerView: 2 },
      1000: { slidesPerView: 2 },
    },
  };

  const hrefFor = (slug) => `/${isAr ? "ar" : "en"}/projects/${slug}`;

  return (
<section id="projects" className="tc-projects-style1" dir="rtl">
  <div className="container">
        <div className="title mb-70">
          <h2 className="fsz-45">مشاريع مميزة</h2>
        </div>

        <div className="projects">
          <div className="projects-content">
            <div className="projects-slider">
              <Swiper {...swiperOptions}>
                {list.map((p) => {
                  const title = isAr ? (p.title_ar || p.title_en) : p.title_en;
                  const subTitle = isAr ? (p.subTitle_ar || p.subTitle_en) : p.subTitle_en;
                  const img = p.img || "home1/assets/img/projects/proj1.jpg";

                  // tags simples (tu peux remplacer par p.tags si tu en ajoutes)
                  const tag1 = isAr ? "تشطيبات" : "Fit-out";
                  const tag2 = isAr ? "تسليم مفتاح" : "Turnkey";

                  return (
                    <SwiperSlide key={p.slug}>
                      <div className="project-card">
                        {/* IMPORTANT: lien vers la page projet, pas vers l'image */}
                        <Link href={hrefFor(p.slug)} className="img">
                          <img src={img} alt={title} className="img-cover" />
                        </Link>

                        <div className="info">
                          <div className="tags">
                            <span>{tag1}</span>
                            <span>{tag2}</span>
                          </div>

                          <h3 className="title">
                            <Link href={hrefFor(p.slug)}>{title}</Link>
                          </h3>

                          {subTitle && <div className="text">{subTitle}</div>}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="text-end mt-40">
       

        </div>
      </div>
    </section>
  );
}

export default Projects;
