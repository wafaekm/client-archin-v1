"use client";
import React from "react";

function Project({ project, lang = "en" }) {
  const isAr = lang === "ar";

  // IMPORTANT: prevent crash during prerender/build
  if (!project) {
    return (
      <section className="tc-project-style1 header" dir={isAr ? "rtl" : "ltr"}>
        <div className="main-info">
          <div className="container">
            <h1 className="title">{isAr ? "المشروع غير موجود" : "Project not found"}</h1>
            <div className="text color-666 mt-20">
              {isAr
                ? "تعذر تحميل بيانات هذا المشروع. الرجاء العودة إلى صفحة المشاريع."
                : "We couldn't load this project data. Please go back to the projects list."}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const title = isAr ? (project.title_ar || project.title_en) : project.title_en;
  const subTitle = isAr ? (project.subTitle_ar || project.subTitle_en) : project.subTitle_en;

  const overviewRaw = isAr ? (project.overview_ar || project.overview_en) : project.overview_en;
  const overviewParagraphs = (overviewRaw || "").split("\n").filter(Boolean);

  const services = isAr ? (project.services_ar || project.services_en) : project.services_en;
  const location = isAr ? (project.location_ar || project.location_en) : project.location_en;
  const status = isAr ? (project.status_ar || project.status_en) : project.status_en;

  const scope = isAr ? (project.scope_ar || project.scope_en) : project.scope_en;
  const deliverables = isAr ? (project.deliverables_ar || project.deliverables_en) : project.deliverables_en;

  const gallery = Array.isArray(project.gallery) ? project.gallery : [];
  const heroImg = project.img || "innerpages/assets/img/s_project/m1.jpg";

  return (
    <section className="tc-project-style1 header" dir={isAr ? "rtl" : "ltr"}>
      {/* HERO TEXT */}
      <div className="main-info">
        <div className="container">
          {/* <div className="tags mb-40">
            <a href="#">{isAr ? "تسليم مفتاح" : "Turnkey"}</a>
            <a href="#">{isAr ? "حلول هندسية" : "Engineering"}</a>
          </div> */}

          <h1 className="title">{title}</h1>

          {subTitle && (
            <div className="text color-666 mt-20" style={{ whiteSpace: "pre-line", maxWidth: 900 }}>
              {subTitle}
            </div>
          )}
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="main-img">
        <img src={heroImg} alt={title} className="img-cover" data-speed="1.25" />
      </div>

      {/* CONTENT */}
      <div className="description" style={{ position: "relative", zIndex: 2 }}>
        <div className="container">
          <div className="row g-5">
            {/* LEFT */}
            <div className="col-lg-8">
              <h3 className="sub-title fsz-45 mb-40 wow fadeInUp slow" data-wow-delay="0.2s">
                {isAr ? "نبذة عن المشروع" : "Project Overview"}
              </h3>

              {overviewParagraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="fsz-18 color-666 mb-20 wow fadeInUp slow"
                  data-wow-delay="0.2s"
                  style={{ whiteSpace: "pre-line", lineHeight: 1.9 }}
                >
                  {p}
                </p>
              ))}

              <div className="row mt-50">
                <div className="col-lg-6">
                  <h4 className="fsz-24 mb-20">{isAr ? "نطاق الأعمال" : "Scope of Work"}</h4>
                  <ul className="dots-list fsz-16 color-666" style={{ lineHeight: 1.9 }}>
                    {(scope || []).map((s, i) => (
                      <li key={i} className="d-flex my-2">
                        <span className="icon me-3">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-6">
                  <h4 className="fsz-24 mb-20">{isAr ? "مخرجات المشروع" : "Key Deliverables"}</h4>
                  <ul className="dots-list fsz-16 color-666" style={{ lineHeight: 1.9 }}>
                    {(deliverables || []).map((d, i) => (
                      <li key={i} className="d-flex my-2">
                        <span className="icon me-3">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT (FACTS) */}
            <div className="col-lg-4">
              <div
                className="p-4"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 14,
                  position: "sticky",
                  top: 110,
                }}
              >
                <h4 className="fsz-24 mb-25">{isAr ? "معلومات المشروع" : "Project Facts"}</h4>

                <div className="mb-20">
                  <small className="d-block color-666 text-uppercase fsz-12 mb-2">
                    {isAr ? "الخدمات" : "Services"}
                  </small>
                  <div className="fsz-16" style={{ lineHeight: 1.8 }}>
                    {services}
                  </div>
                </div>

                <div className="mb-20">
                  <small className="d-block color-666 text-uppercase fsz-12 mb-2">
                    {isAr ? "الموقع" : "Location"}
                  </small>
                  <div className="fsz-16">{location}</div>
                </div>

                <div>
                  <small className="d-block color-666 text-uppercase fsz-12 mb-2">
                    {isAr ? "الحالة" : "Status"}
                  </small>
                  <div className="fsz-16">{status}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY GRID (plus propre que Swiper) */}
        {gallery.length > 0 && (
          <div className="imgs mt-120" style={{ position: "relative", zIndex: 1 }}>
            <div className="container">
              <h3 className="sub-title fsz-45 mb-40 wow fadeInUp slow" data-wow-delay="0.2s">
                {isAr ? "صور المشروع" : "Project Gallery"}
              </h3>

              <div className="row">
                {gallery.map((src, idx) => (
                  <div key={idx} className="col-lg-6">
                    <div className="img th-600 radius-7 overflow-hidden mt-30 wow zoomIn slow">
                      <img src={src} alt="" className="img-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;
