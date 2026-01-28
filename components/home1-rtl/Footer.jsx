"use client";

import React from "react";
import { usePathname } from "next/navigation";
import BASE_PATH from "@/common/basePath";

function Footer() {
  const pathname = usePathname() || "/home1-rtl";

  const lat = 26.2171906;
  const lon = 50.1971381;

  const delta = 0.02;
  const left = lon - delta;
  const right = lon + delta;
  const bottom = lat - delta;
  const top = lat + delta;

  const osmEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lon}`;

  // Ajuste selon la hauteur réelle de ta navbar en mobile
  const NAV_OFFSET = 110;

  const scrollToId = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onScroll = (id) => (e) => {
    e.preventDefault();

    // garde l’URL sur la BONNE page (ex: /home1-rtl#projects), sans naviguer
    const nextHash = `#${id}`;
    const base = pathname.split("#")[0]; // sécurité
    window.history.replaceState(null, "", `${base}${nextHash}`);

    scrollToId(id);
  };

  // IMPORTANT : href = pathname + hash (empêche le "/#projects")
  const hrefFor = (id) => `${pathname.split("#")[0]}#${id}`;

  return (
    <footer
      id="footer"
      className="tc-footer-style1 border-top rtl-footer-fix"
      dir="ltr"
    >
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0 justify-content-between">
            {/* LEFT */}
            <div className="col-lg-5">
              <div className="info-side ar-block">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                  نقدم حلول مقاولات بنظام تسليم مفتاح مع التركيز على الجودة
                  والسلامة والالتزام بمواعيد التسليم في جميع أنحاء المملكة
                  العربية السعودية.
                </div>

                <div className="foot-social mt-50">
                  <a
                    className="social-linkedin"
                    href="https://www.linkedin.com/company/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%AF%D9%8A%D9%85%D8%A7-%D8%B3%D8%AA%D8%A7%D8%B1-%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>

                <div className="mt-20">
                  <div className="footer-map">
                    <iframe
                      src={osmEmbedSrc}
                      title="خريطة المقر الرئيسي"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-15">
                    <small className="d-block fsz-12 color-666 mb-2">
                      العنوان الرئيسي
                    </small>
                    <div className="fsz-16 fw-600 mb-1">المقر الرئيسي</div>
                    <div className="fsz-16 color-666">
                      الخبر / الدمام، السعودية
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-4">
              {/* CONTACT */}
              <div className="branch-card ar-block">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600">التواصل</h5>
                <ul className="footer-links">
                  <li>
                    <a
                      href="mailto:info@rohalmokawlah.com"
                      className="d-inline-flex align-items-center gap-2"
                    >
                      <i className="fas fa-envelope" aria-hidden="true" />
                      <span className="ltr-inline">
                        info@rohalmokawlah.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="tel:+966564788222"
                      className="d-inline-flex align-items-center gap-2"
                    >
                      <i className="fas fa-phone-alt" aria-hidden="true" />
                      <span className="ltr-inline">+966 56 478 8222</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="tel:+966541319776"
                      className="d-inline-flex align-items-center gap-2"
                    >
                      <i className="fas fa-phone-alt" aria-hidden="true" />
                      <span className="ltr-inline">+966 54 131 9776</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* SERVICES */}
              <div className="branch-card ar-block">
                <h5 className="mb-20 mt-5 fw-600">الخدمات</h5>
                <ul className="footer-links">
                  <li>
                    <a href="ar/services">التصميم والتنفيذ / تسليم مفتاح</a>
                  </li>
                  <li>
                    <a href="ar/services">
                      الأعمال الكهروميكانيكية / التكييف / أنظمة مكافحة الحريق
                    </a>
                  </li>
                  <li>
                    <a href="ar/services">التشطيبات الداخلية / الإنهاءات</a>
                  </li>
                </ul>

                <div className="mt-30">
                  <img
                    src={`${BASE_PATH}/home_preview/assets/img/logo_dark.png`}
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
              <div className="foot-links mt-4 mt-lg-0 justify-content-lg-end ar-block">
                <a href={hrefFor("top")} onClick={onScroll("top")}>
                  الرئيسية
                </a>
                <a href={hrefFor("projects")} onClick={onScroll("projects")}>
                  المشاريع
                </a>
                <a href={hrefFor("chat")} onClick={onScroll("chat")}>
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /Bottom bar */}
      </div>
    </footer>
  );
}

export default Footer;
