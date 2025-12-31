import Script from 'next/script';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Loader from '@/components/common/Loader';
import StartButton from '@/components/home5_residence/StartButton';
import Menu from '@/components/home5_residence/Menu';
import Navbar from '@/components/home5_residence/Navbar';
import Header from '@/components/home5_residence/Header';
import About from '@/components/home5_residence/About';
import Flawless from '@/components/home5_residence/Flawless';
import Location from '@/components/home5_residence/Location';
import Apartments from '@/components/home5_residence/Apartments';
import Testimonials from '@/components/home5_residence/Testimonials';
import Services from '@/components/home5_residence/Services';
import Blog from '@/components/home5_residence/Blog';
import Footer from '@/components/home5_residence/Footer';

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
      '/home5_residence/assets/css/home_5_style.css',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
    ]),
  },
};
export default function Home() {
  return (
    <body className="home-style5">
      <Loader />
      <Menu />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Header />
          <main>
            <About />
            <Flawless />
            <Location />
            <Apartments />
            <Testimonials />
            <Services />
            <Blog />
          </main>
          <Footer />
        </div>
      </div>
      <StartButton />
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
