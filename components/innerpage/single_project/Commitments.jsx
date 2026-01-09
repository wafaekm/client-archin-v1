"use client";
import React from "react";

const CONTENT = {
  en: {
    headingTop: "our commitments",
    headingBottom: "that guide every project",
    footer: "Built around Quality, Time, and Cost discipline.",
    items: [
      {
        title: "Quality Excellence",
        desc:
          "Highest standards in materials, craftsmanship, and design—delivering outcomes that meet and exceed expectations.",
        icon: "la la-award",
      },
      {
        title: "Timely Delivery",
        desc:
          "Strict scheduling and efficient project management to complete every project on time, without compromise.",
        icon: "la la-clock",
      },
      {
        title: "Cost Efficiency",
        desc:
          "Optimized resources and transparent budgeting to achieve best value while maintaining cost control and quality.",
        icon: "la la-coins",
      },
      {
        title: "Compliance & Safety",
        desc:
          "End-to-end delivery aligned with technical standards and safe execution practices.",
        icon: "la la-check-circle",
      },
    ],
  },
  ar: {
    headingTop: "التزاماتنا",
    headingBottom: "التي تقود كل مشروع",
    footer: "مرتكزة على الجودة والوقت والانضباط المالي.",
    items: [
      {
        title: "تميز الجودة",
        desc:
          "أعلى المعايير في المواد والتنفيذ والتصميم — لنضمن نتائج تلبي التوقعات وتتجاوزها.",
        icon: "la la-award",
      },
      {
        title: "التسليم في الوقت",
        desc:
          "التزام صارم بالجدول الزمني وإدارة فعّالة للمشاريع لإنجاز الأعمال في الموعد دون أي تنازل.",
        icon: "la la-clock",
      },
      {
        title: "كفاءة التكلفة",
        desc:
          "ترشيد الموارد وميزانيات شفافة لتحقيق أفضل قيمة مع الحفاظ على التحكم بالتكاليف والجودة.",
        icon: "la la-coins",
      },
      {
        title: "الامتثال والسلامة",
        desc:
          "تنفيذ متكامل ومتوافق مع المعايير الفنية وممارسات السلامة في جميع مراحل المشروع.",
        icon: "la la-check-circle",
      },
    ],
  },
};

export default function Commitments({ lang = "en" }) {
  const isAr = lang === "ar";
  const t = isAr ? CONTENT.ar : CONTENT.en;

  return (
    <section
      className="tc-testimonials-style1 tc-commitments-style1"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-4 wow zoomIn slow" data-wow-delay="0.2s">
            <h6 className="fsz-18 text-uppercase lh-4">
              {t.headingTop} <br /> {t.headingBottom}
            </h6>
            <div className="lg-icon color-orange1">
              <i className="la la-star"></i>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              {t.items.map((c, idx) => (
                <div key={idx} className="col-md-6 mb-4">
                  <div className="p-4 radius-15" style={{ border: "1px solid #ccc" }}>
                    <div className="d-flex align-items-center mb-3">
                      <div className={isAr ? "ms-3 fsz-30 color-orange1" : "me-3 fsz-30 color-orange1"}>
                        <i className={c.icon}></i>
                      </div>
                      <h5 className="mb-0 fsz-20 fw-600">{c.title}</h5>
                    </div>
                    <p className="mb-0 color-666" style={{ lineHeight: 1.9 }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 color-666 fsz-14">{t.footer}</div>
          </div>
        </div>
      </div>

      <img src="/innerpages/assets/img/c_line3.png" alt="" className="c-line wow" />
    </section>
  );
}
