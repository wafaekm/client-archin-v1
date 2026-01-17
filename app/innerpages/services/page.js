import Script from "next/script";
import generateStylesheetObject from "@/common/generateStylesheetsObject";
import BASE_PATH from "@/common/basePath";

import BodyClass from "@/components/common/BodyClass";
import Loader from "@/components/common/Loader";
import Footer from "@/components/innerpage/Footer";
import Menu from "@/components/innerpage/Menu";
import Navbar2 from "@/components/innerpage/Navbar2";

import Header from "@/components/innerpage/services/Header";
import Services from "@/components/innerpage/services/Services";
import Process from "@/components/innerpage/services/Process";
import Testimonials from "@/components/innerpage/services/Testimonials";

export const metadata = {
  title: "archin",
  icons: {
    icon: `${BASE_PATH}/home_preview/assets/img/logo.png`,
    shortcut: `${BASE_PATH}/home_preview/assets/img/logo.png`,
    other: generateStylesheetObject([
      `${BASE_PATH}/common/assets/css/lib/bootstrap.min.css`,
      `${BASE_PATH}/common/assets/css/lib/all.min.css`,
      `${BASE_PATH}/common/assets/css/lib/line-awesome.css`,
      `${BASE_PATH}/common/assets/css/lib/themify-icons.css`,
      `${BASE_PATH}/common/assets/css/lib/animate.css`,
      `${BASE_PATH}/common/assets/css/lib/jquery.fancybox.css`,
      `${BASE_PATH}/common/assets/css/lib/lity.css`,
      `${BASE_PATH}/common/assets/css/lib/swiper8.min.css`,
      `${BASE_PATH}/common/assets/css/common_style.css`,
      `${BASE_PATH}/innerpages/assets/css/innerpages.css`,
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
    ]),
  },
};

export default function ServicesPage() {
  return (
    <>
      <BodyClass className="inner-pages-style1 services-pg-style1" />

      <Loader />
      <Menu />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar2 />
          <Header />

          <main>
            <Services />
            <Process />
            <Testimonials />
          </main>

          <Footer />
        </div>
      </div>

      <Script
        src={`${BASE_PATH}/common/assets/js/ScrollTrigger.min.js`}
        strategy="beforeInteractive"
      />
      <Script
        src={`${BASE_PATH}/common/assets/js/ScrollSmoother.min.js`}
        strategy="beforeInteractive"
      />

      <Script
        strategy="beforeInteractive"
        src={`${BASE_PATH}/common/assets/js/plugins.js`}
      />
      <Script
        strategy="beforeInteractive"
        src={`${BASE_PATH}/common/assets/js/TweenMax.min.js`}
      />
      <Script
        strategy="beforeInteractive"
        src={`${BASE_PATH}/common/assets/js/charming.min.js`}
      />
      <Script
        strategy="beforeInteractive"
        src={`${BASE_PATH}/common/assets/js/countdown.js`}
      />
      <Script
        strategy="beforeInteractive"
        src={`${BASE_PATH}/common/assets/js/gsap.min.js`}
      />
      <Script
        strategy="beforeInteractive"
        src={`${BASE_PATH}/common/assets/js/splitting.min.js`}
      />
      <Script
        strategy="beforeInteractive"
        src={`${BASE_PATH}/common/assets/js/mixitup.min.js`}
      />

      <Script
        src={`${BASE_PATH}/common/assets/js/smoother-script.js`}
        strategy="lazyOnload"
      />
      <Script src={`${BASE_PATH}/common/assets/js/scripts.js`} />
    </>
  );
}
