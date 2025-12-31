import Script from 'next/script';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Loader from '@/components/common/Loader';
import Navbar from '@/components/home2/Navbar';
import Header from '@/components/home2/Header';
import Services from '@/components/home2/Services';
import Process from '@/components/home2/Process';
import Projects from '@/components/home2/Projects';
import Award from '@/components/home2/Award';
import Testimonials from '@/components/home2/Testimonials';
import Blog from '@/components/home2/Blog';
import Contact from '@/components/home2/Contact';
import Footer from '@/components/home2/Footer';

export const metadata = {
  title: 'archin',
  icons: {
    icon: '/home_preview/assets/img/fav.png',
    shortcut: '/home_preview/assets/img/fav.png',
    other: generateStylesheetObject([
      '/common/assets/css/lib/bootstrap.min.css',
      '/common/assets/css/lib/all.min.css',
      '/common/assets/css/lib/line-awesome.css',
      '/common/assets/css/lib/themify-icons.css',
      '/common/assets/css/lib/animate.css',
      '/common/assets/css/lib/jquery.fancybox.css',
      '/common/assets/css/lib/lity.css',
      '/common/assets/css/lib/swiper8.min.css',
      '/common/assets/css/common_style.css',
      '/home2/assets/css/home_2_style.css',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
    ]),
  },
};
export default function Home() {
  return (
    <body className="home-style2">
      <Loader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Header />
          <main>
            <Services />
            <Process />
            <Projects />
            <Award />
            <Testimonials />
            <Blog />
            <Contact />
            {/*
             */}
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src="/common/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/common/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      {/* <Script
        src="/landing-preview/assets/js/parallax.min.js"
        strategy="beforeInteractive"
      /> */}
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/plugins.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/countdown.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/isotope.pkgd.min.js"
      ></Script>
      {/* <Script
        strategy="beforeInteractive"
        src="/common/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script> */}
      <Script
        src="/common/assets/js/smoother-script.js"
        strategy="lazyOnload"
      />
      <Script src="/common/assets/js/scripts.js"></Script>
    </body>
  );
}
