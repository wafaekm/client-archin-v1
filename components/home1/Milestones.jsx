import React from "react";

const milestones = [
  { year: "40+ Years", title: "Industry Experience & Proven Delivery", location: "Saudi Arabia" },
  { year: "100+ Staff", title: "Manpower Capacity for Fast-Track Projects", location: "Operations" },
  { year: "Turnkey", title: "Design & Build / Fit-out / MEP Integration", location: "End-to-end" },
  { year: "HSE Focus", title: "Safety-First Execution & Site Compliance", location: "On-site" },
];

function Milestones() {
  return (
    <section className="tc-awards-style1">
      <div className="container">
        <div className="awards-content">
          <div className="mb-80 text-center js-splittext-lines">
            <h2 className="fsz-45"> Key Milestones & Capabilities </h2>
          </div>

          <div className="awards-list wow fadeInUp" data-wow-delay="0.2s">
            {milestones.map((item, i) => (
              <div key={i} className="award-row">
                <div className="row gx-0 align-items-center">
                  <div className="col-lg-2">
                    <div className="year"> {item.year} </div>
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

          {/* Optionnel: tu peux enlever ce bouton si tu n’as rien “more” */}
          {/* <div className="text-center mt-100 mb-40">
            <a href="#" className="butn border rounded-pill hover-bg-orange1">
              <span>
                Learn More <i className="small ms-1 la la-angle-down"></i>
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Milestones;
