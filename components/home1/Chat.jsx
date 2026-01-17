import React from "react";

function Chat() {
  return (
    <section className="tc-chat-style1">
      <div className="container">
        <div className="content">
          <a
            href="mailto:info@rohalmokawlah.com"
            className="xl-text"
            style={{ fontSize: 34, lineHeight: 1.2 }}  // réduit la taille
          >
            info@rohalmokawlah.com
          </a>

          <h5 className="mb-50 lh-5">
            Let’s discuss your next project <br /> and deliver it turnkey.
          </h5>

          <div className="text">
            Or call: <a href="tel:+966541319776">+966 54 131 9776</a>
          </div>
        </div>
      </div>

      <img src="home1/assets/img/c_line4.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Chat;
