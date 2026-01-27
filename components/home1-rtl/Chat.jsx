"use client";
import React from "react";

const CONTACTS = [
  { display: "+966 56 478 8222", tel: "+966564788222", wa: "966564788222" },
  { display: "+966 54 131 9776", tel: "+966541319776", wa: "966541319776" },
];

export default function Chat() {
  return (
    <section id="chat" className="tc-chat-style1" dir="rtl">
      <div className="container">
        <div className="content">
          <a href="mailto:info@rohalmokawlah.com" className="xl-text js-splittext-lines">
            info@rohalmokawlah.com
          </a>

          {/* Affichage des 2 numéros */}
          <div className="mt-2 d-flex flex-column gap-1">
            {CONTACTS.map((c) => (
              <a key={c.tel} href={`tel:${c.tel}`} className="xl-text js-splittext-lines">
                {c.display}
              </a>
            ))}
          </div>

          <h5 className="mb-30 lh-5" style={{ whiteSpace: "pre-line" }}>
            جاهز لمناقشة مشروعك؟
            {"\n"}نرد خلال 24 ساعة.
          </h5>

          <div className="d-flex flex-wrap align-items-center gap-3">
            {CONTACTS.map((c) => (
              <React.Fragment key={c.tel}>
                <a
                  href={`tel:${c.tel}`}
                  className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
                >
                  <span>
                    اتصل بنا {c.display} <i className="fal fa-phone ms-2"></i>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${c.wa}`}
                  target="_blank"
                  rel="noreferrer"
                  className="butn border rounded-pill"
                  style={{ borderColor: "#ccc", color: "#000" }}
                >
                  <span>
                    واتساب {c.display} <i className="fab fa-whatsapp ms-2"></i>
                  </span>
                </a>
              </React.Fragment>
            ))}

            <a
              href="https://www.linkedin.com/company/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%AF%D9%8A%D9%85%D8%A7-%D8%B3%D8%AA%D8%A7%D8%B1-%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9/"
              target="_blank"
              rel="noreferrer"
              className="butn border rounded-pill"
              style={{ borderColor: "#ccc", color: "#000" }}
              aria-label="LinkedIn"
            >
              <span>
                LinkedIn <i className="fab fa-linkedin-in ms-2"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      <img
        src="home1/assets/img/c_line4.png"
        alt=""
        className="c-line wow"
        style={{ left: 0, right: "auto" }}
      />
    </section>
  );
}
