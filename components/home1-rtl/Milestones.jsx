import React from "react";

const milestones = [
  {
    year: "40+ سنة",
    title: "خبرة عميقة في القطاع وتسليم مُثبت للمشاريع",
    location: "السعودية",
  },
  {
    year: "100+ موظف",
    title: "طاقة بشرية لتنفيذ المشاريع السريعة بكفاءة",
    location: "العمليات",
  },
  {
    year: "تسليم مفتاح",
    title: "تصميم وتنفيذ / تجهيز داخلي / تكامل أعمال MEP",
    location: "من البداية للنهاية",
  },
  {
    year: "تركيز HSE",
    title: "تنفيذ يضع السلامة أولاً والالتزام بمتطلبات الموقع",
    location: "في الموقع",
  },
];

function MilestonesAr() {
  return (
    <section
      className="tc-awards-style1"
      style={{ position: "relative", zIndex: 2, paddingBottom: 80 }}
      dir="rtl"
    >
      <div className="container">
        <div className="awards-content">
          <div className="mb-80 text-center js-splittext-lines">
            <h2 className="fsz-45"> أبرز المحطات والقدرات </h2>
          </div>

          <div className="awards-list wow fadeInUp" data-wow-delay="0.2s">
            {milestones.map((item, i) => (
              <div key={i} className="award-row">
                <div className="row gx-0 align-items-center">
                  <div className="col-lg-2">
                    <div className="year">{item.year}</div>
                  </div>

                  <div className="col-lg-6 my-3 my-lg-0">
                    <h6 className="title fsz-23 fw-400">{item.title}</h6>
                  </div>

                  <div className="col-lg-2">
                    <p>
                      <i className="la la-map-marker me-3"></i> {item.location}
                    </p>
                  </div>

                  <div className="col-lg-2 text-lg-end mt-4 mt-lg-0">
                    <i className="ti-arrow-top-right fsz-20"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* لا يوجد زر "مزيد" مثل النسخة الإنجليزية */}
        </div>
      </div>
    </section>
  );
}

export default MilestonesAr;
