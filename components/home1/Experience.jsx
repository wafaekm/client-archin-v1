import React from "react";

function Experience() {
  return (
    <section className="tc-experience-style1 section-padding-x">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          {/* LEFT: years */}
          <div className="col-lg-2">
            <div className="exp-num mb-100 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="fsz-18 text-uppercase">
                years of <br /> experience
              </h5>

              {/* reduced size here */}
              <h2 className="num fsz-70">+ 45</h2>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-lg-3">
            <div className="img wow">
              <img
                src="home1/assets/img/exp.png"
                alt="Rouh Al Almokawala"
                className="img-cover"
              />
            </div>
          </div>

          {/* INFO */}
          <div className="col-lg-3">
            <div className="info wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="fsz-45 fw-600 mb-30"> Trusted Field Execution </h3>

              <div className="text fsz-15 color-666">
                We deliver turnkey fit-out and intervention services for
                commercial and residential sites — from demolition and MEP works
                to finishing, installation, and handover, with clear reporting
                and on-time delivery.
              </div>

           
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-lg-2">
            <div className="rotate-txt justify-content-lg-end">
              <ul>
                <li>
                  <a href="mailto:info@rohalmokawlah.com">info@rohalmokawlah.com</a>
                </li>
                <li>
                  <a href="tel:+966541319776">+966 54 131 9776</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <img src="home1/assets/img/c_line.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Experience;
