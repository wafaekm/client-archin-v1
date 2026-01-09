import React from "react";

function Team() {
  return (
    <section className="tc-team-style1" dir="rtl">
      <div className="container">
        <div className="mb-80 js-splittext-lines">
          <h2 className="fsz-45">تعرّف على مديري الفريق</h2>
        </div>

        {/* MEMBERS (2 only) */}
        <div className="members">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <a href="tel:+966564788222" className="team-card wow zoomIn">
                <div className="img">
                  <img
                    src="/home1/assets/img/team/team1.png"
                    alt="م. عمرو بكري"
                    className="img-cover"
                  />
                </div>

                <h5 className="title">
                  م. <br /> عمر البكري
                  </h5>

                <div className="mt-2 fsz-14 color-666">966 56 478 8222+</div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <a
                href="tel:+96654131977+"
                className="team-card wow zoomIn"
                data-wow-delay="0.1s"
              >
                <div className="img">
                  <img
                    src="/home1/assets/img/team/team2.png"
                    alt="م. ويام أورّاد"
                    className="img-cover"
                  />
                </div>

                <h5 className="title">
                  م. <br /> وئام أورّاد
                </h5>

                <div className="mt-2 fsz-14 color-666">966 54 131 9776+</div>
              </a>
            </div>
          </div>
        </div>

        {/* NUMBERS */}
        <div className="numbers">
          <div className="row gx-5">
            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="perc">40+</h3>
                <p>
                  سنوات <br /> من الخبرة
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.4s">
                <h3 className="perc">15+</h3>
                <p>
                  مشاريع <br /> تم تسليمها
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.6s">
                <h3 className="perc">100+</h3>
                <p>
                  قوة عاملة <br /> (عمال)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
