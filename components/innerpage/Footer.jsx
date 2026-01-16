import React from "react";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tc-footer-style1 border-top">
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            {/* LEFT: About + Social */}
            <div className="col-lg-4">
              <div className="info-side">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                  Roh Almokawlah provides full contracting services in construction,
                  architecture, electro-mechanical works, electrical systems, and finishing.
                  We also deliver infrastructure and excavation works with approved suppliers
                  and subcontractors.
                </div>

                <div className="foot-social mt-50">
                  {/* Remplace les # par les vrais liens */}
                
                  <a href="https://www.linkedin.com/company/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%AF%D9%8A%D9%85%D8%A7-%D8%B3%D8%AA%D8%A7%D8%B1-%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9/posts/?feedView=all" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* MIDDLE: Contact */}
            <div className="col-lg-3 offset-lg-2">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Al-Khobar, KSA </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      P.O.Box 3022, Al-Khobar 31952, Kingdom of Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@rohalmokawlah.com">info@rohalmokawlah.com</a>
                  </li>
                  <li>
                    <a href="tel:+966541319776">+966 54 131 9776</a>
                  </li>
                </ul>
              </div>

              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Services </h5>
                <ul className="footer-links">
                  <li><a href="#">Civil Construction</a></li>
                  <li><a href="#">Electro-Mechanical Works (MEP)</a></li>
                  <li><a href="#">Plans & Interior Design</a></li>
                  <li><a href="#">Infrastructure Works</a></li>
                </ul>
              </div>
            </div>

            {/* RIGHT: Quick Links */}
            <div className="col-lg-3">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Quick Links </h5>
                <ul className="footer-links">
                  <li><Link href="/en">Home</Link></li>
                  <li><Link href="/en/projects">Projects</Link></li>
                  <li><Link href="/en/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Policies </h5>
                <ul className="footer-links">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="foot">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13">© {year} Roh Almokawlah. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links mt-4 mt-lg-0">
                <Link href="/en">Home</Link>
                <Link href="/en/projects">Projects</Link>
                <Link href="/en/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
