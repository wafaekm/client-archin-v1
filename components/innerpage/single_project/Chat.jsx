"use client";
import React from "react";

function Chat({ lang = "en" }) {
  const isAr = lang === "ar";

  const t = {
    email: "info@rohalmokawlah.com",
    title: isAr
      ? "جاهز لمناقشة مشروعك؟\nنرد خلال 24 ساعة."
      : "Ready to discuss your project?\nWe reply within 24 hours.",
    call: isAr ? "اتصل بنا" : "Call Us",
    whatsapp: "WhatsApp",
  };

  return (
    <section className="tc-chat-style1" dir={isAr ? "rtl" : "ltr"}>
      <div className="container">
        <div className="content">
          <a href={`mailto:${t.email}`} className="xl-text js-splittext-lines">
            {t.email}
          </a>

          <h5 className="mb-30 lh-5" style={{ whiteSpace: "pre-line" }}>
            {t.title}
          </h5>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <a
              href="tel:+966541319776"
              className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
            >
              <span>
                {t.call} <i className="fal fa-phone ms-2"></i>
              </span>
            </a>

            <a
              href="https://wa.me/966541319776"
              target="_blank"
              rel="noreferrer"
              className="butn border rounded-pill"
              style={{ borderColor: "#ccc", color: "#000" }}
            >
              <span>
                {t.whatsapp} <i className="fab fa-whatsapp ms-2"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      <img
  src="/innerpages/assets/img/c_line4.png"
  alt=""
  className="c-line wow"
  style={isAr ? { left: 0, right: "auto" } : { right: 0, left: "auto" }}
/>
    </section>
  );
}

export default Chat;
