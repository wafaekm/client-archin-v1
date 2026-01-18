"use client";
import React from "react";

export default function Chat() {
  return (
    <section id="chat" className="tc-chat-style1" dir="rtl">
      <div className="container">
        <div className="content">
          <a href="mailto:info@rohalmokawlah.com" className="xl-text js-splittext-lines">
            info@rohalmokawlah.com
          </a>

          <h5 className="mb-30 lh-5" style={{ whiteSpace: "pre-line" }}>
            جاهز لمناقشة مشروعك؟
            {"\n"}نرد خلال 24 ساعة.
          </h5>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <a
              href="tel:+966541319776"
              className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
            >
              <span>
                اتصل بنا <i className="fal fa-phone ms-2"></i>
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
                WhatsApp <i className="fab fa-whatsapp ms-2"></i>
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
