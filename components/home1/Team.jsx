import React from "react";

const PROJECTS_COMPLETED = 0; // <-- Mets ici le nombre exact depuis le Company Profile

function Team() {
  return (
    <section className="tc-team-style1">
      <div className="container">
        <div className="mb-80 js-splittext-lines">
          <h2 className="fsz-45">Meet our team managers</h2>
        </div>

        {/* MEMBERS (2 only) */}
        <div className="members">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <a href="tel:+966564788222" className="team-card wow zoomIn">
              <div className="img team-avatar">
                <img
                  src="home1/assets/img/team/team1.png"
                  alt="Eng. Amr Bakry"
                  className="img-cover team-avatar__img"
                />
              </div>

                <h5 className="title">
                  Eng. <br /> Amr Bakry
                </h5>

                <div className="mt-2 fsz-14 color-666">
                  +966 56 478 8222
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <a
                href="tel:+966541319776"
                className="team-card wow zoomIn"
                data-wow-delay="0.1s"
              >
                <div className="img team-avatar">
                  <img
                    src="home1/assets/img/team/team2.png"
                    alt="Eng. Ouiame Aourrad"
                    className="img-cover team-avatar__img team-avatar__img--ouiame"
                  />
                </div>

                <h5 className="title">
                  Eng. <br /> Ouiame Aourrad
                </h5>

                <div className="mt-2 fsz-14 color-666">
                  +966 54 131 9776
                </div>
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
                  Years of <br /> Experience
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.4s">
                <h3 className="perc">15+</h3>
                <p>
                  Projects <br /> Delivered
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.6s">
                <h3 className="perc">100+</h3>
                <p>
                  Manpower <br /> (workers)
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
