import React from "react";

function Footer() {
  const lat = 26.2171906;
  const lon = 50.1971381;

  const delta = 0.02;
  const left = lon - delta;
  const right = lon + delta;
  const bottom = lat - delta;
  const top = lat + delta;

  const osmEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <footer
      id="footer"
      className="tc-footer-style1 border-top en-footer-fix"
      dir="ltr"
    >
      <div className="container-fluid px-0">
        {/* TOP */}
        <div className="top-content section-padding">
          <div className="footer-bleed">
            <div className="row g-0">
              {/* LEFT */}
              <div className="col-12 col-lg-7 footer-left">
                <div className="info-side">
                  <div className="text fsz-24 color-333 lh-3 fw-600">
                    We deliver turnkey contracting solutions with a focus on
                    quality, safety, and on-time delivery across Saudi Arabia.
                  </div>

                  <div className="foot-social mt-50">
                    <a
                      className="social-linkedin"
                      href="https://www.linkedin.com/company/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%AF%D9%8A%D9%85%D8%A7-%D8%B3%D8%AA%D8%A7%D8%B1-%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>

                  <div className="mt-20">
                    <div className="footer-map">
                      <iframe
                        src={osmEmbedSrc}
                        title="Head Office Map"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-15">
                      <small className="d-block text-uppercase fsz-12 color-666 mb-2">
                        Main Address
                      </small>
                      <div className="fsz-16 fw-600 mb-1">Head Office</div>
                      <div className="fsz-16 color-666">
                        Al Khobar / Dammam, SA
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-12 col-lg-5 footer-right">
                <div className="branch-card">
                  <h5 className="mb-20 mt-5 mt-lg-0 fw-600">Contact</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="mailto:info@rohalmokawlah.com">info@rohalmokawlah.com</a>
                    </li>

                    <li>
                      <a href="tel:+966564788222">+966 56 478 8222</a>
                    </li>

                    <li>
                      <a href="tel:+966541319776">+966 54 131 9776</a>
                    </li>
                  </ul>

                </div>

                <div className="branch-card">
                  <h5 className="mb-20 mt-5 fw-600">Services</h5>
                  <ul className="footer-links">
                    <li><a href="en/services">Design &amp; Build / Turnkey</a></li>
                    <li><a href="en/services">MEP / HVAC / Fire Systems</a></li>
                    <li><a href="en/services">Interior Fit-out &amp; Finishes</a></li>
                  </ul>

                  <div className="footer-logo-wrap mt-30">
                    <img
                      src="home_preview/assets/img/logo_dark.png"
                      alt="Company Logo"
                      className="footer-logo"
                    />
                  </div>
                </div>
              </div>
              {/* /RIGHT */}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="foot">
          <div className="px-4 px-lg-5">
            <div className="row">
              <div className="col-lg-6">
                <p className="fsz-13 mb-0">
                  © {new Date().getFullYear()} — All Rights Reserved
                </p>
              </div>

              <div className="col-lg-6">
                <div className="foot-links mt-4 mt-lg-0 justify-content-lg-end">
                  <a href="#top">Home</a>
                  <a href="#projects">Projects</a>
                  <a href="#chat">Contact</a>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* /BOTTOM */}
      </div>
    </footer>
  );
}

export default Footer;
