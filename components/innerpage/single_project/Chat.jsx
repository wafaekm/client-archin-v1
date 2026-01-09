"use client";
import React from "react";

function Chat() {
  return (
    <section className="tc-chat-style1">
      <div className="container">
        <div className="content">
          {/* Email */}
          <a href="mailto:info@rohalmokawlah.com" className="xl-text js-splittext-lines">
           info@rohalmokawlah.com
          </a>

          {/* Message */}
          <h5 className="mb-30 lh-5">
            Ready to discuss your project? <br /> We reply within 24 hours.
          </h5>

          {/* Contacts (simple, propre) */}
          <div className="d-flex flex-wrap align-items-center gap-3">
            <a
              href="tel:+966541319776"
              className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
            >
              <span>
                Call Us <i className="fal fa-phone ms-2"></i>
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

      <img src="/innerpages/assets/img/c_line4.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Chat;
