import React from "react";

function Footer() {
  // Center: Al Khobar (close to Dammam)
  const lat = 26.2171906;
  const lon = 50.1971381;

  // Zoom via BBox (smaller = more zoomed)
  const delta = 0.02;
  const left = lon - delta;
  const right = lon + delta;
  const bottom = lat - delta;
  const top = lat + delta;

  // OSM embed with default marker
  const osmEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    // On garde la grille Bootstrap en LTR, et on met le contenu en RTL via classes CSS.
<footer id="footer" className="tc-footer-style1 border-top rtl-footer-fix" dir="ltr">
<div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0 justify-content-between">
            {/* LEFT */}
            <div className="col-lg-5">
              <div className="info-side ar-block">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                  نقدم حلول مقاولات بنظام تسليم مفتاح مع التركيز على الجودة والسلامة
                  والالتزام بمواعيد التسليم في جميع أنحاء المملكة العربية السعودية.
                </div>

                <div className="foot-social mt-50">
                  <a
                    href="https://www.linkedin.com/company/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%AF%D9%8A%D9%85%D8%A7-%D8%B3%D8%AA%D8%A7%D8%B1-%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>

                {/* Map under LinkedIn */}
                <div className="mt-20">
                  <div className="footer-map">
                    <iframe
                      src={osmEmbedSrc}
                      title="خريطة المقر الرئيسي"
                      width="100%"
                      height="260"
                      style={{ border: 0, display: "block" }}
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-15">
                    <small className="d-block fsz-12 color-666 mb-2">
                      العنوان الرئيسي
                    </small>
                    <div className="fsz-16 fw-600 mb-1">المقر الرئيسي</div>
                    <div className="fsz-16 color-666">الخبر / الدمام، السعودية</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-4">
              <div className="branch-card ar-block">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600">التواصل</h5>
                <ul className="footer-links">
                  <li>
                    <a href="mailto:info@rohalmokawlah.com">
                      <span className="ltr-inline">info@rohalmokawlah.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+966541319776">
                      <span className="ltr-inline">+966 54 131 9776</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="branch-card ar-block">
                <h5 className="mb-20 mt-5 fw-600">الخدمات</h5>
                <ul className="footer-links">
                  <li><a href="#">تصميم وتنفيذ / تسليم مفتاح</a></li>
                  <li><a href="#">MEP / HVAC / أنظمة مكافحة الحريق</a></li>
                  <li><a href="#">التجهيز الداخلي والتشطيبات</a></li>
                </ul>

                <div className="mt-30">
                  <img
                    src="home_preview/assets/img/exp-logo.png"
                    alt="شعار الشركة"
                    style={{ maxWidth: 160, height: "auto", display: "block" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="foot">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13 mb-0 ar-block">
                © {new Date().getFullYear()} — جميع الحقوق محفوظة
              </p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links mt-4 mt-lg-0 ar-block">
                <a href="home1-rtl">الرئيسية</a>
                <a href="home1-rtl/">المشاريع</a>
                <a href="home1-rtl/">تواصل</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
