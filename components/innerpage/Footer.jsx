"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CONTENT = {
  en: {
    about:
      "Roh Almokawlah provides full contracting services in construction, architecture, electro-mechanical works, electrical systems, and finishing. We also deliver infrastructure and excavation works with approved suppliers and subcontractors.",
    locationTitle: "Al-Khobar, KSA",
    address: "P.O.Box 3022, Al-Khobar 31952, Kingdom of Saudi Arabia",
    servicesTitle: "Services",
    services: [
      "Civil Construction",
      "Electro-Mechanical Works (MEP)",
      "Plans & Interior Design",
      "Infrastructure Works",
    ],
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { label: "Home", type: "home" },
      { label: "Projects", type: "scroll", id: "related-projects" },
      { label: "Contact", type: "scroll", id: "chat" },
    ],
    policiesTitle: "Policies",
    policies: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    rights: (year) => `© ${year} Roh Almokawlah. All Rights Reserved.`,
  },

  ar: {
    aboutLines: [
      "تقدم روح المقاولة خدمات مقاولات متكاملة تشمل الإنشاءات، والهندسة المعمارية، والأعمال الكهروميكانيكية، والأنظمة الكهربائية، وأعمال التشطيبات. كما ننفذ أعمال البنية التحتية والحفريات بالتعاون مع",
      "موردين ومقاولين معتمدين.",
    ],
    locationTitle: "الخبر، المملكة العربية السعودية",
    address: "ص.ب 3022، الخبر 31952، المملكة العربية السعودية",
    servicesTitle: "الخدمات",
    services: [
      "الإنشاءات المدنية",
      "الأعمال الكهروميكانيكية (MEP)",
      "المخططات والتصميم الداخلي",
      "أعمال البنية التحتية",
    ],
    quickLinksTitle: "روابط سريعة",
    quickLinks: [
      { label: "الرئيسية", type: "home" },
      { label: "المشاريع", type: "scroll", id: "related-projects" },
      { label: "تواصل معنا", type: "scroll", id: "chat" },
    ],
    policiesTitle: "السياسات",
    policies: [
      { label: "الشروط والأحكام", href: "#" },
      { label: "سياسة الخصوصية", href: "#" },
    ],
    rights: (year) => `© ${year} روح المقاولة. جميع الحقوق محفوظة.`,
  },
};

function Footer({ lang = "en" }) {
  const year = new Date().getFullYear();
  const isAr = lang === "ar";
  const t = isAr ? CONTENT.ar : CONTENT.en;

  const pathname = usePathname() || "/";
  const isArPath = pathname.startsWith("/home1-rtl") || pathname.startsWith("/ar");
  const homePath = isArPath ? "/home1-rtl/" : "/";

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = 90; // ajuste si nécessaire
    const y = el.getBoundingClientRect().top + window.scrollY - yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onScrollClick = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  const renderQuickLink = (item, key) => {
    if (item.type === "home") {
      return (
        <Link key={key} href={homePath}>
          {item.label}
        </Link>
      );
    }

    // SCROLL: ne change JAMAIS de page
    return (
      <a key={key} href={`#${item.id}`} onClick={onScrollClick(item.id)}>
        {item.label}
      </a>
    );
  };

  return (
    <footer className="tc-footer-style1 border-top" dir={isAr ? "rtl" : "ltr"}>
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            {/* LEFT */}
            <div className="col-lg-4">
              <div className="info-side">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                  {isAr ? (
                    <>
                      {t.aboutLines?.[0]}
                      <br />
                      {t.aboutLines?.[1]}
                    </>
                  ) : (
                    t.about
                  )}
                </div>

                <div className="foot-social mt-50">
                  <a
                    className="social-linkedin"
                    href="https://www.linkedin.com/company/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%AF%D9%8A%D9%85%D8%A7-%D8%B3%D8%AA%D8%A7%D8%B1-%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9/posts/?feedView=all"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* MIDDLE */}
            <div className="col-lg-3 offset-lg-2">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600">{t.locationTitle}</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {t.address}
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
                <h5 className="mb-20 mt-5 fw-600">{t.servicesTitle}</h5>
                <ul className="footer-links">
                  {t.services.map((s, idx) => (
                    <li key={idx}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-3">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600">{t.quickLinksTitle}</h5>
                <ul className="footer-links">
                  {t.quickLinks.map((l, idx) => (
                    <li key={idx}>{renderQuickLink(l, idx)}</li>
                  ))}
                </ul>
              </div>

              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600">{t.policiesTitle}</h5>
                <ul className="footer-links">
                  {t.policies.map((p, idx) => (
                    <li key={idx}>
                      <a href={p.href}>{p.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="foot">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13">{t.rights(year)}</p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links mt-4 mt-lg-0">
                {t.quickLinks.map((l, idx) => renderQuickLink(l, `b-${idx}`))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
