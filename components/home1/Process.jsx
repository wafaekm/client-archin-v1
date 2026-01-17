import React from "react";

function Process() {
  return (
    <section className="tc-process-style1">
      <div className="container">
        <div className="title mb-100 text-center">
          <h2 className="fsz-45"> How We Deliver Your Project </h2>
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
                        <h3> Site Visit & Free Quote </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          We start with an on-site inspection to understand your needs, measure the space, and assess
                          existing conditions. You receive a clear scope of work, timeline, and a transparent quotation
                          — with no surprises.
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
                        <h3> Planning, Engineering & Execution </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Our team coordinates design, materials, and all trades (MEP, HVAC, finishing works) under one
                          management. We execute with safety standards, quality control, and frequent progress updates
                          until completion.
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
                        <span className="num"> 3 / </span> <h3> Testing, Handover & Support </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Before handover, we complete inspections and functional testing (electrical, fire systems,
                          HVAC, etc.). Then we deliver a clean, ready-to-use site with final documentation and after-handover
                          support when needed.
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
                    View Our Projects
                    <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="img wow">
                <img src="home1/assets/img/process.png" alt="" className="img-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src="home1/assets/img/c_line2.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Process;
