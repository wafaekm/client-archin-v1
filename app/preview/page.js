import Script from "next/script";
import generateStylesheetObject from "@/common/generateStylesheetsObject";
import BASE_PATH from "@/common/basePath";

import Loader from "@/components/common/Loader";
import Navbar from "@/components/home_preview/Navbar";
import Header from "@/components/home_preview/Header";
import Demos from "@/components/home_preview/Demos";
import DarkSection from "@/components/home_preview/DarkSection";
// import SaveMoney from "@/components/home_preview/SaveMoney";
import Layouts from "@/components/home_preview/Layouts";
import WooCommerce from "@/components/home_preview/WooCommerce";
import Mobile from "@/components/home_preview/Mobile";
import Features from "@/components/home_preview/Features";
import DarkSection2 from "@/components/home_preview/DarkSection2";

export const metadata = {
  title: "archin",
  icons: {
    icon: `${BASE_PATH}/home_preview/assets/img/fav.png`,
    shortcut: `${BASE_PATH}/home_preview/assets/img/fav.png`,
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
      `${BASE_PATH}/home_preview/assets/css/home_preview_style.css`,
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
    ]),
  },
};

export default function Home() {
  return (
    <div className="home-preview">
      <Loader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Header />

          <main>
            <Demos />
            <DarkSection />
            {/*
              <SaveMoney />
            */}
            <Layouts />
            <WooCommerce />
            <Mobile />
            <Features />
            <DarkSection2 />
          </main>
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
        src={`${BASE_PATH}/common/assets/js/isotope.pkgd.min.js`}
      />

      <Script
        src={`${BASE_PATH}/common/assets/js/smoother-script.js`}
        strategy="lazyOnload"
      />
      <Script src={`${BASE_PATH}/common/assets/js/scripts.js`} />
    </div>
  );
}
