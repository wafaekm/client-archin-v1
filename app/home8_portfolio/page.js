import Script from 'next/script';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import SideMenu from '@/components/home8_portfolio/SideMenu';
import Starting from '@/components/home8_portfolio/Starting';
import About from '@/components/home8_portfolio/About';
import Services from '@/components/home8_portfolio/Services';
import Portfolio from '@/components/home8_portfolio/Portfolio';
import Clients from '@/components/home8_portfolio/Clients';
import Partners from '@/components/home8_portfolio/Partners';
import Team from '@/components/home8_portfolio/Team';
import Contact from '@/components/home8_portfolio/Contact';
import Control from '@/components/home8_portfolio/Control';
import Home8Page from '@/components/home8_portfolio/Home8Page';

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
      '/home8_portfolio/assets/css/home_8_style.css',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
    ]),
  },
};
export default function Home() {
  return (
    <body className="home-style8">
      <SideMenu />
      <Starting />
      <main className="fullpage-slider8">
        <Home8Page />
        <Control />
      </main>
      {/* <Script
        src="/common/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/common/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      /> */}
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
      {/* <Script
        strategy="beforeInteractive"
        src="/common/assets/js/gsap.min.js"
      ></Script> */}
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
      {/* <Script
        src="/common/assets/js/smoother-script.js"
        strategy="lazyOnload"
      /> */}
      <Script src="/common/assets/js/scripts.js"></Script>
    </body>
  );
}
