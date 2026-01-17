import Script from "next/script";
import generateStylesheetObject from "@/common/generateStylesheetsObject";

import BodyClass from "@/components/common/BodyClass";
import Loader from "@/components/common/Loader";
import Menu from "@/components/home1-rtl/Menu";
import Navbar from "@/components/home1-rtl/Navbar";
import Header from "@/components/home1-rtl/Header";
import Experience from "@/components/home1-rtl/Experience";
import Services from "@/components/home1-rtl/Services";
import Process from "@/components/home1-rtl/Process";
import Projects from "@/components/home1-rtl/Projects";
import Testimonials from "@/components/home1-rtl/Testimonials";
import Awards from "@/components/home1-rtl/Awards";
import Team from "@/components/home1-rtl/Team";
import Blog from "@/components/home1-rtl/Blog";
import Chat from "@/components/home1-rtl/Chat";
import MilestonesAr from "@/components/home1-rtl/Milestones";
import Footer from "@/components/home1-rtl/Footer";
export const metadata = {
  title: 'روح المقاولة',
  icons: {
    icon: "home_preview/assets/img/favicon.png",
    shortcut: "home_preview/assets/img/favicon.png",
    other: generateStylesheetObject([
      "common/assets/css/lib/bootstrap.min.css",
      "common/assets/css/lib/all.min.css",
      "common/assets/css/lib/line-awesome.css",
      "common/assets/css/lib/themify-icons.css",
      "common/assets/css/lib/animate.css",
      "common/assets/css/lib/jquery.fancybox.css",
      "common/assets/css/lib/lity.css",
      "common/assets/css/lib/swiper8.min.css",
      "common/assets/css/common_style.css",
      "home1/assets/css/home_1_style.css",
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
    ]),
  },
};

export default function Home() {
  return (
    <>
      <BodyClass className="home-style1" />

      <Loader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
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
            <Footer />
          </main>
        </div>
      </div>

      <Script strategy="beforeInteractive" src="common/assets/js/plugins.js" />
      <Script strategy="beforeInteractive" src="common/assets/js/TweenMax.min.js" />
      <Script strategy="beforeInteractive" src="common/assets/js/charming.min.js" />
      <Script strategy="beforeInteractive" src="common/assets/js/countdown.js" />
      <Script strategy="beforeInteractive" src="common/assets/js/gsap.min.js" />
      <Script strategy="beforeInteractive" src="common/assets/js/splitting.min.js" />
      <Script strategy="beforeInteractive" src="common/assets/js/isotope.pkgd.min.js" />
      <Script src="common/assets/js/scripts.js" />
    </>
  );
}
