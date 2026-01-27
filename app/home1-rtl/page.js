import Script from "next/script";
import generateStylesheetObject from "@/common/generateStylesheetsObject";
import BASE_PATH from "@/common/basePath";

import BodyClass from "@/components/common/BodyClass";
import Loader from "@/components/common/Loader";

import Navbar from "@/components/home1-rtl/Navbar";
import Header from "@/components/home1-rtl/Header";
import Experience from "@/components/home1-rtl/Experience";
import Services from "@/components/home1-rtl/Services";
import Process from "@/components/home1-rtl/Process";
import Projects from "@/components/home1-rtl/Projects";
import Testimonials from "@/components/home1-rtl/Testimonials";
import Team from "@/components/home1-rtl/Team";
import MilestonesAr from "@/components/home1-rtl/Milestones";
import Footer from "@/components/home1-rtl/Footer";
import Chat from "@/components/home1-rtl/Chat";

export const metadata = {
  title: "روح المقاولة",
  description: "روح المقاولة — شركة [النشاط] في [المدينة]. خدمات [X]، [Y]، [Z]. تواصل معنا للحصول على عرض سعر.",
  icons: {
    icon: `${BASE_PATH}/home_preview/assets/img/favicon.png`,
    shortcut: `${BASE_PATH}/home_preview/assets/img/favicon.png`,
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
      `${BASE_PATH}/home1/assets/css/home_1_style.css`,
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
    ]),
  },
  alternates: {
    canonical: "https://rohalmokawlah.com/home1-rtl/",
  },
  
};

export default function HomeRtl() {
  return (
    <>
      {/* Applique le style global */}
      <BodyClass className="home-style1" />

      <Loader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
        <div id="top" />
          <Navbar />
          <Header />

          <main dir="rtl">
            <Experience />
            <Services />
            <Process />
            <Projects lang="ar" />
            <Testimonials lang="ar" />
            <MilestonesAr />
            <Team />
            <Chat />
          </main>

          <Footer />
        </div>
      </div>

      {/* IMPORTANT: Scripts avec BASE_PATH */}
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
        src={`${BASE_PATH}/common/assets/js/isotope.pkgd.min.js`}
      />
      <Script src={`${BASE_PATH}/common/assets/js/scripts.js`} />
    </>
  );
}
