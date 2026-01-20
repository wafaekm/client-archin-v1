"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials({ lang = "en" }) {
  const isAr = lang === "ar";

  const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    pagination: { el: ".tc-clients-style1 .swiper-pagination", type: "fraction" },
    navigation: {
      nextEl: ".tc-clients-style1 .swiper-button-next",
      prevEl: ".tc-clients-style1 .swiper-button-prev",
    },
    keyboard: true,
    autoplay: { delay: 6000 },
    loop: true,
  };

  const marqSwiperOptions = {
    modules: [Autoplay],
    slidesPerView: "auto",
    spaceBetween: 140,
    centeredSlides: true,
    speed: 10000,
    autoplay: { delay: 1 },
    loop: true,
    disableOnInteraction: true,
  };

  // ✅ Mets ici TES PERSONNES (photos + noms + poste + texte)
  // Remplace les chemins d'images par tes vrais fichiers.
  const slides = isAr
    ? [
        {
          text:
            "نلتزم بتسليم مشاريع تسليم مفتاح عبر تخطيط دقيق وتنسيق فعّال بالموقع لضمان جودة ثابتة وجدول زمني واضح.",
          name: "المهندسة ويام",
          role: "مهندسة مشروع",
          img: "home1/assets/img/team/team2.png",
        },
        {
          text:
            "السلامة والامتثال جزء أساسي من طريقة عملنا. نطبّق معايير HSE ونضمن وضوح التقارير والتنسيق مع جميع الأطراف.",
          name: "المهندس عمرو",
          role: "مهندس موقع / تنفيذ",
          img: "innerpages/assets/img/team/team2.png",
        },
      ]
    : [
        {
          text:
            "We deliver turnkey projects with disciplined planning, strong coordination, and on-site control—ensuring consistent quality and predictable timelines.",
          name: "Engineer Ouiame",
          role: "Project Engineer",
          img: "home1/assets/img/team/team1.png",
        },
        {
          text:
            "Safety and compliance are embedded in our workflow. We apply HSE standards, track progress clearly, and coordinate stakeholders to ensure smooth delivery.",
          name: "Engineer Amr",
          role: "Site Engineer",
          img: "home1/assets/img/team/team1.png",
        },
      ];

  const marqWords = isAr
    ? ["تسليم مفتاح", "MEP", "تشطيب", "تجهيز", "مطاعم"]
    : ["Turnkey", "MEP", "Fit-out", "Finishing", "Restaurants"];

  return (
    <section className="tc-testimonials-style1" dir={isAr ? "rtl" : "ltr"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6 className="fsz-18 text-uppercase lh-4">
              {isAr ? "التزامنا" : "our commitment"} <br />{" "}
              {isAr ? "في كل مشروع" : "to every project"}
            </h6>
            <div className="lg-icon color-orange1">
              <i className="la la-quote-right"></i>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="tc-clients-style1">
              <div className="clients-slider1">
                <Swiper {...swiperOptions}>
                  {slides.map((s, i) => (
                    <SwiperSlide key={i}>
                      <div className="clients-card">
                        <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                          “{s.text}”
                        </div>

                        <div className="author">
                          <div className="au-img">
                            <img src={s.img} alt={s.name} className="img-cover" />
                          </div>

                          <div className="au-inf">
                            <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                              {s.name}
                            </h6>
                            <p className="text-capitalize fsz-14 color-666">
                              {s.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="slider-controls">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marq-slider">
        <Swiper {...marqSwiperOptions}>
          {marqWords.map((w, i) => (
            <SwiperSlide key={i}>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {w}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <img src="innerpages/assets/img/c_line3.png" alt="" className="c-line" />
    </section>
  );
}

export default Testimonials;
