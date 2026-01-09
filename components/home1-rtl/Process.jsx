import React from "react";

function Process() {
  return (
    <section className="tc-process-style1">
      <div className="container">
        <div className="title mb-100 text-center">
          <h2 className="fsz-45"> كيف ننفّذ مشروعك </h2>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="info">
                <div className="accordion wow fadeInUp slow" id="accordionProcess">
                  {/* 1 */}
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 / </span>
                        <h3> زيارة الموقع وعرض سعر مجاني </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          نبدأ بزيارة ميدانية لمعاينة الموقع وفهم احتياجك وقياس المساحات وتقييم الوضع الحالي.
                          ثم نزوّدك بنطاق عمل واضح وجدول زمني وعرض سعر شفاف — بدون مفاجآت.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 / </span>
                        <h3> التخطيط والهندسة والتنفيذ </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          يتولى فريقنا تنسيق التصميم والمواد وجميع التخصصات تحت إدارة واحدة (أعمال الكهرباء والميكانيكا
                          والسباكة، التكييف، التشطيبات). ننفّذ وفق معايير السلامة وضبط الجودة مع تقارير متابعة دورية حتى الإنجاز.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        <span className="num"> 3 / </span>
                        <h3> الاختبار والتسليم والدعم </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          قبل التسليم، نجري الفحوصات والاختبارات التشغيلية (الكهرباء، أنظمة الحريق، التكييف وغيرها).
                          ثم نسلّم موقعًا نظيفًا وجاهزًا للاستخدام مع الوثائق النهائية ودعم ما بعد التسليم عند الحاجة.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="butn border rounded-pill mt-80 color-orange1 border-orange1 hover-bg-orange1"
                >
                  <span>
                    عرض مشاريعنا
                    <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-3 process-media-col">
              <div className="img wow">
                <img
                  src="/home1/assets/img/ar_imgs/process.png"
                  alt=""
                  className="img-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <img src="/home1/assets/img/c_line2.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Process;
